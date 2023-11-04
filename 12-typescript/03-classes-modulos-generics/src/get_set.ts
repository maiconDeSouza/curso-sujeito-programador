class Contador {
    private valor: number = 0

    add(){
        this.valor++
    }

    get getValor(){
        return this.valor
    }

    set setNovoInicio(newValor: number){
        this.valor = newValor
    }
}

const novoContador = new Contador()

novoContador.add()
novoContador.add()
console.log(novoContador.getValor)

novoContador.setNovoInicio = 25
novoContador.add()

console.log(novoContador.getValor)

