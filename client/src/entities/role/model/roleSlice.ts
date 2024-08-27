import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Roles } from '../types/roleType';
import RoleApi from '../api/roleApi';


const initialState: {
    roles: Roles[]
}={
    roles: []
};

const loadRoles = createAsyncThunk<Roles[]>('roles/load', () =>
    RoleApi.getAllRoles()
);


const roleSlice  = createSlice({
    name: 'role',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(
            loadRoles.fulfilled,
          (state, action: PayloadAction<Roles[]>) => {
            state.roles.push(...action.payload); // Добавляем полученные темы в состояние
          },
        )
    }
});


export { loadRoles};

export default roleSlice.reducer