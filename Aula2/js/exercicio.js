// Converte graus Celcius para Fahrenheit 
function conversaoParaFahrenheit(Celcius){
    return Celcius * 9/5 +35 
}
console.log(conversaoParaFahrenheit(10))


// Triplica o valor de cada número na lista
const numbers = [1,2,3,4,5,6,7,8,9,10]
function numbersTriple(){
    return numbers.map(num => num * 3);

}
console.log(numbersTriple(numbers))


// Acha a palavra mais longa dentro da lista
const listaPalavras = ['moto', 'carro','onibus', 'caminhao']
function acharPalavraMaisLonga() {
    const palavraMaisLonga = listaPalavras.reduce(function(maisLonga, palavraAtual){
        if (palavraAtual.length > maisLonga.length)
            return palavraAtual;
        else
            return maisLonga;
    },"");
    return palavraMaisLonga
}
console.log(acharPalavraMaisLonga(listaPalavras))
