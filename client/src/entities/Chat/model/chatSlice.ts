
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ChatApi from '../api/chatApi';

interface Message {
    id: string;
    fromId: number;
    toId: number;
    message: string;
    username: string;
    event: string;
  }

interface ChatState {
    messages: Message[];
  }

const initialState: ChatState = {
    messages: [],
  };

  const loadMessages = createAsyncThunk('chat/loadMessages', async () => { 
    return await ChatApi.getAllMessages()
  })


const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setMessage: (state, action:  PayloadAction<Message>) => {
            state.messages.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadMessages.fulfilled, (state, action) => {
            state.messages = action.payload
        })
    }
    
});





export {loadMessages}
export const { setMessage } = chatSlice.actions
export default chatSlice.reducer