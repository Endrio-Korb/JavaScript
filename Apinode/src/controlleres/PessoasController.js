let dataBase = [
    {"nome": "Endrio", "idade": 22},
    {"nome": "Diego", "idade":25}
]

module.exports = {
    dataBase,
    
    async list(req,res, next) {
        res.send(dataBase)
    },

    async insert(req,res,next) {
        try{
            if(!Object.keys(req.body).length){
                return res.status(500).send({
                    status : "erro",
                    message : "Sem parametros enviados"
                })
            }

            // insert dos dados

            let dados = {
                "nome" : req.body.nome,
                "idade" : req.body.idade
            }
            dataBase.push(dados)

            return res.status(200).send({
                status : "success",
                messagem : "Registro inserido com sucesso"
            })
        }
        catch(error){
            next(error)
        }
        
    },

    // Editar pessoa
    async update(req,res,net){
        try{
    
        }
        catch(error){
            next(error)
        }
    },

    // Deletar pessoa
    async delete(req,res,net) {
        try{
            let dados = {
                "nome" : req.body.nome,
                "idade" : req.body.idade
            }
            let index = dataBase.indexOf(dados)
            // dataBase.splice(index, 1)
            console.log(index)
        }
        catch(error){
            next(error)
        }
    },
}