"use strict";

var nome = "Gilmar";
var idade = 37;
console.log("Meu nome é " + nome + " e tenho " + idade + " anos."); //template literal

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos.")); //object short sintax
//original

var usuario = {
  nome: nome,
  idade: idade,
  empresa: "Engesoftware"
}; //short

var usuario1 = {
  nome: nome,
  idade: idade,
  empresa: "Engesoftware"
};
console.log(usuario);
console.log(usuario1);
