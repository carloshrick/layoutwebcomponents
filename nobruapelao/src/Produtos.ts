
class Produtos{
    private id: number;
    private descricao: string;
    private preco: number;
    private imagem:string;

    constructor(id: number, desc: string, img:string, preco: number){
        this.id = id;
        this.descricao = desc;
        this.imagem = img;
        this.preco = preco;
        
    }

    getDescricao(){
        return this.descricao;
    }

    getImagem(){
        return this.imagem;
    }

    getPreco(){
        return this.preco;
    }

   
}

export let lista_objetos = [
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00),
    new Produtos(1,"Sandalha do spaider men","https://clovisatacado.vteximg.com.br/arquivos/ids/228855-507-507/Papete-Infantil-Masculina-Homem-Aranha-Grendene-Kids-21852-3291852_018-01.jpg?v=636825560883270000",300.00)
]