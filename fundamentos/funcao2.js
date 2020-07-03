//Armazenando uma função em uma variavel

const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(3, 3)


//Armazenando uma função arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(3, 9))


//Retorno implicito
//Obs.: A função deve estar em uma linha só
const sub = (a, b) => a - b

console.log(sub(9, 7))