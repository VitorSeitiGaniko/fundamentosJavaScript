const num = [1,2,3,4
,5]

let resultado = num.map(function(e){
    return e * 2
})


//ESCEREVENDO EM ARROW FUNCTION
let resultado2 = num.map((e) => e*2 )
//console.log(resultado2)


//JEITO CORRETO DE SE USAR O MAP
const multiplica = e => e*2
let resultado3 = num.map(multiplica)

console.log(resultado3)

