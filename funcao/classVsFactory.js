class Pessoa{
    constructor(nome){
        this.nome = nome        //Colocando o this ela virou publica
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Vitor')
p1.falar()


const criarPessoa = nome => {
    return{
        falar: () => console.log(`meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Japa')
p2.falar()