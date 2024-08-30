import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import baseDatesApi from '../api/baseDatesApi';
import { BaseDatesType } from '../types/baseDatesType';

const initialState: BaseDatesType[] = [];

// Создаем асинхронный thunk для загрузки базы знаний с использованием API
const loadBaseDates = createAsyncThunk<BaseDatesType[]>('basedates/load', () =>
     baseDatesApi.getAllBaseDates()
);

// Создаем slice для управления состоянием тем
const baseDatesSlice = createSlice({
  name: 'baseDatesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Обработка успешного выполнения thunk loadThemes
    builder.addCase(
        loadBaseDates.fulfilled,
      (state, action: PayloadAction<BaseDatesType[]>) => {
         state.push(...action.payload); 
      },
    );
  },
});

// Экспортируем thunk для использования в компонентах
export { loadBaseDates };
// Экспортируем reducer для добавления в store
export default baseDatesSlice.reducer;