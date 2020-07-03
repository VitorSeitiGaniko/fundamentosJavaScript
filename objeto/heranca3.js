const pai = {
    nome: 'shinho',
    cabelo: 'preto'
}

//Cria o objeto e difine a classe pai
const filho = Object.create(pai)
filho.nome = 'Vitor'

console.log(filho)
console.log(filho.cabelo)

const filha = Object.create(pai,{
    nome: {
        enumerable: true,
        writable: false,
        value: 'Ligia'
    }
})

filha.nome = 'marcia'
console.log(filha)
console.log(filha.cabelo)