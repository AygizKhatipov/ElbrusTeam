import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {  CommunityType, PesonalCommunityType, PesonalComType } from '../types/communityType';
import CommunityApi from '../api/communityApi';

const initialState: {
    teachers: PesonalComType[],
    students: PesonalComType[],
    graduates:PesonalComType[],
    couches:PesonalComType[]
}={
    teachers: [],
    students: [],
    graduates:[],
    couches:[]
};




// Создаем асинхронный thunk для загрузки тем с использованием API
const loadTeachers = createAsyncThunk<PesonalComType[]>('teachers/load', () =>
    CommunityApi.getAllTeachers()
);
const loadStudents = createAsyncThunk<PesonalComType[]>('students/load', () =>
    CommunityApi.getAllStudents()
);
const loadGraduates = createAsyncThunk<PesonalComType[]>('graduates/load', () =>
    CommunityApi.getAllGraduates()
);
const loadCouches = createAsyncThunk<PesonalComType[]>('couches/load', () =>
    CommunityApi.getAllCouches()
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
      (state, action: PayloadAction<PesonalComType[]>) => {
        state.teachers.push(...action.payload); // Добавляем полученные темы в состояние
      },
    )
    .addCase(
        loadStudents.fulfilled,
      (state, action: PayloadAction<PesonalComType[]>) => {
        state.students.push(...action.payload); // Добавляем полученные темы в состояние
      },
    )
    .addCase(
        loadGraduates.fulfilled,
      (state, action: PayloadAction<PesonalComType[]>) => {
        state.graduates.push(...action.payload); // Добавляем полученные темы в состояние
      },
    )
    .addCase(
        loadCouches.fulfilled,
      (state, action: PayloadAction<PesonalComType[]>) => {
        state.couches.push(...action.payload); // Добавляем полученные темы в состояние
      },
    );
  },
});

// Экспортируем thunk для использования в компонентах
export { loadTeachers, loadStudents, loadGraduates, loadCouches};
// Экспортируем reducer для добавления в store
export default communitySlice.reducer;
