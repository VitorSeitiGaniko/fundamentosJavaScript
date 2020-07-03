function classificacaoNota(valor){
    if(valor<5.0){
        console.log(`Nota ${valor} - D`)
    }else{
        console.log(`Nota ${valor} - B`)
    }
}

vetor = [1,2,3,4,5,6,7,8]

vetor.forEach(classificacaoNota)