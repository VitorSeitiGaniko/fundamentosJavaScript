function tipoTriangulo(n1, n2, n3){
    if(n1 == n2 & n2 == n3 & n1 == n3){
       return 'Triangulo equilatero'
    }else if(n1 != n2 & n2 != n3 & n1 != n3){
        return 'Triangulo escaleno'
    }else{
        console.log('Triangulo isosceles')
    }
}

console.log(tipoTriangulo(4,4,4))
console.log(tipoTriangulo(3, 3, 3))
tipoTriangulo(3, 3, 2)
console.log(tipoTriangulo(3, 1, 2))