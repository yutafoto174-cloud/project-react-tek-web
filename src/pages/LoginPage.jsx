import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

export default function LoginPage() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Jika sudah login, langsung ke dashboard admin
  useEffect(() => { if (user) navigate("/admin/dashboard"); }, [user, navigate]);

  const submit = (e) => {
    e.preventDefault();
    const res = login(email, password);
    if (!res.success) setError(res.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={submit} className="w-full max-w-sm p-8 space-y-4 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center">Login Admin</h1>
        {/* Conditional rendering: pesan error */}
        {error && <div className="p-3 text-sm text-red-700 bg-red-50 rounded">{error}</div>}
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" className="w-full border rounded-lg p-2" />
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" className="w-full border rounded-lg p-2" />
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Masuk</button>
        <p className="text-xs text-gray-500 text-center">Demo: admin@kossinga.com / admin123</p>
        <Link to="/" className="block text-center text-sm text-blue-600">← Kembali ke website</Link>
      </form>
    </div>
  );
}
