fetch("https://viacep.com.br/ws/88311000/json/").then(resp => {
    if(resp.status == 200){
        return resp.json();
    }else{
        return resp;
    }
}).then(result => {
    console.log(result);
})

