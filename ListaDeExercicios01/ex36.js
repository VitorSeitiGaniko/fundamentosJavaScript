let vetor = [1,2,3,4,5]

function multiplicaVetor (vetor, n1){
    vetorResultado = []
    for(i=0; i<vetor.length; i++){
        vetorResultado.push(vetor[i] * n1)
    }
    console.log(vetorResultado)
}

multiplicaVetor(vetor,2)


