import { Link } from "react-router-dom";
import { useKos } from "../../utils/KosContext";
import { rupiah } from "../../utils/data";

export default function AdminDashboard() {
  const { kos, removeKos } = useKos();
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Manajemen Kos ({kos.length})</h1>
        <Link to="/admin/tambah" className="bg-blue-500 text-white px-4 py-2 rounded">+ Tambah Kos</Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border text-left">
          <thead className="bg-gray-100"><tr>
            {["#", "Nama", "Daerah", "Tipe", "Harga", "Aksi"].map((h) => <th key={h} className="p-2 border">{h}</th>)}
          </tr></thead>
          <tbody>
            {kos.map((k, i) => (
              <tr key={k.id}>
                <td className="p-2 border">{i + 1}</td><td className="p-2 border">{k.name}</td>
                <td className="p-2 border">{k.area}</td><td className="p-2 border">{k.type}</td>
                <td className="p-2 border">{rupiah(k.price)}</td>
                <td className="p-2 border">
                  <button onClick={() => window.confirm("Hapus kos ini?") && removeKos(k.id)} className="text-red-600 hover:underline">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
