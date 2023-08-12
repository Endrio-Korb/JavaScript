// contador = 0
// saida = 0
// do {
//     const prompt = require('prompt-sync')()
//     let num = prompt("Digite um número: ")
//     num = Number(num)
//     if (contador = 0){
//         console.log(num);
//         contador = num;}
//     else {
//     saida += num;
//     contador = saida;
//     console.log(saida);}
// } while (contador < 1000);



// coreção do exercicio

const promt = require('prompt-sync')

let some = 1

do {
    let num = promt('Digite um número: ')
    console.log(`${soma} + ${num}`)
    soma = soma + parseFloat(num)
    console.log(`${soma}`)
} while (some < 1000)