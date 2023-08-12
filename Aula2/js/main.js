import { Somar, Multiplicar, Subtrair, Dividir} from "./calculadora.js"

const valor1 = Somar(2,2);

const valor2 = Subtrair(2,2);

const valor3 = Multiplicar(3,3);

const valor4 = Dividir(2,2);

const valor5 = Dividir(2,0);


console.log(`Somar ${valor1}`)
console.log(`Subtair ${valor2}`)
console.log(`Multiplicar ${valor3}`)
console.log(`Dividir ${valor4}`)
console.log(`Dividir por 0 ${valor5}`)
