import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../../app/providers/initialState/initialState'
import PersonalAPI from '../api/personalAPI';
import { AccountType, PesonalPageType } from '../types/accountType';

// const getAllAccounts = createAsyncThunk('account/getAllAccounts', async () => {
//     return await PersonalAPI.getAllAccounts();
// });

const getAllAccounts = createAsyncThunk('account/getAllAccounts', async () => {
    return await PersonalAPI.getAllAccounts();
})

const getOneAccount = createAsyncThunk('account/getOneAccount', async (id: number ) => {
    return await PersonalAPI.getOneAccount(id);
});

const updateAvatar = createAsyncThunk('account/updateAvatar', async (formData: any): Promise<AccountType> => {
    return await PersonalAPI.updateAvatar(formData);
});

const updateAccount = createAsyncThunk('account/updateAccount', async ({data, accountId}: any): Promise<PesonalPageType> => {
return await PersonalAPI.updateAccount({data, accountId});
});

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOneAccount.fulfilled, (state, action) => {
            state.account = action.payload});
        builder.addCase(updateAvatar.fulfilled, (state, action) => {
            state.account.Account = action.payload
        })
        builder.addCase(updateAccount.fulfilled, (state, action) => {
            console.log(action.payload)
             state.account = action.payload
        })
        // builder.addCase(updateAccount.fulfilled, (state, action) => {
        //     state.allAccounts.push(action.payload)// скорее всего наждо сделать новый крад на сервере, так как у нас в state.account должен хранится аккаунт текущего пользователя и мы не можем менятт этот стейт 
        // })
        builder.addCase(getAllAccounts.fulfilled, (state, action) => {
            state.allAccounts = action.payload 
        })
    },
});


export {getOneAccount, updateAvatar, updateAccount, getAllAccounts}
export default accountSlice.reducer;
