//SPREAD

const arr1 =  [1,2,3];
const arr2 =  [4,5,6];

//concatena os dois arrays, seguindo a ordem
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario = {
    nome: "Gilmar",
    idade: 37,
    empresa: "Engesoftware"
};

//copia as propriedades do 1 obj sobrepondo apenas o nome
const usuario2 = {...usuario, nome: "Gabriel"};

console.log(usuario2);