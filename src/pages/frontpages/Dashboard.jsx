import { useState } from "react";
import KosCard from "../../components/KosCard";
import { useKos } from "../../utils/KosContext";

export default function Dashboard() {
  const { kos } = useKos();
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("Semua");

  const filtered = kos.filter((k) =>
    (type === "Semua" || k.type === type) &&
    (k.name + k.area).toLowerCase().includes(keyword.toLowerCase()));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cari Kos di Singaraja</h1>
      <div className="flex flex-col md:flex-row gap-2 mb-6">
        <input value={keyword} onChange={(e) => setKeyword(e.target.value)}
          placeholder="Cari nama kos atau daerah..." className="flex-1 px-4 py-2 border rounded-lg bg-white" />
        <select value={type} onChange={(e) => setType(e.target.value)} className="px-4 py-2 border rounded-lg bg-white">
          {["Semua", "Putra", "Putri", "Campur"].map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      {/* Conditional rendering: pesan jika hasil kosong */}
      {filtered.length === 0 ? (
        <p className="text-gray-500">Kos tidak ditemukan.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => <KosCard key={item.id} k={item} />)}
        </div>
      )}
    </div>
  );
}
