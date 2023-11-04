class Loja {
    nome: string //tipano os atributos
    categoria: string

    constructor(nome: string, categoria: string){
        this.nome = nome
        this.categoria = categoria
    }
}

const redBurger = new Loja("Red Burger", "Lanches")