const produtos = [
    {nome: 'ipad', preco: 2000, fragil: true},
    {nome: 'iphone', preco: 4999, fragil: true},
    {nome: 'mesa', preco:400, fragil: true},
    {nome: 'porta', preco:200, fragil: false}
]

console.log(produtos.filter(function(elemento){
    return elemento
}))

console.log('Produtos abaixo de R$500,00', produtos.filter(function(elemento){
    return elemento.preco < 500
}))

/*Lembrando q o parametro "e" representa um array qualquer, mas 
nesse caso representa os produtos*/
const precoAbaixo = e => e.preco < 500
const produtoNaoFragil = e => e.fragil == false

console.log(produtos.filter(precoAbaixo))
console.log(produtos.filter(precoAbaixo).filter(produtoNaoFragil))
