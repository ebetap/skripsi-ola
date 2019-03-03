const jsonDataUts = require('./presensiuts.json');
const jsonDataUas = require('./presensiuas.json');
const jsonDatamakul = require('./daftarmakul.json');
const jsonPolingSebelumTenang = require('./polling-sebelum-mg-tenang.json');
const jsonPolingTenang = require('./pollingminggutenang.json');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'debian-sys-maint',
  password  : '3NTwodHnXFnEr8Jb',
  database  : 'asfav-electre'
});

connection.connect((err) => {
  console.log('Mysql Connected');
});

// jsonDataUts.forEach(asisten => {
//   const { NIM,Nama } = asisten
//   let queryGetData = `SELECT * FROM tb_asisten where npm_asisten = "${NIM}"`;
//   connection.query(queryGetData,(err,res) => {
//     if (res.length === 0) {
//       let queryInsert = `INSERT INTO tb_asisten (npm_asisten,nama_asisten) VALUES ("${NIM}","${Nama}")`;
//       connection.query(queryInsert, (error,result) => {
//         console.log('berhasil',result)
//       })
//     } else {
//       console.log('Sudah ada di database')
//     }
//   })
// });

// INSERT DATA MAKUL
// jsonDatamakul.forEach(data => {
//   const { KODE,MATKUL,PRODI } = data
//   let queryInsertMakul = `INSERT INTO tb_matkul (kode_matkul,nama_matkul,prodi) VALUES ("${KODE}","${MATKUL}","${PRODI}")`;

//   connection.query(queryInsertMakul, (err,res) => {
//     if (!err) {
//       console.log('Inserted!');
//     }
//   })
// });

// insert data tb_polling

let combinedData = jsonPolingSebelumTenang.concat(jsonPolingTenang)

let totalData = 0
// combinedData.forEach((data,index) => {
//   const { 
//     kode_matkul,
//     npm_asisten,
//     prakiran,
//     penguasaan_materi,
//     public_speaking,
//     keterampilan,
//     kedisiplinan
//   } = data

//   jsonDatamakul.forEach(objMakul => {
//     if (kode_matkul === objMakul.KODE) {
//       console.log('TI')
//       totalData++
//       let querySelect = `SELECT * from tb_polling WHERE kode_matkul = "${kode_matkul}"`;
//       connection.query(querySelect, (err,res) => {
//         if (!err) {
//           let queryInsert = '';
//           if (res.length !== 0) {
//             if (kode_matkul !== res.kode_matkul && 
//                 npm_asisten !== res.npm_asisten && 
//                 prakiran !== res.prakiran) 
//             {
//               console.log('databaseLolos',`${res.kode_matkul},${res.npm_asisten},${res.prakiran}`)
//               console.log('dataTobeInsertLolos',`${kode_matkul},${npm_asisten},${prakiran}`)
//               queryInsert = `INSERT INTO tb_polling (kode_matkul,npm_asisten,prakiran,penguasaan_materi,public_speaking,keterampilan,kedisiplinan) VALUES ("${kode_matkul}","${npm_asisten}","${prakiran}",${penguasaan_materi},${public_speaking},${keterampilan},${kedisiplinan})`;
//             } else {
//               console.log('database',`${res.kode_matkul},${res.npm_asisten},${res.prakiran}`)
//               console.log('dataTobeInsert',`${kode_matkul},${npm_asisten},${prakiran}`)
//             }
//           } else {
//               queryInsert = `INSERT INTO tb_polling (kode_matkul,npm_asisten,prakiran,penguasaan_materi,public_speaking,keterampilan,kedisiplinan) VALUES ("${kode_matkul}","${npm_asisten}","${prakiran}",${penguasaan_materi},${public_speaking},${keterampilan},${kedisiplinan})`;
//           }

//           connection.query(queryInsert, (error,result) => {
//             if(!error){
//               if(index+1 === combinedData.length) {
//                 console.log('Rampung!!!')
//               } else {
//                 console.log('Masok',result)
//               }
//             }
//           })
//         }
//       })
//     } else {
//       // console.log('Bukan TI')
//     }
//   })
// });


let queryAllPoling = `SELECT * FROM tb_polling`
connection.query(queryAllPoling, (err,res) => {
  console.log(res.length)
})

// console.log('totalData',totalData)