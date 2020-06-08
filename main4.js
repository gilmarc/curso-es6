const arr =  [1,2,3,4,5];

//sinal de => substitui a palavra function em funções anonimas, são as chamadas arrow functions
//se a função tiver apenas um paramentro e uma linha de logiaca pode se retirar os parenteses e chaves
//função original
const newArr = arr.map(function(item){
    return item * 2;
});

//arrow function
const newArr = arr.map(item => item * 2);

console.log(newArr);