import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from '../../../entities/user/model/userSlice';
import userGroupSliceReducer from '../../../entities/userGroup/model/userGroupSlice';
import roleSliceReducer from '../../../entities/role/model/roleSlice';
import groupSliceReducer from '../../../entities/group/model/groupSlice';
import accoutSliceReducer from '../../../entities/accout/model/accoutSlice';
import communitySliceReducer from '../../../entities/community/model/communitySlice';
import pointSlice from '../../../entities/point/model/pointSlice';
import baseDateSliceReducer from '../../../entities/baseDates/model/baseDateSlice';
import chatSliceReducer from '../../../entities/Chat/model/chatSlice';
import eventSlice from '../../../entities/events/model/eventSlice';





const store = configureStore({
    reducer: {
        user: userSliceReducer, //здесь хранится accessToken и данные юзера без аккаунта
        userGroup: userGroupSliceReducer, // здесь пока что ничего
        role: roleSliceReducer,// здесь хранятся роли
        group: groupSliceReducer,// пока что ничего не хранится
        account :accoutSliceReducer, //здесь хранится аккаунт и все аккаунты 
        community: communitySliceReducer, //здесь хранятся данные о студентах и преподавателях и т.д.
        point: pointSlice, //ЗДЕСЬ ХРАНЯТСЯ БАЛЛЫ ДЛЯ КАЖДОГО ПОЛЬЗОВАТЕЛЯ
        baseDate: baseDateSliceReducer, 
        chat: chatSliceReducer, // ЧАТ 
        event: eventSlice, // СОБЫТИЯ 
    }
})






type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();


export default store
