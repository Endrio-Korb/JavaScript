const fs = require('fs');


// console.log('Sábado');

// let texto;

// fs.readFile("./texto.txt", function (error, dados) {
    //     texto = String(dados)
    //     console.log(texto);
    // })
    
    // console.log('2');
    
    
    // promises
    
const { rejects } = require("assert");
const { resolve } = require("path");


const readFile = file => new Promise((resolve, rejects) => {
    fs.readFile('./texto2.txt', (err, contents) => {
        if (err){
            rejects(err)
        }else{
            resolve(contents)
        }
    })
})

readFile("./texto.txt").then(contents => {
    try {
        console.log(String(contents))
    }catch(err){
        console.log(err);
    }
})