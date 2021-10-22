// Silahkan teman-teman membuat branch sendiri menggunakan nama lengkap (jika belum), kemudian mengerjakan soal berikut di branch masing-masing

const nomorSatu = `Diberikan sebuah variabel bernama 'arr' berisi array. 
    Dengan hanya menggunakan metode .push, .pop, .shift dan .unshift, jadikanlah array tersebut berisi angka urut dari 1 sampai 9!`;
const arr = [-6, 9999, 3, 4, 5, 6, 7, 6, 5];
// contoh: arr.push(9); arr.pop(); arr.pop(); arr.unshift(2); dst....
// hasil akhir arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Silahkan mengerjakan di bawah ini (jumlah baris yang dibutuhkan mungkin berbeda, sesuaikan saja)

/* Jawaban 1*/
const arr = [-6, 9999, 3, 4, 5, 6, 7, 6, 5];
arr.shift();
arr.shift();
arr.unshift(1, 2);
arr.pop();
arr.pop();
arr.push(8, 9);
console.log(arr);

// const nomorDua = `Diberikan sebuah variabel bernama 'gelobal' berisi array.
//     Ubahlah setiap elemen di dalam array tersebut dari string menjadi objek yang berisi string aslinya utuh dan huruf pertama dari string aslinya.
//     Silahkan menggunakan satu dari tiga cara berikut:
//     1. looping (for atau while)
//     2. .map
//     3. .forEach`
// const gelobal = ["Mochamad Dena Eka Putra", "Fajar Kresna Pahlawan", "Gusti Arsyad", "Nanda Nipri D", "Fadhitya Syafa Andini", "Hardiansyah Rochani", "Kevin Marchiano", "Anggun Wahyuni", "Khairul Umam", "Fidoni Agusta Hartoyo"];
// contoh hasil = [{asli: "Choirul R", hurufPertama: "c"}, {asli: "Clannad After Story", hurufPertama: "C"}]
// Silahkan mengerjakan soal nomorDua di bawah ini (jumlah baris yang dibutuhkan mungkin berbeda, sesuaikan saja)

/* Jawaban 2*/
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
let objectGelobal = [];
objectGelobal = gelobal.map(function (objectString) {
  let hasil = {};
  hasil["data"] = objectString;
  hasil["hurufAwal"] = objectString.charAt(0);
  return hasil;
});
console.log(objectGelobal);

// const nomorTiga = `uhh... ngoding aja apapun, yang penting ada "if else"nya. Tidak boleh ada yang mirip ya. Indikator mirip nggaknya ya nanti kita lihat`;
// contoh :
// let udahNontonClannad = true
// if (udahNontonClannad) { console.log("nice") }
// else { console.log("buruan nonton") }
// contoh selesai
// Silahkan mengerjakan soal nomorTiga di bawah ini (jumlah baris yang dibutuhkan mungkin berbeda, sesuaikan saja)

/* Jawaban 3*/
let umur = 20;

if(umur >= 11){
    console.log('Pangkas Bayar = Rp.10.000');
}else if(umur >= 12 && umur <= 25){
    console.log("Pangkas Bayar = Rp.20.000");
}else{
    console.log("Pangkas Bayar = Rp.30.000");
}

