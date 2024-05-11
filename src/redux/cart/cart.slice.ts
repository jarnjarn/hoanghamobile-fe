import { createSlice } from '@reduxjs/toolkit';
import { Option, ProductType } from '../../types/product.type';
import { clear } from 'console';
import { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit'
import { sub } from '../count/counter.slice';

export type CartProductType = {
	quantity:number;
	product:ProductType;
	option:Option
}

const CartSlice = createSlice({
    name:"auth",
    initialState:[],
    reducers:{
        addToCart : (state:any,action: PayloadAction<any>) =>{
			let product = action.payload;
			let option = action.payload.option;
			let isExist = false;
			for(var i = 0; i < state.length; i++){
				if(state[i].slug === product.slug && state[i].optionSelected.value === option.value){
					state[i].quantity += 1;
					isExist = true;
					break;
				}
			}
			if(!isExist){
				state.push({
					...product,
					quantity:1,
					optionSelected:option
				})
			}
		},
		delFormCart : (state:any,payload:PayloadAction<any>) =>{
			let product = payload.payload;
			state.forEach((item:any,index:number) => {
				if(item.slug === product.slug && item.optionSelected.value === product.optionSelected.value){
					state.splice(index,1);
				}
			});
		},
		subProductFromCart : (state:any,product:any) =>{
			for(var i = 0; i < state.length; i++){
				if(state[i].product.slug === product.slug && state[i].option.value === product.option.value){
					state[i].quantity -= 1;
					break;
				}
			}
		},
		clearCart : (state:any) =>{
			for(var i = 0; i < state.length; i++){
				state.splice(i,1);
			}
		},
		getAll : (state:any) =>{
			return state;
		},
		addQuantity : (state:any,action: PayloadAction<any>) =>{
			let product = action.payload;
			for(var i = 0; i < state.length; i++){
				if(state[i].slug === product.slug && state[i].optionSelected.value === product.option.value){
					state[i].quantity += 1;
					break;
				}
			}
		},
		subQuantity : (state:any,action: PayloadAction<any>) =>{
			let product = action.payload;

			if(product.quantity === 1){
				state.forEach((item:any,index:number) => {
					if(item.slug === product.slug && item.optionSelected.value === product.optionSelected.value){
						state.splice(index,1);
					}
				});
				return;
			}



			for(var i = 0; i < state.length; i++){
				if(state[i].slug === product.slug && state[i].optionSelected.value === product.option.value){
					state[i].quantity -= 1;
					break;
				}
			}
			
		}
    },
    extraReducers:(builder)=>
	{
        
    }
})

export const { addToCart,delFormCart,subProductFromCart,clearCart,getAll,addQuantity,subQuantity } = CartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
export default CartSlice.reducer;