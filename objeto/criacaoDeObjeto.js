//Função Construtora

function Produto(nome, valor, ano){
    this.nome = nome
    this.valor = valor
    this.ano = ano
}

const p1 = new Produto('caneta', 2.5, 2018)
const p2 = new Produto('caderno', 11, 2019)
const p3 = new Produto('lapis', 3, 2020)

console.log(`nome: ${p1.nome}`, p1.ano)
console.log(p2)
console.log(p3)





///FUNÇÃO FACTORY

const data = new Date()
//const ano = data.getFullYear()

function Pessoa(nome, anoNasc, signo){
    return{
        
        nome: nome,
        dataNasc: anoNasc,
        idade: data.getFullYear() - anoNasc,
        signo: signo,
       /* getIdade(){
            return data.getFullYear() - idade
        }*/
    }
}

const pessoa1 = new Pessoa('vitor', 1997, 'gemeos')
const pessoa2 = new Pessoa('Ligia', 2002, 'gemeos')

console.log(pessoa1)
console.log(`O ${pessoa1.nome} tem ${pessoa1.idade} anos`)
console.log(pessoa2)
