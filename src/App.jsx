import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/frontpages/Dashboard";
import KosDetail from "./pages/frontpages/KosDetail";
import Favorit from "./pages/frontpages/Favorit";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import AddKos from "./pages/adminpages/AddKos";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="kos/:slug" element={<KosDetail />} />
        <Route path="favorit" element={<Favorit />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="tambah" element={<AddKos />} />
      </Route>
    </Routes>
  );
}
