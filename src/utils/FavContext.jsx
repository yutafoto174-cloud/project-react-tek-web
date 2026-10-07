import { createContext, useContext, useState } from "react";

const FavContext = createContext();

export function FavProvider({ children }) {
  const [favs, setFavs] = useState([]);
  // tambah jika belum ada, hapus jika sudah ada
  const toggleFav = (k) =>
    setFavs((prev) => (prev.some((x) => x.id === k.id) ? prev.filter((x) => x.id !== k.id) : [...prev, k]));
  const isFav = (id) => favs.some((x) => x.id === id);

  return <FavContext.Provider value={{ favs, toggleFav, isFav }}>{children}</FavContext.Provider>;
}
export const useFav = () => useContext(FavContext);
