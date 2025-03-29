import { Routes, Route } from 'react-router-dom';
import Login from '../pages/admin/Login';
import Messages from '../pages/admin/Message';
import Project from '../pages/admin/Project';
import Skills from '../pages/admin/Skills';
import ProfilePage from '../pages/admin/Profile';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="messages" element={<Messages />} />
      <Route path="project" element={<Project />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="skills" element={<Skills />} />
    </Routes>
  );
};

export default AdminRoutes;
