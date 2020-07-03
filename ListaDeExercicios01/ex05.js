function formatar(nDecimal) {
    valorEmReais = `R$ ${nDecimal.toFixed(2).toString().replace('.', ',')}`
    console.log(valorEmReais)
}

formatar(0.1 + 0.2)