function calc(codigo, qntd){
    switch(codigo){
        case 100:
            return 3.00 * qntd
            break
        case 200:
            return 4.00 * qntd
            break
        default:
            return 'Produto não existente'
    }
}

console.log(calc(100,2))
console.log(calc(200,2))
console.log(calc(1,2))
