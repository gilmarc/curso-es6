//Rest (não é web service)
const usuario = {
    nome: "Gilmar",
    idade: 37,
    empresa: "Engesoftware"
};

//desestruturação, separando nome e resto do objeto em duas variaveis diferente usando 
//@babel/plugin-proposal-object-rest-spread
const{nome,...resto} = usuario;

console.log(nome);
console.log(resto);


// separando os dois primeiros itens do array em duas variaves e resto numa terceira usando desestruturação
const arr =  [1,2,3,4,5];

const[a, b,...c] = arr;

console.log(a);
console.log(b);
console.log(c);