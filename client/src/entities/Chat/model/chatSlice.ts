import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../../app/providers/initialState/initialState'
import ChatApi from '../api/chatApi';



const getAllMessages = createAsyncThunk('chat/getAllMessages', async () => {
    return await ChatApi.getAllMessages();
})



const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllMessages.fulfilled, (state, action) => {
            state.chat = action.payload
        })
        
    },
});









export {getAllMessages}
export default chatSlice.reducer