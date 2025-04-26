import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { AdminLayout } from '../components/layout/AdminLayout'
import { LoginPage } from '../pages/LoginPage'
import { useAuth } from '../hooks/useAuth'
import { DashboardPage } from '../pages/DashboardPage'
import {SkillsSection} from '../components/dashboard/SkillSection'
import {ProjectsTable} from '../components/dashboard/ProjectsTable'
import {MessagesTable} from '../components/dashboard/MessageTable'
import {ProfileForm} from "../components/dashboard/ProfileForm"

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  return user ? children : <Navigate to="/admin/login" replace />
}

export const AdminRouter = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    {/* <Route element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}> */}
      <Route index element={<DashboardPage />} />
      <Route path="skills" element={<SkillsSection />} />
      <Route path="projects" element={<ProjectsTable />} />
      <Route path="messages" element={<MessagesTable />} />
      <Route path="profile" element={<ProfileForm />} />
    {/* </Route> */}
  </Routes>
)