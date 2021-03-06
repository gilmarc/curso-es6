import api from "./api";

class App{
    constructor(){
        this.repositorios = [];
        this.formEl = document.getElementById("repo-form");
        this.listEl = document.getElementById("repo-list");
        this.inputEl = document.getElementById("repositorio");
        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepositorio(event);
    }

    setLoading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id','loading');
            this.formEl.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();
        }
    }

    async addRepositorio(event){
        try{
            event.preventDefault();
            const repoInput = this.inputEl.value;
            console.log(response);

            if(repoInput.length === 0){
                return;
            }

            this.setLoading();

            const response = await api.get(`repos/gilmarc/${repoInput}`);
            console.log(response);

            const {name, description, owner:{avatar_url, html_url} } = response.data;

            if(response.status === 200){
                this.repositorios.push({
                    nome:name,
                    descricao:description,
                    avatar_url:avatar_url,
                    html_url:html_url
                });
                this.render();
                this.inputEl.value = "";
            }
        }catch(e){
            alert("Erro na requisição! "+e);
        }
        this.setLoading(false);
    }

    render(){
        this.listEl.innerHTML = "";
        this.repositorios.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute("src", repo.avatar_url);

            let tituloEl = document.createElement('strong');
            tituloEl.appendChild(document.createTextNode(repo.nome));

            let descricaoEl = document.createElement('p');
            descricaoEl.appendChild(document.createTextNode(repo.descricao));

            let linkEl = document.createElement('a');
            linkEl.setAttribute("target", "_blank");
            linkEl.setAttribute("href", repo.html_url);
            linkEl.appendChild(document.createTextNode("Acessar"));

            let liEl = document.createElement('li');
            liEl.appendChild(imgEl);
            liEl.appendChild(tituloEl);
            liEl.appendChild(descricaoEl);
            liEl.appendChild(linkEl);

            this.listEl.appendChild(liEl);

        }); 
    }
}

new App();