/*Esse código permite que as chaves do objeto sejam fixas, sem permissão de adicionar
uma nova chave, mas com a permissão de excluir uma*/

const produto = Object.preventExtensions({
    nome: 'Iphonhe',
    valor: 4999.99,
    cod: 123456
})

console.log(produto)

//Verificando se ele é extensivel ou não
console.log ('Extensivel: ', Object.isExtensible(produto))

produto.nome = 'Galaxy A8'
produto.descricao = 'celular foda'  //Tentando adicionar uma nova chave e valor
delete produto.cod

console.log(produto)



/*OBJECT. SEAL
Com o Seal vc não consegue deletar nem adicionar novas chaves, apenas consegue
modificar os valores da chaves*/
const pessoa = {
    nome: 'vitor',
    idade: 23,
    signo: 'gemeos'
}
Object.seal(pessoa)
console.log('selado: ', Object.isSealed(pessoa))

pessoa.nome = 'Ligia'
pessoa.dataNasc = '09/06/1997'
delete pessoa.signo

console.log(pessoa)