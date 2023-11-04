interface ProdutoProps {
    readonly id: string //Somente leitura
    nome: string
    descricao: string
}

const produto1: ProdutoProps = {
    id: "1",
    nome: "Tenis nike",
    descricao: "Tenis top"
}

// produto1.id = "123"

console.log(produto1)