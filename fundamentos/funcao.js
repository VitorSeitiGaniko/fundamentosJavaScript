/*Função sem retorno
Ao criar a função passe os parametros, ou seja, os elementos q serão 
manipulados, separados por vírgula*/

function imprimirSoma(a, b) {
    console.log(a+b)
}

//Chamando a função
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5)    //Nesse caso ele ignora o restante e apenas soma os dois primeiros

//Função com retorno

function soma(a, b = 0) {   //b está sendo declarado como um valor padrão para essa função
    return a+b
}

console.log(soma(2, 4))
console.log(soma(2))        //Nesse caso vai dar certo pois o b ja foi tratado na função
console.log(soma())