/*Factory é função que gera, que retorna um novo objeto
  Factory = fabrica
*/
function criarPessoa(){
    return{
        nome: 'vitor',
        idade: 11
    }
}
console.log(criarPessoa())


function criarProduto(nome, preco){
    return{
        nome: nome,
        preco: preco
    }
}

console.log(criarProduto('Iphone', 4000.00))
