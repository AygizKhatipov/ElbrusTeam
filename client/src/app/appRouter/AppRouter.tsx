import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from '../../shared/layout/NavBar/NavBar';
import HomePage from '../../pages/HomePage';
import GraduatesPage from '../../pages/Community/GraduatesPage';
import StudentsPage from '../../pages/Community/StudentsPage';
import TeachersPage from '../../pages/Community/TeachersPage';
import EventsPage from '../../pages/EventsPage';
import LoginForm from '../../entities/user/ui/LoginForm';
import RegistrationForm from '../../entities/user/ui/RegistrationForm';


function AppRoutes(): JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/graduates" element={<GraduatesPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/teachers" element={< TeachersPage/>} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default AppRoutes;
