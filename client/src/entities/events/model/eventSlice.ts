import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { EventsType, EventsTypeWithoutId } from '../types/eventsType';
import eventApi from '../api/eventApi';

const initialState: EventsType[] = [];

const loadEvents = createAsyncThunk<EventsType[]>('events/load', () =>
  eventApi.getAllEvents()
);
const createEvent=createAsyncThunk("events/create", ( form: EventsTypeWithoutId)=> eventApi.createEvent(form))


// Создаем slice для управления состоянием тем
const eventsSlice = createSlice({
  name: 'eventsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
        loadEvents.fulfilled,
      (state, action: PayloadAction<EventsType[]>) => {
        state.push(...action.payload); 
      },
    );
    builder.addCase(createEvent.fulfilled,(state, action)=>{
      state.push(action.payload)
  })
  },
});


export { loadEvents, createEvent };
export default eventsSlice.reducer;