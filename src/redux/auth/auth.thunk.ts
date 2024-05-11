import { createAsyncThunk } from "@reduxjs/toolkit"
import userService from "../../services/user.service"
export const GetUserInfo = createAsyncThunk("auth/userInfo",async ()=>{
    return await userService.getInfo();
})