import { Link } from "react-router-dom";
import { useFav } from "../utils/FavContext";
import { useAuth } from "../utils/AuthContext";

export default function Navbar() {
  const { favs } = useFav(); // data dari Context
  const { user, logout } = useAuth();
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">KosSinga</Link>
      <div className="flex gap-5 text-sm sm:text-base">
        <Link to="/">Beranda</Link>
        <Link to="/favorit">
          Favorit
          {/* Conditional rendering: badge hanya muncul jika ada favorit */}
          {favs.length > 0 && <span className="ml-1 bg-red-500 text-xs px-2 rounded-full">{favs.length}</span>}
        </Link>
        {/* Conditional rendering: menu sesuai status login */}
        {user ? (
          <>
            <Link to="/admin/dashboard">Admin</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
