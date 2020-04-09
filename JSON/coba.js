// let mahasiswa = {
//     "nama" : "mustoto",
//     "nrp" : "4232131",
//     "emal" : "mustotohaphap@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//   }
// };
// xhttp.open("GET", "coba.json", true);
// xhttp.send();

$.getJSON('coba.json', function(data) {
    console.log(data);
})