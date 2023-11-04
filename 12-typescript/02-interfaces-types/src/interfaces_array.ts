interface TecnologiasProps {
    id: string
    nome: string
    descricao?: string
}

type NomesTec = TecnologiasProps[]

const nomeTec: NomesTec = [
    {
        id: "123",
        nome: "Python",
        descricao: ""
    },
    {
        id: "321",
        nome: "Javascript",
        descricao: ""
    }
]