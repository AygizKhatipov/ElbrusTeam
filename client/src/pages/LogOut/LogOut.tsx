import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/providers/store/store';
import { userLogout } from '../../entities/user/model/userSlice';
// import { ButtonProgress } from './ButtonProgress';
import './LogoutPage.css'; // Подключаем CSS файл

function LogoutPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const logoutUser = () => {
    dispatch(userLogout())
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };

  return (
    <div className="logout-page-container">
      {/* Полупрозрачный оверлей */}
      <div className="logout-page-overlay"></div>

      {/* Контент страницы */}
      <div className="logout-page-content">
        <h1>Ты точно хочешь уйти?</h1>
        <div onClick={logoutUser} className="logout-page-button">
          <ButtonProgress />
        </div>
      </div>
    </div>
  );
}

export default LogoutPage;
