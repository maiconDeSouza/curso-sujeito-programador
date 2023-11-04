/*
*** Generics
 - Permitte criar estruturas que serão adaptaveis a varios tipos de dados. Ajudando a reaproveitar melhor nosso código
 e deixa-lo mais flexivel.

 - Podemos usar os generics:
 Funções | interfaces | type | classes

 S => State;
 T => Type;
 K => key;
 V => Value;
 E => Element;
*/

function retornaIdade<T extends number | string>(idade: T):string{
    const resultado = Number(idade)

    if(isNaN(resultado)){
        return `Tipo não aceitavel`
    }

    return `Sua idade é ${resultado}`
}

console.log(retornaIdade<number>(23))

console.log(retornaIdade<string>("23"))

// console.log(retornaIdade<boolean>(true))

// console.log(retornaIdade<Array>([23, 14]))

/* *******************USANDO INTERFACE*******************  */

// interface NovoProduto <T>{
//     nome: string
//     preco: T
// }

// const arroz: NovoProduto<number> = {
//     nome: "Arroz branco",
//     preco: 15
// }


interface NovoProduto <T extends number | string>{
    nome: string
    preco: T
}

const arroz: NovoProduto<number> = {
    nome: "Arroz branco",
    preco: 15
}

const feijao: NovoProduto<string> = {
    nome: "Feijão Preto",
    preco: "15"
}

function soAceito<T>(){
    return {
        texto(tipoAceito: T):string{
            return `Só aceito agora do tipo ${typeof tipoAceito}`
        }
    }
}

const tipoNumero = soAceito<number>()
console.log(tipoNumero.texto(23))

const tipoString = soAceito<string>()
console.log(tipoString.texto("23"))