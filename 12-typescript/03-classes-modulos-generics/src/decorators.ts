
// function logInfo(target: any){
//     console.log(target)
// }

// @logInfo
// class Sistema {

// }

function logInfo(message: string){
    return (target: any) => {
        console.log(`${message}, ${target}`)
    }
}

@logInfo("Servidor rodando")
class Sistema {

}

function setIpServidor(novoIP: string){
    return (target: any) => {
        return class extends target {
            ip = novoIP
        }
    }
}

@setIpServidor("192.168.50.30")
class Servidor{

}

const sevidor1 = new Servidor()

console.log(sevidor1)