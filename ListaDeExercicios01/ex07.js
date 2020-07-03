function baskara(a, b, c){
    let resultados = []
    delta = (b**2) - (4*a*c)

    if(delta > 0){
    x1 = (-b + Math.sqrt(delta)) / (2*a)
    x2 = (-b - Math.sqrt(delta)) / (2*a)
    resultados.push(x1)
    resultados.push(x2)
    return resultados
    } else {
        return 'o delta é negativo'
}
}

console.log(baskara(1, 12, -13))
console.log(baskara(2, -16, -18))
console.log(baskara(3, 1, 2))


let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    return pontuacoes}

console.log(avaliaPontuacoes(stringPontuacoes))
console.log(stringPontuacoes)




 
let names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '

console.log(names)

let nameList = names.split(';');


console.log(nameList);
console.log(nameList[3])

