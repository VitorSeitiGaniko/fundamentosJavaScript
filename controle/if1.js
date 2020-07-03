function par(num) {
    if (num % 2 == 0){
        console.log(num + ' é par')
    } else{
        console.log(num + ' não é par')
    }
}

par(4)
par(5)
par('opa')  //cuidado!!! isso acontece pois a linguagem é fracamente tipada