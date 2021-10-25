const express = require('express')
const app = express()

app.get("/", (req, res) => res.status(200).send("Welcome to Week 3!"))

app.listen(3000, () => console.log("listening to port 3000"))

// ============================================= 
// Tugas Asesmen Choi, Minggu ketiga:
// 1. Gunakan/require/import setidaknya satu library/framework lain selain express yang sudah ada!
// 2. Buatlah dua controller+route tambahan selain yang sudah ada! Endpoint route bebas
//   2a. Satu controller berisi penggunaan library/framework yang tadi sudah direquire/import
//   2b. Satu controller berisi bebas, tetapi sukses dan menghasilkan sesuatu ketika diakses, dan tidak boleh mirip dengan teman yang lain (yang lebih dulu push ke github yang berhak dapat).
// 3. Pecahlah hasil pekerjaan anda menjadi beberapa file dan folder mengikuti kaidah struktur MVC!
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
