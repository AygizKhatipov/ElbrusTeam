import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../../app/providers/initialState/initialState';





const accountSlice  = createSlice({
    name: 'account',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {}
});




export default accountSlice.reducer