
async function fetchData() {

    const cep = document.querySelector("cep")
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
    }
    
    return response.json();
};

async function consultaCPF(){
    try {
        const data = await fetchData();
        document.getElementById("dados").innerHTML = data
    } catch (error) {
        document.getElementById("dados").innerHTML = "Falha ao buscar o CEP"
    }
}

consultaCPF();
console.log("Aguardando resultado...");

const botaoCep = document.getElementById("button-cep")

botaoCep.addEventListener('click',() => {
    fetchData()
})