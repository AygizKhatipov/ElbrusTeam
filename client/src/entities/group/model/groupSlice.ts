import {  createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../../app/providers/initialState/initialState';




const groupSlice  = createSlice({
    name: 'group',
    initialState,
    reducers: {
    },
    extraReducers: () => {}
});




export default groupSlice.reducer