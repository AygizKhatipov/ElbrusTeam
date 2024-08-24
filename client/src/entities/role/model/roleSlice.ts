import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../../app/providers/initialState/initialState';





const roleSlice  = createSlice({
    name: 'role',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {}
});




export default roleSlice.reducer