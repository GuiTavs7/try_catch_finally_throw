// 1) Corrigindo o erro do "callback hell" com o uso do método ".then()"

let ferverAgua = (chaleiraNoFogao,fogoLigado) => {

    return new Promise((resolve,reject) => {

        if(typeof chaleiraNoFogao != "boolean") throw "Somente o tipo booleano é aceito!"

        if(chaleiraNoFogao && fogoLigado){
            console.log("Passo 1 finalizado: Água foi fervida");
            resolve(true);
        }

        else{
            const mensagemDeErro = "É necessário ligar o fogão e colocar a chaleira no fogo para ferver água!";
            reject(mensagemDeErro);
        }

    })
}

let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log("Passo 2 finalizado: Café foi passado");
        resolve(true);
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log("Passo 3 finalizado: Terminei de tomar o café");
        resolve(true);
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log("Passo 4 finalizado: Terminei de lavar a xícara");
        resolve(true);
    })
}

// 2) Transformando exemplo do ".then()" com Async & Await - callback hell -> ".then()" -> async & await

async function iniciarProcessoDeFazerCafe(){

    try{
        const aguaFervida = await ferverAgua(chaleiraNoFogao, fogoLigado);
        const cafePassado = await passarOCafe(aguaFervida);
        const cafeTomado = await tomarCafe(cafePassado);
        const xicaraLavada = await lavarXicara(cafeTomado);

        if (xicaraLavada) console.log("Finalizado o ritual de tomar o café, bora trabalhar!");

    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("Bloco do try{} & catch(error) finalizado!")
    }
}

// 2.1) Testando chamada com uma das condições falsas para o catch() receber mensagem de erro!

let chaleiraNoFogao = false;
let fogoLigado = true;

iniciarProcessoDeFazerCafe();

// 2.2) Testando chamada com uso do throw

chaleiraNoFogao = "Passando tipo errado para o throw retornar um erro!";
fogoLigado = false;

iniciarProcessoDeFazerCafe();

// 2.3) Finalmente chamando a função assíncrona com os parâmetros corretos!

chaleiraNoFogao = true;
fogoLigado = true;

iniciarProcessoDeFazerCafe();