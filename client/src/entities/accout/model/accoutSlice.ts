import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../../app/providers/initialState/initialState'
import PersonalAPI from '../api/personalAPI';

// const getAllAccounts = createAsyncThunk('account/getAllAccounts', async () => {
//     return await PersonalAPI.getAllAccounts();
// });

const getOneAccount = createAsyncThunk('account/getOneAccount', async (id: number ) => {
    return await PersonalAPI.getOneAccount(id);
});

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOneAccount.fulfilled, (state, action) => {
            state.account = action.payload});
    },
});


export {getOneAccount}
export default accountSlice.reducer;
