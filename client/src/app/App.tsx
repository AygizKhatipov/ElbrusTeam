import "@mantine/core/styles.css";
import AppRoutes from "./appRouter/AppRouter";
import './style/App.css'; 
import { FooterSocial } from "../shared/layout/Footer/Footer";
import { useAppDispatch, useAppSelector } from "./providers/store/store";
import { useEffect } from "react";
import { userRefreshTokens } from "../entities/user/model/userSlice";
import { getOneAccount } from "../entities/accout/model/accoutSlice";


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
