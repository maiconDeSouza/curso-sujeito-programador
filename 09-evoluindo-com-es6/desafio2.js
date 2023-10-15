/*
​1) Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e 
verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.
*/

function checkNumberStatus(number){
    if(typeof number !== 'number')return `Informe apenas números`
    
    if(number === 0)return `Igual à zero`
    
    if(number > 0)return `Positivo`

    if(number < 0)return `Negativo`
}

console.log('1)', checkNumberStatus('@'))
console.log('1)', checkNumberStatus(2))
console.log('1)', checkNumberStatus(0))
console.log('1)', checkNumberStatus(-23))

/*
2) Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve 
ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e 
com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números. 
*/

function numberExist(array, number){
    return array.includes(number)
}

console.log('2)', numberExist([2,6,9,10,2], 9))
console.log('2)', numberExist([2,6,9,10,2], 17))

/*
3) Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado 
deve mostrar apenas o produto que tem o preço igual a R$20:​

const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];
*/

const products = [
    { name: 'Maça', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
  ]

  function findPrice(price){
    return products.find(prod => prod.price === price)
  }

  console.log('3)', findPrice(20))