function retornaObjeto(name:string, idade:number, status=false, frase?:string):object{
    return {
        name,
        idade,
        status,
        frase
    }
}

retornaObjeto("Maicon", 23, true, "Texto")