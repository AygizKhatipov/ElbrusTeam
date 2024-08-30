
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ChatApi from '../api/chatApi';


export interface Message {
    id: number;
    fromId: number;
    toId: number;
    message: string;
  }

export interface ChatState {
    messages: Message[];
  }

  export type ChatType = {
    id: number,
    message: string,
    fromId: number,
    toId: number
}

const initialState: ChatState = {
    messages: [],
  };

  const loadMessages = createAsyncThunk<ChatType[]>('chat/loadMessages', async () => { 
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
        builder.addCase(loadMessages.fulfilled, (state, action: PayloadAction<ChatType[]>) => {
            state.messages = action.payload
        })
    }
    
});





export {loadMessages}
export const { setMessage } = chatSlice.actions
export default chatSlice.reducer