pessoa = {
    nome: 'vitor',
    endereco: {
        rua: 'rua aroeiras',
        numero: 159,
        cidade: 'embu das artes'
    },
    signo: 'gemeos'
}

console.log(Object.keys(pessoa)) //Pega somente as chaves do objeto
console.log(Object.values(pessoa)) //Pega somente os valores do objeto

Object.defineProperty(pessoa, 'dataNasc',{
    enumerable: true,       //Definindo se ele vai ser listado ou não
    writable: false,         //Definindo se ele pode ser reescrito ou não
    value: '01/01/1990'      //Essa data vai ser fixa, não pode ser alterada   
})

pessoa.dataNasc = '09/06/1997'    

console.log(pessoa)
console.log(pessoa.dataNasc)


//OBJECT ASSIGN
destino = {a:1}
ob1 = {b:2}
ob2 = {c:3, a:4}

/*Ele vai pegar os elementos do "ob1" e "ob2" e inserir no destino, como no "ob2" 
tambem tem "chave a" ele vai sobreescrever o valor*/
Object.assign(destino, ob1, ob2)
const obNovo = Object.assign(destino, ob1, ob2)

console.log(destino)
console.log(obNovo)

Object.freeze(ob1)      //Serve para deixar um valor constante sem permitir mudanças
ob1.b = 5
console.log(ob1)