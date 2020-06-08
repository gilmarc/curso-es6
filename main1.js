// classe pai
class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

// classe herdeira
class TodoList extends List{
    constructor(){
        super();
        this.usuario = 'gilmar';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

var minhaLista =  new TodoList();

document.getElementById('novoTodo').onclick = function(){
    minhaLista.add('Novo Todo');
}

minhaLista.mostraUsuario();