// fetch("http://cafepradev.com.br:21020/messages/list").then(response => {
//     return response.json();
// }).then(dados =>{
//     console.log(dados)
// })


const options = {
    method : 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body : `{
        "name": "Endrio",
        "message": "Olá mundo"
    }`
}

fetch("http://cafepradev.com.br:21020/messages/insert", options)
    .then(response => response.json())
    .then(response => {
        response.status
    })
    .catch(err => console.log(err))