// Silahkan teman-teman membuat branch sendiri menggunakan nama lengkap (jika belum), kemudian mengerjakan soal berikut di branch masing-masing

const nomorSatu =`Diberikan sebuah variabel bernama 'arr' berisi array. 
    Dengan hanya menggunakan metode .push, .pop, .shift dan .unshift, jadikanlah array tersebut berisi angka urut dari 1 sampai 9!`
const arr = [-6, 9999, 3, 4, 5, 6, 7, 6, 5]
// contoh: arr.push(9); arr.pop(); arr.pop(); arr.unshift(2); dst....
// hasil akhir arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Silahkan mengerjakan di bawah ini (jumlah baris yang dibutuhkan mungkin berbeda, sesuaikan saja)

arr.shift();
arr.shift();
arr.unshift(1,2);
arr.pop();
arr.pop();
arr.push(8,9);
console.log(arr);

console.log(
  "======================================================================"
);
// Silahkan mengerjakan soal nomorSatu di atas ini (jumlah baris yang dibutuhkan mungkin berbeda, sesuaikan saja)



const nomorDua = `Diberikan sebuah variabel bernama 'gelobal' berisi array. 
    Ubahlah setiap elemen di dalam array tersebut dari string menjadi objek yang berisi string aslinya utuh dan huruf pertama dari string aslinya. 
    Silahkan menggunakan satu dari tiga cara berikut:
    1. looping (for atau while)
    2. .map
    3. .forEach`
// contoh hasil = [{asli: "Choirul R", hurufPertama: "c"}, {asli: "Clannad After Story", hurufPertama: "C"}]
// Silahkan mengerjakan soal nomorDua di bawah ini (jumlah baris yang dibutuhkan mungkin berbeda, sesuaikan saja)
const gelobal = [
  "Mochamad Dena Eka Putra",
  "Fajar Kresna Pahlawan",
  "Gusti Arsyad",
  "Nanda Nipri D",
  "Fadhitya Syafa Andini",
  "Hardiansyah Rochani",
  "Kevin Marchiano",
  "Anggun Wahyuni",
  "Khairul Umam",
  "Fidoni Agusta Hartoyo",
];

let urutanNama = [];
urutanNama = gelobal.map(function (item) {
  let nama = {};
  nama["asli"] = item;
  nama["hurufPertama"] = item.charAt(0);

  return nama;
});
console.log(urutanNama);



// Silahkan mengerjakan soal nomorDua di atas ini (jumlah baris yang dibutuhkan mungkin berbeda, sesuaikan saja)





const nomorTiga = `uhh... ngoding aja apapun, yang penting ada "if else"nya. Tidak boleh ada yang mirip ya dengan contoh maupun dengan teman yang lainnya. Indikator mirip nggaknya ya nanti kita lihat`
// contoh :
// let udahNontonClannad = true
// if (udahNontonClannad) { console.log("nice") }
// else { console.log("buruan nonton") }
// contoh selesai
// Silahkan mengerjakan soal nomorTiga di bawah ini (jumlah baris yang dibutuhkan mungkin berbeda, sesuaikan saja)

let fruits = ["Watermelon", "Banana", "Orange", "cabbage", "apple"];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] != "cabbage") {
    console.log(
      `${fruits[i]}  is a healthy food, it's definitely worth to eat.`
    );
  } else console.log(`${fruits[i]} is not a fruit`);
}

console.log(
  "======================================================================"
);

// Silahkan mengerjakan soal nomorTiga di atas ini (jumlah baris yang dibutuhkan mungkin berbeda, sesuaikan saja)
// NB: Sepertinya soal nomorTiga berpotensi tinggi untuk copas kodingan dari tempat lain karena konteksnya bebas, tapi plis bikin sendiri. Selamat mengerjakan
// NB2: Oh iya, pastikan setelah selesai semua, filenya tidak ada error apapun saat dijalankan ya ("node w2.js" di terminal)
// NB3: Oh iya lagi, boleh membuat file tambahan tetapi soalnya tetap dikerjakan di file ini dan jawaban utamanya tetap berada di tempat yang disediakan
