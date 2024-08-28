import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PesonalCommunityType } from '../types/eventsType';
import { EventsType } from '../types/eventsType';
import eventsApi from '../api/eventApi';

const initialState: EventsType[] = [];

// Создаем асинхронный thunk для загрузки базы знаний с использованием API
const loadEvents = createAsyncThunk<PesonalCommunityType[]>('events/load', () =>
    eventsApi.getAllEvents()
);

// Создаем slice для управления состоянием тем
const eventsSlice = createSlice({
  name: 'eventsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Обработка успешного выполнения thunk loadThemes
    builder.addCase(
        loadEvents.fulfilled,
      (state, action: PayloadAction<EventsType[]>) => {
        state.push(...action.payload); 
      },
    );
  },
});


export { loadEvents };
export default eventsSlice.reducer;