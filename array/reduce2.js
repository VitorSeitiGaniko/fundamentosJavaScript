const nums = [1,2,3,4,5,6]

const soma = (acumulador, elemento) => acumulador+elemento

console.log(nums.reduce(soma))
console.log(nums.reduce(soma, 21))

