/*Nomor 1 */
const arr = [-6, 9999, 3, 4, 5, 6, 7, 6, 5];
arr.shift();
arr.shift();
arr.unshift(1, 2);
arr.pop();
arr.pop();
arr.push(8, 9);
console.log(arr);

/*Nomor 2*/
const gelobal = ["Mochamad Dena Eka Putra", "Fajar Kresna Pahlawan", "Gusti Arsyad", "Nanda Nipri D", "Fadhitya Syafa Andini", "Hardiansyah Rochani", "Kevin Marchiano", "Anggun Wahyuni", "Khairul Umam", "Fidoni Agusta Hartoyo"];  
let objectGelobal= [];
objectGelobal = gelobal.map(function (objectString) {
    let hasil = {};
    hasil["asli"] = objectString;
    hasil["hurufPertama"] = objectString.charAt(0);
    return hasil;
});
console.log(objectGelobal);


/*Nomor 3*/
let nyatakanCintaPadaAnggun = true;
let kepastianCintaPadaAnggun = true;
let menerimaAnggunApaAdanya = true;
let andaKaya = true;
let andaGoodLooking = false;

if (nyatakanCintaPadaAnggun && kepastianCintaPadaAnggun && menerimaAnggunApaAdanya){
    console.log('Anggun I love you');
    console.log('Will you marry me?');
    console.log('Aku terima kamu apa adanya...');
}else if(nyatakanCintaPadaAnggun && andaGoodLooking && andaKaya){
    console.log('Anggun I love you');
    console.log('Aku ganteng loh!');
    console.log('Aku kaya lagi!')
}else{
    console.log('Maap ya Anggun, aku udah punya pacar:)');
}
