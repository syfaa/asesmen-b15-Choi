let gelobal = ["nama1", "nama2", "namaseterusnya", "dst"];

gelobal = [
  "Mochamad Dena Eka Putra",
  "Fajar Kresna Pahlawan",
  "Gusti Arsyad",
  "Nanda Nipri D",
  "Fadhitya Syafa Andini",
  "Hardiansyah Rochani",
  "dst",
];

// Kode di bawah untuk dibaca saja, jangan diubah ya. Pengerjaan kalian cukup di atas ini
let sebuah_fungsi = function (suatu_input) {
  console.log("ini variabel global ->", "gelobal =", gelobal);
  let lokal = { Plis: "nonton", anime: "Clannad" };
  console.log("ini variabel lokal ->", "lokal =", lokal);
  console.log(
    "ini variabel lokal juga nggak sih? ->",
    "suatu_input =",
    suatu_input
  );
  return "Semangat belajarnya, sukses selalu!";
};

let hasil_eksekusi = sebuah_fungsi(gelobal);
console.log(hasil_eksekusi);
