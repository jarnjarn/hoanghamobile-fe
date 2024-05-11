import { createSlice } from '@reduxjs/toolkit';
import { GetUserInfo } from './auth.thunk';

const AuthSlice = createSlice({
    name:"auth",
    initialState:{
		user : null,
		token : null,
		userInfo:null
	},
    reducers:{
        login : (state:any,user:any) =>{
			state.user = user.payload;
		},
		logout : (state:any) =>{
			state.user = null;
		},
		setToken : (state:any,token:any) =>{
			state.token = token.payload;
		},
		setUserInfo : (state:any,userInfo:any) =>{
			state.userInfo = userInfo.payload;
		}
    },
    extraReducers:(builder)=>
	{
        builder.addCase(GetUserInfo.fulfilled,(state:any,action:any)=>{
			state.userInfo = action.payload;
		})
    }
})

export const { login,logout ,setToken} = AuthSlice.actions;
export default AuthSlice.reducer;