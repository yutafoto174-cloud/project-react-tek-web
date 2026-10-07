# Laporan Prototipe KosSinga
**Nama / NIM:** ........  **Mata Kuliah:** Pemrograman Web  **Dosen:** Agus Seputra

## 1. Studi Kasus
KosSinga: prototipe pencari kos dan layanan mahasiswa di Singaraja (data dummy).

## 2. Tech Stack (sertakan screenshot untuk tiap poin)
| Teknologi | Fungsi | Bukti |
|---|---|---|
| Node.js + NPM | menjalankan & mengelola paket | screenshot `node -v`, `npm -v` |
| React 19 + Vite | UI berbasis komponen & build tool | screenshot `npm run dev` |
| Tailwind CSS 4 | styling responsif | screenshot tampilan web |
| React Router (HashRouter) | navigasi antarhalaman | screenshot Beranda → Detail |
| Vercel / GitHub Pages | hosting | screenshot halaman live |

## 3. Penerapan Konsep React
| Konsep | Lokasi di kode | Penjelasan singkat |
|---|---|---|
| Component | `components/Navbar, KosCard, Sidebar` | UI dipecah jadi bagian reusable |
| Passing Props | `Dashboard → <KosCard k={item} />`; `AdminLayout → Sidebar` | parent mengirim data ke child |
| Conditional Rendering | badge Favorit di Navbar, status Tersedia/Penuh, "Kos tidak ditemukan", menu Login/Logout, tombol WhatsApp | tampilan bergantung kondisi |
| useState | pencarian/filter, ulasan, form, sidebar | data lokal yang berubah |
| useContext | `KosContext` (daftar kos), `FavContext` (favorit) | state global tanpa props drilling |

## 4. Halaman (screenshot)
Frontpage: Beranda, Detail, Favorit, Login.  Backpage: Data Kos, Tambah Kos.

## 5. Checklist Evaluasi BAB II
(centang 7 poin dari modul)

## 6. Lampiran
- Publish URL: ........
- GitHub Repo: ........

## Alur Sewa
Pengguna menghubungi pemilik langsung via WhatsApp; pembayaran dan kesepakatan dilakukan di luar aplikasi.
