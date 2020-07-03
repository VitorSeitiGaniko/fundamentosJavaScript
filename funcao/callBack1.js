const fabricante = ['Honda', 'BMW', 'Hyundai']

function imprimir(nome, indice) {
    console.log(`${indice + 1}: ${nome}`)
}

fabricante.forEach(imprimir) //permite executar uma função para cada item de um array.

//função Arrow'
fabricante.forEach(nome => console.log(nome))




const notas = [8.6, 4.6, 5.8, 9.0, 4.2, 3.3]

let notasBaixas = []

notasBaixas = notas.filter(function(nota){
    return nota <= 5
})


let notasBaixas2 = []
const notaMenor7 = nota => nota <= 7   //Parametro => return sem escrever "return"
notasBaixas2 = notas.filter(notaMenor7)

console.log(notasBaixas)
console.log(notasBaixas2)