var prompt = require('prompt-sync')();

let name = prompt('Qual o nome do animal? ')
let species = prompt('Qual a especie do animal?')
let color = prompt('Qual a cor do animal?')
let size = promt('Qual o tamanho do animal?')

dados({name:name, species:species, color:color, size:size})
    


// // Listar dados
fetch("http://cafepradev.com.br:21020/animals/list")
    .then(response = response.json())
    .then(reponse => {
        console.log(reponse);
    })    
    .catch(err => console.log(err))


// Inserir dados
function inserirDados(dados){
    let options = {
        method : 'POST', 
        headers : {'Content-Type' : 'application/json' },
        body : `${JSON.stringfy(dados)}`
    }
    fetch("http://cafepradev.com.br:21020/animals/insert",options)
    .then(response => response.json())
    .then(response => {
        return response.message;
    })    
    .catch(err => {
        return (err) ? false : true       
    })
}    

inserirDados(dados)


// // Atualizar dados
const atualizarDados = {
    method : 'PUT',
    headers : {
        'Content-Type' : 'application/json'
    },
    body: `${dados}`
}
fetch("http://cafepradev.com.br:21020/animals/update", atualizarDados)
    .then(response => response.json())
    .then(response => {
        response.status
    })
    .catch(err => console.log(err))



// // Deletar dados
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