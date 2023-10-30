function login(userName: string):void{
    console.log(`Seja Bem-vindo ${userName}`)
}

login("Sujeito Programador!")

function soma(valor1:number, valor2:number):string{
    return `A soma é ${valor1 + valor2}`
}

soma(3, 5)

const retornoIP = (ip:string):string => ip