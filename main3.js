const arr =  [1,2,3,4,5];

//percorre todo array item a item igual for do java for(obj o: objs)
const newArr = arr.map(function(item,index){
    return item + index;
});

console.log(newArr);

//sempre vai somar o valor do retorno no total ou seja soma todos os itens do array
const sum = arr.reduce(function(total,next){
    return total + next;
});

console.log(sum);

// sempre retorna somente o que é true, nesse caso os numeros que sao pares
const filter = arr.filter(function(item){
    return (item % 2) === 0;
});

console.log(filter);


//procura pelo valor dentro do array e retorna o valor ou undefinid se nao encontrar
const find = arr.find(function(item){
    return item == 4;
});

console.log(find);