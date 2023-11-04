interface Icurso {
    id: number
    nome: string
    preco: number
    desconto: (desconto: number) => string
}

const sujeitoPtogramador: Icurso = {
    id: 23,
    nome: `Sujeito programador`,
    preco: 1000,
    desconto: function cal(desconto: number){
        const total = this.preco - (this.preco * (desconto / 100))
        return `O Curso ${this.nome} que custa ${this.preco} está saindo por ${total}`
    }
}

console.log(sujeitoPtogramador.desconto(10))
console.log(sujeitoPtogramador.desconto(30))

console.log(`===================`)

function cal2(this:Icurso, desconto:number){
    const total = this.preco - (this.preco * (desconto / 100))
    return `O Curso ${this.nome} que custa ${this.preco} está saindo por ${total}`
}

const rocketseat: Icurso = {
    nome: `RocketSeat Tropa do Foguete`,
    id: 25,
    preco: 3500,
    desconto: cal2
}

console.log(rocketseat.desconto(20))