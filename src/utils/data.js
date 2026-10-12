// Data dummy kos (field: id, name, slug, price, area, type, rating, available, facilities, img)
export const rupiah = (n) => "Rp " + Number(n).toLocaleString("id-ID");
const OWNERS = ["Bu Made", "Pak Komang", "Bu Ketut", "Pak Wayan", "Bu Nyoman"];
const RULES = [
  ["Jam malam 22.00", "Tamu tidak boleh menginap", "Listrik token sendiri"],
  ["Jam malam 23.00", "Dilarang merokok di kamar", "Bayar per bulan di muka"],
  ["Tamu lawan jenis dilarang masuk kamar", "Jaga kebersihan bersama", "Listrik termasuk biaya sewa"],
];
const mk = (id, name, price, area, type, rating, available, facilities) => ({
  id, name, slug: name.toLowerCase().replace(/\s+/g, "-"), price, area, type, rating, available,
  facilities, img: `${import.meta.env.BASE_URL}images/kos${id}.jpg`,
  owner: OWNERS[id - 1], wa: "6281352374349", deposit: price,
  rules: RULES[id % 3],
});
export const kosList = [
  mk(1, "Kos Putri Asri", 650000, "Jineng Dalem", "Putri", 4.5, true, ["WiFi", "Kamar mandi dalam", "Parkir motor"]),
  mk(2, "Kos Putra Mandiri", 550000, "Banyuasri", "Putra", 4.2, true, ["WiFi", "Dapur bersama"]),
  mk(3, "Kos Campur Singaraja", 500000, "Kampung Baru", "Campur", 4.0, false, ["Parkir motor", "Kipas angin"]),
  mk(4, "Kos Eksklusif Undiksha", 1200000, "Jineng Dalem", "Putri", 4.8, true, ["AC", "WiFi", "Kamar mandi dalam", "Laundry"]),
  mk(5, "Kos Putra Bahari", 700000, "Kaliuntu", "Putra", 4.3, true, ["WiFi", "AC", "Parkir motor"]),
];
