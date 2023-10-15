const produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado']

console.log(produtos)

console.log(produtos.length)

const newListaDeProdutos = produtos.filter(prod => prod !== 'Mouse')

console.log(newListaDeProdutos)

function cade(prod){
    const exist = produtos.find(produto => produto === prod)

    if(exist){
        console.log(`O ${prod} está presente na lista.`)
    }

    if(!exist){
        console.log(`Produto não encontrado`)
    }
}

cade('Computador')
cade('Ziper')