class Matematica{

    //metodos staticos servem como aux, se há um metodo static os outros são ignorados
    static soma(a, b){
       return a + b;
    }
}

console.log(Matematica.soma(1,2));