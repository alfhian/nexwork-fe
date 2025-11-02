import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../modules/auth/pages/Login";
import Register from "../modules/auth/pages/Register";
import Dashboard from "../dashboard/pages/Dashboard";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
