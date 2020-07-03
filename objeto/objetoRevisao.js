const carro = new Object

carro.nome = 'Civic'
carro.marca = 'Honda'
carro ['Ano de fabricao'] = 2020
carro.valor = 49000.90

console.log(carro)



const pessoa = {
    nome: 'vitor',
    endereco:{
        rua: 'aroeiras',
        numero: 159,
        bairro: 'jardim pinheirinho'
    }

}

console.log(pessoa)
console.log(`O bairro é: ${pessoa.endereco.bairro}`)

pessoa.endereco.numero = 69
delete pessoa.endereco.bairro

console.log(pessoa)