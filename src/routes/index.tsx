import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<h1>Dashboard</h1>} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
