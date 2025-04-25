import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import { User } from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/" element={<User/>}/>
        {/* // <Route path="/*" element={<UserRoutes />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
