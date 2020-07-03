const aluno = {
    nome: 'Vitor Ganiko',
    dataNasc: '09/06/1997',
    idade: 22,
    endereco: {
        rua: 'rua aroeiras',
        numero: 159,
        cep: '06835-120'
    }
}

//Tirando do objeto as infos desejadas
const {nome , idade} = aluno
console.log(nome, idade)


const {nome: n , idade: i, endereco:{rua, numero}} = aluno
console.log(n, i, rua, numero)


