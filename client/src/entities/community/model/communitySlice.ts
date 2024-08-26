import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CommunityType, PesonalCommunityType } from '../types/communityType';
import CommunityApi from '../api/communityApi';

const initialState: PesonalCommunityType[] = [];

// Создаем асинхронный thunk для загрузки тем с использованием API
const loadTeachers = createAsyncThunk<PesonalCommunityType[]>('teachers/load', () =>
    CommunityApi.getAllTeachers()
);

// Создаем slice для управления состоянием тем
const communitySlice = createSlice({
  name: 'communitySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Обработка успешного выполнения thunk loadThemes
    builder.addCase(
        loadTeachers.fulfilled,
      (state, action: PayloadAction<PesonalCommunityType[]>) => {
        state.push(...action.payload); // Добавляем полученные темы в состояние
      },
    );
  },
});

// Экспортируем thunk для использования в компонентах
export { loadTeachers };
// Экспортируем reducer для добавления в store
export default communitySlice.reducer;
