import { createSlice } from '@reduxjs/toolkit';
import { ResetCounter } from './couter.thunk';




const couterSlice = createSlice({
    name:"couter",
    initialState:{
        data:0
    },
    reducers:{
        plus : (state:any) =>
        {
            state.data +=1;
        },
        sub : (state:any) =>{
            state.data -=1;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(ResetCounter.fulfilled,(state,{payload})=>{
            state.data = payload.data;
        })
    }
})

export const { plus,sub } = couterSlice.actions;
export default couterSlice.reducer;