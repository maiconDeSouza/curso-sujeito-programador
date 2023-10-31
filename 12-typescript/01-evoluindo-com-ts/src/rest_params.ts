interface dtoVendas {
    somaVendas: string
    totalDeVendas: number
    ticketMedio: string

}
function totalDeVendas(...vendas:number[]):dtoVendas{
    const somaVendasReduce = vendas.reduce((acc, current) => {
        return acc += current
    }, 0)
    const somaVendas = `A sua soma total de vendas foi ${somaVendasReduce}`
    const totalDeVendas = vendas.length
    const ticketMedio = `Seu ticket Medio foi de ${somaVendasReduce / totalDeVendas}`

    return {
        somaVendas,
        totalDeVendas,
        ticketMedio
    }
}


console.log(totalDeVendas(1000, 856, 1100, 700, 700, 1119, 435, 2200, 900, 875, 999, 1000, 500, 2000))