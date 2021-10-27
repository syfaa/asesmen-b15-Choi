// Import exports
const express = require("express");
// Make express app
const app = express();

// Import albums router
const data = require("./routers/index");

// Define the port

const port = process.env.PORT || 3000;

// Enable req.body (JSON file)
app.use(express.json());
// Enable req.body (URL - Encoded)
app.use(express.urlencoded({ extended: true }));

// Handle client when client access to http://localhost:3000/data
app.use("/data", data);

// Run this application on port 3000
app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});

// =============================================
// Tugas Asesmen Choi, Minggu ketiga:
// 1. Gunakan/require/import setidaknya satu library/framework lain selain express yang sudah ada!
// 2. Buatlah dua controller+route tambahan selain yang sudah ada! Endpoint route bebas
//   2a. Satu controller berisi penggunaan library/framework yang tadi sudah direquire/import
//   2b. Satu controller berisi bebas, tetapi sukses dan menghasilkan sesuatu ketika diakses, dan tidak boleh mirip dengan teman yang lain (yang lebih dulu push ke github yang berhak dapat).
// 3. Pecahlah hasil pekerjaan anda menjadi beberapa file dan folder mengikuti kaidah struktur MVC!
// 4. Nilai sempurna kalau ada secuil OOP ---- kalau nggak ada, nilai maksimal 9/10
// =============================================

// Petunjuk/Catatan:
// 1. Kode yang sudah ada jangan sampai terhapus atau berubah (termasuk nama file yang sudah ada)
// 2. Git pull dari branch main ke branch masing-masing. Apabila conflict, dapat copy paste langsung file-file berikut:
//   a. .gitignore
//   b. package-lock.json
//   c. package.json
//   d. w3.js
// 3. Jangan lupa untuk memasang express terlebih dahulu, dengan command `npm install express`
// 4. Hasil pekerjaan tidak perlu Pull Request ke branch main, biarkan tetap di branch masing-masing
// 5. Sudah ada script `npm start` yang bisa dipakai atau disesuaikan untuk eksekusi tugas asesmen minggu ketiga.
