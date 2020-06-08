const nome = "Gilmar";
const idade = 37;

console.log("Meu nome é "+nome+" e tenho "+idade+" anos.");

//template literal
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

//object short sintax
//original
const usuario = {
    nome: nome,
    idade: idade,
    empresa: "Engesoftware"
};
//short
const usuario1 = {
    nome,
    idade,
    empresa: "Engesoftware"
};

console.log(usuario);
console.log(usuario1);