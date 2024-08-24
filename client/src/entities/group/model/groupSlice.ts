import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../../app/providers/initialState/initialState';




const groupSlice  = createSlice({
    name: 'group',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {}
});




export default groupSlice.reducer