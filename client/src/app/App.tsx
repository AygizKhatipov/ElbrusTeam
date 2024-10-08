import "@mantine/core/styles.css";
import AppRoutes from "./appRouter/AppRouter";
import './style/App.css'; 
import { FooterSocial } from "../shared/layout/Footer/Footer";
import { useAppDispatch, useAppSelector } from "./providers/store/store";
import { useEffect } from "react";
import { userRefreshTokens } from "../entities/user/model/userSlice";
import { allPretendent, getAllAccounts, getOneAccount } from "../entities/accout/model/accoutSlice";
import { loadBaseDates } from "../entities/baseDates/model/baseDateSlice";
import { loadCouches, loadGraduates, loadStudents, loadTeachers } from "../entities/community/model/communitySlice";

import { loadRoles } from "../entities/role/model/roleSlice";
import { loadPoints } from "../entities/point/model/pointSlice";
import { loadMessages } from "../entities/Chat/model/chatSlice";
import { loadEvents } from "../entities/events/model/eventSlice";






function App() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(state => state.user.user?.id); 






  

  
  

  useEffect(() => {
    dispatch(userRefreshTokens())
      .unwrap()
      .then((userData) => {
        if (userData && userData.user.id) {
          dispatch(getOneAccount(userData.user.id)); 
        }
      })
      .catch(console.log);
  }, [userId]);

  useEffect(() => {
    dispatch(loadTeachers())
      .catch(console.log);
  }, []);
  useEffect(() => {
    dispatch(loadPoints())
      .catch(console.log);
  }, []);
  useEffect(() => {
    dispatch(loadRoles())
      .catch(console.log);
  }, []);
  useEffect(() => {
    dispatch(loadStudents())
      .catch(console.log);
  }, []);
  useEffect(() => {
    dispatch(loadCouches())
      .catch(console.log);
  }, []);
  useEffect(() => {
    dispatch(loadGraduates())
      .catch(console.log);
  }, []);
  useEffect(()=> {
    dispatch(loadMessages())
  }, [])
  useEffect(()=> {
    dispatch(loadBaseDates())
    .catch(console.log)},
     []);
  
     useEffect(()=> {
      dispatch(loadEvents())
      .catch(console.log)},
       []);   
     
     useEffect(()=> {
       dispatch(getAllAccounts())
     }, [])
     useEffect(() => {
      dispatch(allPretendent())
        .unwrap()
        .then(() => {
          console.log('Pretendent accounts loaded successfully.');
        })
        .catch((error) => {
          console.error('Failed to load pretendent accounts:', error);
        });
    }, []);

  return (
    <div className="app-wrapper">
      <div className="content">
        <AppRoutes />
      </div>
      <FooterSocial />
    </div>
  );
}

export default App;

// ПРОБЕЛ, КНОПКА НАЗАД, СТЕЙТЫ ВОССТАНОВИТЬ, ФОТКИ ВОССТАНОВИТЬ
