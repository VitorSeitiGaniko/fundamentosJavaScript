Array.prototype.forEach2 = function (callback){
    for (i=0; i<this.length; i++){
        callback(this[i], i, this)  //(valor, indice, array todo)
    }
}

const nomes = ['Ligia', 'Luscas', 'Vitor']

nomes.forEach2(function(nome,indice){
    console.log(`${indice+1}: ${nome}`)
})

//Não é obrigado a passar o indice
nomes.forEach(function(nome){
    console.log(nome)
})

