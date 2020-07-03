const ferrari = {
    modelo: 'F40',
    velocMax: 324
}

const honda = {
    modelo: 'civic si',
    velocMax: 250
}

/*Todo objeto criado aponta para prototype, ou seja, todo objeto criado tem 
como o pai o prototype*/
console.log(ferrari.__proto__)      //Como podemos ver proto é um objeto vazio
console.log(ferrari.__proto__ === Object.prototype)
console.log(honda.__proto__)
console.log(honda.__proto__ === Object.prototype)