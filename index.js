// let gelobal = ["nama1", "nama2", "namaseterusnya", "dst"];

// gelobal = ["Mochamad Dena Eka Putra", "Fajar Kresna Pahlawan", "Gusti Arsyad", "Nanda Nipri D", "Fadhitya Syafa Andini", "Hardiansyah Rochani", "Kevin Marchiano", "Anggun Wahyuni", "Khairul Umam", "Fidoni Agusta Hartoyo", "dst"];

// // Kode di bawah untuk dibaca saja, jangan diubah ya. Pengerjaan kalian cukup di atas ini
// let sebuah_fungsi = function (suatu_input) {
//   console.log("ini variabel global ->", "gelobal =", gelobal);
//   let lokal = { Plis: "nonton", anime: "Clannad" };
//   console.log("ini variabel lokal ->", "lokal =", lokal);
//   console.log("ini variabel lokal juga nggak sih? ->", "suatu_input =", suatu_input);
//   return "Semangat belajarnya, sukses selalu!";
// };

// let hasil_eksekusi = sebuah_fungsi(gelobal);
// console.log(hasil_eksekusi);

let people = {
  1234567890: {
    name: 'Yosias Ignatius',
    address: ['Jakarta', 'Denpasar'],
    pets: [
      { name: 'Gery', type: 'Cat' },
      { name: 'Daniel', type: 'Cow' },
    ],
  },
  2345678901: {
    name: 'Fidoni Agusta',
    address: ['Magelang', 'Yogyakarta'],
    pets: [
      { name: 'Dena', type: 'Cat' },
      { name: 'Muhazi', type: 'Cat' },
    ],
  },
  3456789012: {
    name: 'Fahmi Alfareza',
    address: ['Magelang', 'Yogyakarta'],
    pets: [
      { name: 'Syafa', type: 'Cat' },
      { name: 'Yusril', type: 'Cat' },
    ],
  },
};

let peopleArray = [];
for (property in people) {
  peopleArray.push({ id: property, ...people[property] });
}
console.log(peopleArray);

let student = { name: 'Dena' };
student = {
  address: 'Cianjur',
  age: 27,
  ...student,
};
console.log(student);

const students = ['Yosias', 'Daniel'];
let studentss = ['Mishar', ...students, 'Gery'];
console.log(studentss);
