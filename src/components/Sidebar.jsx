import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
// props: sidebarOpen (boolean) dan setSidebarOpen (fungsi) dikirim dari AdminLayout
export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const { user, logout } = useAuth();
  return (
    <div className={`${sidebarOpen ? "block" : "hidden"} md:block w-64 bg-white shadow-md`}>
      <div className="p-4 font-bold text-xl">KosSinga Admin</div>
      <nav className="flex flex-col p-4 space-y-2">
        <Link onClick={() => setSidebarOpen(false)} to="/admin/dashboard" className="hover:bg-gray-200 p-2 rounded">Data Kos</Link>
        <Link onClick={() => setSidebarOpen(false)} to="/admin/tambah" className="hover:bg-gray-200 p-2 rounded">Tambah Kos</Link>
        <Link to="/" className="hover:bg-gray-200 p-2 rounded text-blue-600">← Ke Website</Link>
        <p className="text-xs text-gray-500 px-2 pt-4">Login: {user?.name}</p>
        <button onClick={logout} className="text-left text-red-600 hover:bg-gray-200 p-2 rounded">Logout</button>
      </nav>
    </div>
  );
}
