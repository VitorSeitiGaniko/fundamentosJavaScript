function inteiroAleatorio (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // O flor arredonda o valor para baixo
}

let opcao = 0

while(opcao != -1){
    opcao = inteiroAleatorio (-1, 10)
    console.log(opcao)
}


console.log('saiu do while')