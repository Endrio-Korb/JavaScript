let meuOjb;

function construtorJSON(){
    this.nome = "Endrio";
    this.idade = 21;
    this.profissao = "Suporte Tecnico"
}

construtorJSON.prototype.Pessoa = function() {
    return `Nome: ${this.nome} Idade: ${this.idade} Profissão: ${this.profissao}`
}

construtorJSON.prototype.Profissao = function() {
    return `Profissão: ${this.profissao}`
}


function testaDados(){
    meuOjb = new construtorJSON();

    console.log( meuOjb.Pessoa());
}

testaDados()