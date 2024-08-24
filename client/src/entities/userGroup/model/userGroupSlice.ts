import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../../app/providers/initialState/initialState';


const userGroupSlice  = createSlice({
    name: 'userGroup',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {}
})


export default userGroupSlice.reducer