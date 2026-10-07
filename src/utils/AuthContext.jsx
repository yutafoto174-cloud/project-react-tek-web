import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
// Akun dummy (simulasi, tanpa backend)
const DUMMY = { email: "admin@kossinga.com", password: "admin123", name: "Admin KosSinga" };

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (email, password) => {
    if (email === DUMMY.email && password === DUMMY.password) {
      setUser({ email, name: DUMMY.name });
      return { success: true };
    }
    return { success: false, message: "Email atau password salah." };
  };
  const logout = () => setUser(null);
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
