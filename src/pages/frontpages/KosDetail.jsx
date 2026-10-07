import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useKos } from "../../utils/KosContext";
import { rupiah } from "../../utils/data";

export default function KosDetail() {
  const { slug } = useParams();
  const { kos } = useKos();
  const k = kos.find((x) => x.slug === slug);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  if (!k) return <p>Kos tidak ditemukan. <Link to="/" className="text-blue-600">Kembali</Link></p>;

  const submit = (e) => {
    e.preventDefault();
    if (!rating || !review.trim()) return;
    setReviews([...reviews, { id: Date.now(), rating, review }]);
    setRating(0); setReview("");
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <section className="md:col-span-2 space-y-4">
        <div className="border rounded-lg bg-white overflow-hidden shadow">
          <img src={k.img} alt={k.name} className="w-full h-60 object-cover" />
          <div className="p-4">
            <h1 className="text-2xl font-bold">{k.name}</h1>
            <p className="text-gray-600">{k.type} • {k.area} • ★ {k.rating}</p>
            <p className="font-bold text-lg mt-2">{rupiah(k.price)} /bulan</p>
            <p className="mt-2 text-sm">Fasilitas: {k.facilities.join(", ")}</p>
            <p className="mt-1 text-sm">Pemilik: {k.owner} • Deposit: {rupiah(k.deposit)}</p>
            <h3 className="mt-3 font-semibold text-sm">Aturan kos:</h3>
            <ul className="list-disc ml-5 text-sm">{k.rules.map((r) => <li key={r}>{r}</li>)}</ul>

            {k.available ? (
              <a
                href={`https://wa.me/${k.wa}?text=${encodeURIComponent("Halo, saya tertarik dengan " + k.name)}`}
                target="_blank" rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Hubungi via WhatsApp
              </a>
            ) : (
              <button disabled className="mt-4 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg">Kamar Penuh</button>
            )}
          </div>
        </div>
        <h2 className="text-xl font-semibold">Ulasan Penghuni</h2>
        {reviews.length === 0 ? <p className="text-gray-500">Belum ada ulasan.</p> : (
          <ul className="space-y-3">
            {reviews.map((r) => (
              <li key={r.id} className="border rounded-lg p-3 bg-white">
                <div className="text-yellow-500">{"★".repeat(r.rating)}<span className="text-gray-300">{"★".repeat(5 - r.rating)}</span></div>
                <p>{r.review}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="border rounded-lg p-4 bg-white shadow h-fit">
        <h2 className="text-xl font-semibold mb-3">Tulis Ulasan</h2>
        <form onSubmit={submit}>
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <button type="button" key={s} onClick={() => setRating(s)}
                className={`text-2xl ${s <= rating ? "text-yellow-500" : "text-gray-300"}`}>★</button>
            ))}
          </div>
          <textarea value={review} onChange={(e) => setReview(e.target.value)} rows="3"
            placeholder="Tulis pengalaman Anda..." className="w-full border rounded-lg p-2 mb-3" />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Kirim</button>
        </form>
      </section>
    </div>
  );
}
