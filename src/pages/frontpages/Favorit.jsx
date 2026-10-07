import { Link } from "react-router-dom";
import KosCard from "../../components/KosCard";
import { useFav } from "../../utils/FavContext";

export default function Favorit() {
  const { favs } = useFav();
  if (favs.length === 0)
    return <p className="text-center text-gray-600">Belum ada kos favorit. <Link to="/" className="text-blue-600">Cari kos</Link></p>;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Kos Favorit Saya</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {favs.map((k) => <KosCard key={k.id} k={k} />)}
      </div>
    </div>
  );
}
