function Pessoa(nome){
    this.nome = nome        //Colocando o this ela virou publica
    

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Vitor')
p1.falar()