type UUID = string | number | null

function rodarUUID(uuid: UUID){
    if(uuid){
        console.log(`rodando o uuid: ${uuid}`)
    }
}

function getNameUUID(uuid: UUID){
    if(uuid){
        console.log(`o nome do uuid ${uuid} é...`)
    }
}

type Moeda = "BRL" | "EUR" | "USD"

function comprarItem(moeda: Moeda){
    console.log(`Você está comprando na moeda ${moeda}`)
}

comprarItem("USD")