const excelToJson = require ('convert-excel-to-json');
const fs = require('fs');

const result = excelToJson({
    source: fs.readFileSync('./data.xlsx') // fs.readFileSync return a Buffer
});

console.log(result);
