
// Listar dados
fetch("http://cafepradev.com.br:21020/animals/list")
    .then(response = response.json())
    .then(dados => {
        console.log(dados);
    })
    .catch(err => console.log(err))


// Inserir dados
const inserirDados = {
    method : 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body : `{
        "name": "Duque",
        "species": "Dog",
        "color": "White",
        "size": "Medium"
    }`
}



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