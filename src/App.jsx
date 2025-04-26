import { Routes, Route } from 'react-router-dom'
import { HomePage } from './user/pages/HomePage'
import { AdminRouter } from './admin/routes/AdminRotuer'

export const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/admin/*" element={<AdminRouter />} />
    </Routes>
  )
}