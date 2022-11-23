//Classes:

class Livro {
    constructor(nome, editora, paginas){
       this.nome = nome
       this.editora = editora
       this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um Livro da Editora ${this.editora} e tem ${this.paginas} páginas.`)
    }
}

const NodeJS = new Livro("Primeiros passos com NodeJS", "Casa do Código", 195);
NodeJS.anunciarTitulo();
NodeJS.descreverTitulo();

//console.log(typeof Livro);

class LivroColecao extends Livro {
    constructor(nome, nomeColecao){
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao(){
        console.log(`O Livro ${this.nome} faz parte da colecao ${this.nomeColecao}`)
    }
}

const LogicaDeProgamação = new LivroColecao("Logica de Programação", "Comece a Programar")
LogicaDeProgamação.descreverColecao()
