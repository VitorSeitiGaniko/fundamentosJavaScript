const regiao = function (estado){
    switch(estado){
        case 'SP': 
        case 'sp':
            console.log('Paulista')
            break
        case 'RJ': 
        case 'rj':
            console.log('Carioca') 
            break
        case 'MG': 
        case 'mg':
            console.log('Mineiro')   
            break
        default:
            console.log('Nenhum estado selecionado')
    }
}

regiao('MG')
regiao('sp')
regiao('SP')
regiao('rj')
