import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginFormType, User, UserWithoutId, userWithoutConfirmPassword } from '../../../entities/user/types/userType';
import AuthApi from '../api/authApi';



const initialState: {
    user: User | null,
    accessToken: string
} = {
    user:null,
    accessToken: '',
};

const userRegistration = createAsyncThunk('user/registration',async (data: userWithoutConfirmPassword) =>  AuthApi.registration(data))
const userLogin = createAsyncThunk('user/login',async (data: LoginFormType) =>  AuthApi.login(data))
const userLogout = createAsyncThunk('user/logout',async () =>  AuthApi.logout())
const userRefreshTokens = createAsyncThunk('user/refreshTokens',async () =>  AuthApi.refreshTokens())


const userSlice  = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccessToken: (state, action: { payload: string; type: string; }) => {
            state.accessToken = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userRegistration.fulfilled, (_state, action) => action.payload)
            .addCase(userLogin.fulfilled, (_state, action) => action.payload)
            .addCase(userLogout.fulfilled, (_state) => initialState)
            .addCase(userRefreshTokens.fulfilled, (_state, action) => action.payload)
    }
});



export {userRegistration, userLogin, userLogout, userRefreshTokens}
export const { setAccessToken } = userSlice.actions
export default userSlice.reducer