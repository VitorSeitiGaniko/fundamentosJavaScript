let vetor1 = [1,2,3,4]
let vetor2 = [5,6,7,8]

function trocarElementos(vetor1, vetor2){
    for(i=0; i<vetor1.length; i++){
        vetor1[i] = vetor1[i] + vetor2[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] = vetor1[i] - vetor2[i]
    }

    console.log(vetor1)
    console.log(vetor2)
}

trocarElementos(vetor1, vetor2)