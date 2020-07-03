const alunos = [
    {nome: 'João', nota: 7.3, bolsita: true},
    {nome: 'Maria', nota:9.2, bolsita: true},
    {nome: 'Pedro', nota: 9.8, bolsita: true},
    {nome: 'Ana', nota: 8.7, bolsita: true}
]

const somenteNota = e => e.nota

const notaAlunos = alunos.map(somenteNota)
console.log(notaAlunos)

const somenteBolsista = e => e.bolsita

const bolsaDeAunos = alunos.map(somenteBolsista)
console.log(bolsaDeAunos)

const todosBolsistas = (acumulador, b) => acumulador && b
console.log(bolsaDeAunos.reduce(todosBolsistas))