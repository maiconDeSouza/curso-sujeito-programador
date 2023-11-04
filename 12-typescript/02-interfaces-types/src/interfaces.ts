interface Icadastro {
    name: string
    idade: number
    email: string
    active: boolean
    observation?: string
}

function createRegistration(registrationData: Icadastro):string{
    const active = registrationData.active? `Ativo` : `Inativo`
    if(registrationData.observation){
        return `O usuário ${registrationData.name} com idade ${registrationData.idade} e e-mail ${registrationData.email}
        encontrasse com o cadastro ${active} com a seguinte observação: ${registrationData.observation}`
    }
    return `O usuário ${registrationData.name} com idade ${registrationData.idade} e e-mail ${registrationData.email}
    encontrasse com o cadastro ${active} e sem observações`
}

const user1: Icadastro = {
    name: `Dante`,
    idade: 2,
    email: `comandante@bondedoauausemfreio.com.br`,
    active: true,
    observation: `Chefe do bonde do Auau. Procurado em 57 paises.`
}

const user2: Icadastro = {
    name: `Dona Maia`,
    idade: 10,
    email: `donamaia@gmail.com`,
    active: true,
}

console.log(createRegistration(user1))
console.log(createRegistration(user2))