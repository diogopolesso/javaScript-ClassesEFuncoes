//Função:

const Livro = function(nome, editora, paginas){
    gNome = nome,
    gEditora = editora,
    gPaginas = paginas

    this.getNome = function(){
        return gNome
    }
    this.getEditora = function(){
        return gEditora
    }
    this.getPaginas = function(){
        return gPaginas
    }
}

const GraphQL = new Livro("GrapgQL", "Casa do Código", 143);

console.log(GraphQL.getNome());
console.log(GraphQL.getEditora());
console.log(GraphQL.getPaginas());


const nome = "Polesso"
//por baixo dos Panos:
const temp = new String(nome);

console.log(temp.toString());