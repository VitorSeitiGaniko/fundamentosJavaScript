const vetor = [5, 7, 8, 3.5, 33, 56]

console.log(vetor[2])
console.log(vetor[3])
console.log(vetor[7])   //Não existe no indice zero, assim gera a msg de indefinido

vetor[7] = 10

console.log(vetor)
console.log(vetor[7])
console.log(vetor.length)

vetor.push(10, 'ola gente', true, false)  //adicionando valores
console.log(vetor)

console.log(vetor.pop())            //excluindo o ultimo elemento do array
delete vetor[1]            //excluindo o elemento do array pelo indice

console.log(vetor)