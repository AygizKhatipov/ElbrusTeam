import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from '../../../entities/user/model/userSlice';
import userGroupSliceReducer from '../../../entities/userGroup/model/userGroupSlice';
import roleSliceReducer from '../../../entities/role/model/roleSlice';
import groupSliceReducer from '../../../entities/group/model/groupSlice';
import accoutSliceReducer from '../../../entities/accout/model/accoutSlice';




const store = configureStore({
    reducer: {
        user: userSliceReducer,
        userGroup: userGroupSliceReducer,
        role: roleSliceReducer,
        group: groupSliceReducer,
        account :accoutSliceReducer
    }
})






type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();


export default store