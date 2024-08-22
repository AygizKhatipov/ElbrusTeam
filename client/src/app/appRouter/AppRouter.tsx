import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../../shared/layout/NavBar/NavBar";
import HomePage from "../../pages/HomePage";
import GraduatesPage from "../../pages/Community/GraduatesPage";
import StudentsPage from "../../pages/Community/StudentsPage";
import TeachersPage from "../../pages/Community/TeachersPage";
import EventsPage from "../../pages/EventsPage";
import BasePage from "../../pages/Base/BasePage";
import CouchesPage from "../../pages/Community/Couches/CouchesPage";
import PersonalPage from "../../pages/PersonalAccount/PersonalPage";

function AppRoutes(): JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/graduates" element={<GraduatesPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/couches" element={<CouchesPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/base" element={<BasePage />} />

        {/* <Route path="/login" element={<LoginForm />} /> */}
        {/* всегда внизу */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default AppRoutes;
