import { createContext, useContext, useState } from "react";
import { kosList } from "./data";

const KosContext = createContext();

export function KosProvider({ children }) {
  // useState: menyimpan daftar kos (data dummy), bisa ditambah/dihapus dari halaman admin
  const [kos, setKos] = useState(kosList);

  const addKos = (item) => {
    const id = Date.now();
    setKos((prev) => [...prev, {
      ...item, id, slug: `${item.name.toLowerCase().replace(/\s+/g, "-")}-${id}`,
      rating: 0, available: true, owner: "Pengelola", wa: "6281234567890", deposit: item.price, rules: ["Sesuai kesepakatan dengan pemilik"], img: `https://picsum.photos/seed/kos${id}/400/250`,
    }]);
  };
  const removeKos = (id) => setKos((prev) => prev.filter((k) => k.id !== id));

  return <KosContext.Provider value={{ kos, addKos, removeKos }}>{children}</KosContext.Provider>;
}
export const useKos = () => useContext(KosContext);
