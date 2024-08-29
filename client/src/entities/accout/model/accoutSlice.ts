import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../../app/providers/initialState/initialState'
import PersonalAPI from '../api/personalAPI';
import { AccountType, PesonalPageType, pretendentType } from '../types/accountType';

// const getAllAccounts = createAsyncThunk('account/getAllAccounts', async () => {
//     return await PersonalAPI.getAllAccounts();
// });

const updatePretendent = createAsyncThunk('account/updatePretendent', async ({data, accountId}: any): Promise<pretendentType> => {
    return await PersonalAPI.updatePretendent({data, accountId});
})

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

const allPretendent = createAsyncThunk('account/allPretendent', async (): Promise<pretendentType[]> => {
    return await PersonalAPI.getAllPretendent();
})

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
        builder.addCase(updatePretendent.fulfilled, (state, action) => {
            console.log(action.payload)
            state.pretendentAccounts  = state.pretendentAccounts .map((newUser) => 
                newUser.id !== action.payload.id ? newUser : action.payload)
        })
        builder.addCase(getAllAccounts.fulfilled, (state, action) => {
            state.allAccounts = action.payload 
        })
        builder.addCase(allPretendent.fulfilled, (state, action) => {
            state.pretendentAccounts = action.payload
        })
    },
});


export {getOneAccount, updateAvatar, updateAccount, getAllAccounts, updatePretendent, allPretendent}
export default accountSlice.reducer;
