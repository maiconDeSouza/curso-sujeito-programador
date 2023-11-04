/*
 4 Mofificadores - Public, Private, Protected, readonly
*/

class Fabricante {
   protected idFabricante: string
   protected nameFabricante: string

    constructor(idFabricante: string, nameFabricante: string){
        this.idFabricante = idFabricante
        this.nameFabricante = nameFabricante
    }
}

class Produto extends Fabricante {
    private idProduto: string
    private nameProduto: string

    constructor(idFabricante: string, nameFabricante: string,idProduto: string, nameProduto: string){
        super(idFabricante, nameFabricante)
        this.idProduto = idProduto
        this.nameProduto = nameProduto
    }

    dadosProduto(){
        console.log(`O produto de nome ${this.nameProduto} e id ${this.idProduto} que é do fabricante ${this.nameFabricante}`)
    }
}

const jbl = new Produto("123", "JBL", "321", "Mini Caixa de Som")

jbl.dadosProduto()

