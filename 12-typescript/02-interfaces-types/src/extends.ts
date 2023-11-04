interface Produto {
    id: string
    nomeProduto: string
    fabricante: string
}

interface CaixaDeSom extends Produto {
    tamanho: string
    watts: string
    bluetooth: boolean
}

const jbl: CaixaDeSom = {
    id: "23",
    nomeProduto: "Mini caixa JBL 2",
    fabricante: "jbl",
    tamanho: "pequena",
    watts: "3.1 watts",
    bluetooth: true
}

console.log(jbl)

