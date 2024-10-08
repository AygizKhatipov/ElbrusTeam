import { Route, Routes } from 'react-router-dom';
import LoginForm from '../../entities/user/ui/LoginForm';
import RegistrationForm from '../../entities/user/ui/RegistrationForm';
import Navbar from "../../shared/layout/NavBar/NavBar";
import HomePage from "../../pages/HomePage/HomePage";
import GraduatesPage from "../../pages/Community/GraduatesPage";
import StudentsPage from "../../pages/Community/StudentsPage";
import TeachersPage from "../../pages/Community/TeachersPage";
import EventsPage from "../../pages/EventsPage/EventsPage";
import BasePage from "../../pages/BasePage/BasePage";
import CouchesPage from "../../pages/Community/Couches/CouchesPage";
import PersonalPage from "../../pages/PersonalAccount/PersonalPage";
import LogoutPage from '../../pages/LogOut/LogOut';
import ChatPage from '../../pages/ChatPage/ChatPage';
import AdminPage from '../../pages/AdminPage/AdminPage';
import CommunitiesPage from '../../pages/Community/CommunityPage';
import AnonimPage from '../../pages/AdminPage/AnonimousPage';
import PersonalCard from '../../entities/community/ui/PersonalCard/PersonalCard';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';




function AppRoutes(): JSX.Element {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anonymous" element={<AnonimPage />} />
        <Route path="/community" element={<CommunitiesPage />} />
        <Route path="/communityCard/:id" element={<PersonalCard/>} />
        <Route path="/graduates" element={<GraduatesPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/couches" element={<CouchesPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/base" element={<BasePage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route  path= "/chat" element={<ChatPage/>}/>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </>
  );
}

export default AppRoutes;
