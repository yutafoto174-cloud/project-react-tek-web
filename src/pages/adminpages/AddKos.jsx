import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useKos } from "../../utils/KosContext";

export default function AddKos() {
  const { addKos } = useKos();
  const navigate = useNavigate();
  const [f, setF] = useState({ name: "", area: "", type: "Putra", price: "", facilities: "" });
  const change = (e) => setF({ ...f, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    addKos({ ...f, price: Number(f.price), facilities: f.facilities.split(",").map((s) => s.trim()).filter(Boolean) });
    navigate("/admin/dashboard");
  };
  const cls = "border rounded p-2 w-full";
  return (
    <form onSubmit={submit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-3">
      <h1 className="text-xl font-bold">Tambah Kos (Simulasi Input)</h1>
      <input name="name" value={f.name} onChange={change} required placeholder="Nama kos" className={cls} />
      <input name="area" value={f.area} onChange={change} required placeholder="Daerah (mis. Banyuasri)" className={cls} />
      <select name="type" value={f.type} onChange={change} className={cls}>{["Putra", "Putri", "Campur"].map((t) => <option key={t}>{t}</option>)}</select>
      <input name="price" type="number" value={f.price} onChange={change} required placeholder="Harga per bulan" className={cls} />
      <input name="facilities" value={f.facilities} onChange={change} placeholder="Fasilitas, pisahkan koma" className={cls} />
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Simpan</button>
    </form>
  );
}
