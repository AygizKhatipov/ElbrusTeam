import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../../app/providers/initialState/initialState';


const userGroupSlice  = createSlice({
    name: 'userGroup',
    initialState,
    reducers: {
    },
    extraReducers: () => {}
})


export default userGroupSlice.reducer