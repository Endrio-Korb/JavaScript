const { element } = require("prop-types");

const numbers = [1,2,3,4,5];
const evenNumbers = numbers.filter(num => num % 2 === 0);

function fatorial(n) {
    if (n <= 1){
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

function add(a,b) {
    return a + b;
}

const numbers1 = [1,2,3];
const dobledNumbers = numbers1.map(num => num * 2);


const add = x => x + 1;
const multiply = x => x * 2;
const composedFunction = compose(add, multiply);
console.log(composedFunction(3)); // Primeiro multiplica por 2 e depois adiciona 1

const add1 = x => x + y;
const add5 = add(5);
console.log(add5(3)); // Resultado: 8

const numbers2 = [1,2,3,4,5];
const sum = numbers2.reduce((acc,num) => acc + num, 0)

const newArray = oroginalArray.map(/* element =>  tranformação */);

const numbers3 = [1,2,3,4,5];
const squaredNumbers = numbers3.map(num => num * num);
console.log(squaredNumbers);