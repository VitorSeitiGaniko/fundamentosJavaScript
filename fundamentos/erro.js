function tratarErro(erro){
    //throw new Error('...')
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function gritar(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErro(e)
    }
}

const obj = {
    nome : 'vitor' 
}

gritar(obj)