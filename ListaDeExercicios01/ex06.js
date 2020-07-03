function jurosSimples(capital, taxa, tempo){
    rendimento = taxa * capital
    montante = capital
    for(i = 1; i <= tempo; i++){
       montante = montante + rendimento
    }
    return montante
}

function jurosCompostos(capital, taxa, tempo){
    
    montante = capital
    for(i=1; i<=tempo; i++){
        montante = montante * (1+taxa)
    }
    return montante
}

console.log(jurosSimples(100, 0.5, 3))
console.log(jurosCompostos(100, 0.5, 3))