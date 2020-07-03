const comanda = [
    '{"nome": "Borracha", "preco": 4.8}',
    '{"nome": "lapis", "preco": 5}',
    '{"nome": "caneta", "preco": 3.5}'
]

//coverter o json para um objeto comum
const comandaNormal = json => JSON.parse(json)

const apenasPreco = produto => produto.preco

const comandaPreco = comanda.map(comandaNormal).map(apenasPreco)

console.log(comandaPreco)