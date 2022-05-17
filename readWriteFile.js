const fs = require('fs');

function readFile(url){
    let myFile = [];
    try{
        myFile = fs.readFileSync(url, 'utf8');
    } catch(error){
        console.log('Errore nella lettura del file '  + url + '\n' + error.message)
    }
    return myFile;
}

function writeFile(url = './listaStudenti', content){
    const jsonContent = JSON.stringify(content)
    try{
        fs.writeFileSync(url,jsonContent);
    } catch(error){
        console.log('Errore nella scrittura del file ' + url + '\n' +error.message)
    }
}

exports.readFile = readFile
exports.writeFile = writeFile