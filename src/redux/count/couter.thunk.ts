import { createAsyncThunk } from '@reduxjs/toolkit'

export const ResetCounter = createAsyncThunk("couter/reset",()=>{
    return {
        data : 0
    }
})