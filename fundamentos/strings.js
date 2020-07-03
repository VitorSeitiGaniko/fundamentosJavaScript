const a = "VitorJapah"

console.log(a.charAt(4))        //Serve para achar a letra pelo indice, começando pelo indice zero
console.log(a.indexOf('J'))     //Serve para achar o indice da letra desejada
console.log(a.substring(5))     //Serve para trazer as letras do indice 5 em diante
console.log(a.substring(0,5))   //Mesma coisa q o anterior mas esse delimita o final

console.log('Ola meu nome é '.concat(a).concat(' segue la'))
console.log('Ola meu nome é ' + a +' segue la')
console.log(a.replace('h', 'a'))

console.log('ligia,lucas,vitu'.split(','))      //gerando um array