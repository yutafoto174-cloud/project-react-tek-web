import { Link } from "react-router-dom";
import { useFav } from "../utils/FavContext";
import { rupiah } from "../utils/data";

// props: k = objek kos dari parent (Dashboard / Favorit)
export default function KosCard({ k }) {
  const { toggleFav, isFav } = useFav();
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg bg-white">
      <img src={k.img} alt={k.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h2 className="font-semibold">{k.name}</h2>
          {/* Conditional rendering: status ketersediaan */}
          {k.available
            ? <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Tersedia</span>
            : <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Penuh</span>}
        </div>
        <p className="text-gray-600 text-sm">{k.type} • {k.area} • ★ {k.rating}</p>
        <p className="font-bold mt-1">{rupiah(k.price)}<span className="text-sm font-normal"> /bulan</span></p>
        <Link to={`/kos/${k.slug}`} className="text-blue-600 hover:underline mt-2 block">Lihat Detail</Link>
        <button onClick={() => toggleFav(k)}
          className={`mt-3 px-4 py-2 rounded-lg text-white ${isFav(k.id) ? "bg-pink-500" : "bg-blue-500 hover:bg-blue-600"}`}>
          {isFav(k.id) ? "♥ Tersimpan" : "♡ Simpan"}
        </button>
      </div>
    </div>
  );
}
