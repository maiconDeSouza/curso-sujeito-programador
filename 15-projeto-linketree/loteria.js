const lotofacil = []

for(let i = 1; i <= 25; i++){
    lotofacil.push(i)
}

const sorteados = []

while(sorteados.length < 15){
    const indeceNumeroSorteado = Math.floor(Math.random() * lotofacil.length)

    sorteados.push(lotofacil[indeceNumeroSorteado])
    lotofacil.splice(indeceNumeroSorteado, 1)
}

sorteados.sort((a, b) => a - b)
console.log(sorteados)
console.log(sorteados.length)