var prompt = require('prompt-sync')();


let name = prompt('Qual o nome do animal? ')
let species = prompt('Qual a especie do animal?')
let color = prompt('Qual a cor do animal?')
let size = promt('Qual o tamanho do animal?')


// Inserir dados
const inserirDados = {
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
}
dados({name:name, species:species, color:color, size:size})

function inserirDados(dados){
    fetch("http://cafepradev.com.br:21020/animals/insert", dados)
    .then(response => response.json())
    .then(response => {
        response.status
    })    
    .catch(err => console.log(err))
}    

inserirDados(dados)



// Listar dados
fetch("http://cafepradev.com.br:21020/animals/list")
    .then(response = response.json())
    .then(dados => {
        console.log(dados);
    })    
    .catch(err => console.log(err))

    


// Atualizar dados
const atualizarDados = {
    method : 'PUT',
    headers : {
        'Content-Type' : 'application/json'
    },
    body: `{
        "name": "Duque",
        "species": "Dog",
        "color": "Black",
        "size": "Small"
    }`
}
fetch("http://cafepradev.com.br:21020/animals/update", atualizarDados)
    .then(response => response.json())
    .then(response => {
        response.status
    })
    .catch(err => console.log(err))



// Deletar dados
const deleteDadosados = {
    method : 'DELETE',
    headers: {
        'Content-Type' : 'application/json'
    },
    body :`{
        "id": 1
    }`
}
fetch("http://cafepradev.com.br:21020/animals/delete", deleteDados)
    .then(response => response.json())
    .then(response => {
        response.status
    })
    .catch(err => console.log(err))