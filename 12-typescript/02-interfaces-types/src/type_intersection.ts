type Fabricante = {
    idFabricante: string
    nameFabricante: string
}

type NovoProduto = {
    idProduto: string
    nameProduto: string
}

type InfoProduto = Fabricante & NovoProduto

const produto: InfoProduto = {
    idFabricante: "123",
    nameFabricante: "Nintendo",
    idProduto: "321",
    nameProduto: "Controle Pro"
}