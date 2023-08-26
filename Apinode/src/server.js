const express = require('express')
const routes = require('./routers')
const app = express()


app.use(express.json())
app.use(routes)

// Tratar rodas inexistentes
app.use((req, res, next) => {
    const error = new Error("Not Found Router")
    error.status = 404
    res.status(error.status).send({
        error:{
            status: "Error",
            message : "Endpoint não encontrador",
            error: error.status
        }
    })
})

// Tratar request com problemas
app.use((req,res,next) =>{
    res.status(res.status || 500)
    res.json({
        error:{
            status: "Error",
            message : "Verifique sua request",
            error: error.status
        }
    })
})



// app.get('/', (req,res) =>{
//     console.log('Você chegou aqui');
//     res.send('Você chegou no servidor')
// })

// app.post('/calculo/', (req,res) =>{
//     let valor1 = req.body.value1
//     let valor2 = req.body.value2
//     let resultado = valor1 + valor2
//     res.send(`Resuldado da conta é ${resultado}`)
// })

app.listen(3333, () => {
    console.log('Servidor está funcionando')
})
