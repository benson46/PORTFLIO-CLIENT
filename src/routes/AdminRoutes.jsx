import { Routes, Route } from 'react-router-dom';
import Login from '../pages/admin/Login';
import Messages from '../pages/admin/Message';
import ProjectsEdit from '../pages/admin/ProjectsEdit';
import Skills from '../pages/admin/Skills';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="messages" element={<Messages />} />
      <Route path="projects-edit" element={<ProjectsEdit />} />
      <Route path="skills" element={<Skills />} />
    </Routes>
  );
};

export default AdminRoutes;
