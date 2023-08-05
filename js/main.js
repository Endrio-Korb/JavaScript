// import Calculadora from "./calculadora.js";

// let calculo = new Calculadora();

// calculo.v1 = 100
// calculo.v2 = 140

// let resultado = calculo.multiplicacao()

// console.log(resultado);


import CadastrarPessoa from "./cadastro_pesssoa.js";

let pessoa = new CadastrarPessoa()

pessoa.nome = "Endrio"
pessoa.email = "endrio@gmail.com"
pessoa.telefone = "47 9999 9999"
pessoa.deletar('Endrio')

pessoa.nome = "João das Couves"
pessoa.email = "joão@gmail.com"
pessoa.telefone = "47 8888888"


let lista = pessoa.listar()

console.log(lista)

pessoa.editar('João')

console.log(pessoa.listar());