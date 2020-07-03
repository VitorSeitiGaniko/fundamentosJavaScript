//CADEIA DE PROTÓTIPOS (prototype chain)

const avo = {
    valor1: 'A'
}

const pai = {
    __proto__: avo,      //Serve para referenciar que ele é filho de avo
    valor2: 'B'
}

const filho = {
    __proto__: pai,     //Serve para referenciar que ele é filho de pai
    valor3: 'C'
}

const filho2 = {
    valor4: 'D'
}

//Função para definir herança entre dois objetos
Object.setPrototypeOf(filho2, pai)

console.log(filho.valor1)
console.log(pai.valor1)
console.log(filho2.valor2)
console.log(filho.valor0)