const nomes = ['Ligia', 'Luscas', 'Vitor', 'Marcia', 'Shinho']
nomes.pop()     //Remove o ultimo elemento do array
console.log(nomes)

nomes.shift()    //Remove o primeiro elemento do array
console.log(nomes)

nomes.push('Ednilson')      //Adiciona o no ultimo lugar do array
console.log(nomes)

nomes.unshift('Nelson')      //Adiciona o no ultimo lugar do array
console.log(nomes)

nomes.splice(0,1,'Maura', 'Julio')
console.log('Depois de usar o splice', nomes)

//Cria um novo array a partir do indice definido
const familia = nomes.slice(3)
console.log(familia)

const familia2 = nomes.slice(3,5)        //Ele não adiciona o elemento 5
console.log(familia2)