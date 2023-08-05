// export default class CadastrarPessoa {

//     constructor() {
//         this.nome
//         this.telefone
//         this.email
//         this.dataBase = [];
//     }

//     adicionar(){
//         this.dataBase.push(this.nome)
//         this.dataBase.push(this.telefone)
//         this.dataBase.push(this.email)
//     }
//     listar(){
//         console.log(`${this.dataBase}`)
//     }
//     editar(){
//         var pos = this.dataBase.indexOf(this.nome)
//         this.dataBase[pos] = this.nome
//     }
//     deletar(){
//         var pos = this.dataBase.indexOf(this.nome)
//         this.dataBase.splice(pos, 2)
//     }
// }

export default class CadastrarPessoa {

    constructor() {
        this.nome
        this.telefone
        this.email
        this.dataBase = [];
    }

    adicionar() {
        this.dataBase.push({
            nome: this.nome,
            email: this.email,
            telefone: this.telefone
        })
    }
    listar(){
        let dados = ''
        for (let pessoa in this.dataBase){
            dados +=`
             Nome: ${this.dataBase[pessoa].nome}
             Email: ${this.dataBase[pessoa].email}
             Telefone: ${this.dataBase[pessoa].telefone}
             -------------------------------------------`
        }

        return dados
    }
    editar(busca) {
        let pos = this.dataBase.map(dados => dados.nome).indexOf(busca)
        this.dataBase[pos]= {
                nome: this.nome,
                email: this.email,
                telefone: this.telefone,
            }
        }
    deletar(deletar){
        var pos = this.dataBase.indexOf(deletar)
        this.dataBase.splice(pos, 1)
    }
}