import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User, UserWithoutId } from '../../../entities/user/types/userType';



const initialState: {
    user: User | null,
    accessToken: string
} = {
    user:null,
    accessToken: '',
};


const userSlice  = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccessToken: (state, action: { payload: string; type: string; }) => {
            state.accessToken = action.payload;
        },
    },
    extraReducers: (builder) => {

    }
});


export default userSlice.reducer