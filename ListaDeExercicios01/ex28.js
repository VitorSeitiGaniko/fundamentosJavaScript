function parImpar(vetor){
    let somaPar = 0
    let somaImpar = 0
    for(i = 0; i < vetor.length; i++ ){
        if(vetor[i] % 2 == 0){
            somaPar ++
        }else{
            somaImpar ++
        }
    }

    console.log(`O numero de impares é ${somaImpar} e os pares é ${somaPar}`)
}


vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

parImpar(vetor)