const regiao = function(estado) {
    if (estado == 'SP' || estado == 'sp'){
        console.log('Paulista')
    }else if (estado == 'RJ' || estado == 'rj'){ 
        console.log('Carioca')
    }else if (estado == 'MG' || estado == 'mg'){
        console.log('Mineiro')
    }else{
        console.log('Nenhum estado escolhido')
    }
}

regiao('sp')
regiao('RJ')
regiao(2)