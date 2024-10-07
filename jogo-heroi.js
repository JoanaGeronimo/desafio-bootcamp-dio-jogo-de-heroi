class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou uma técnica desconhecida";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi sem usar const
var heroi1 = new Heroi("Gandalf", 100, "mago");
var heroi2 = new Heroi("Aragorn", 30, "guerreiro");
var heroi3 = new Heroi("Liang", 25, "monge");
var heroi4 = new Heroi("Kaito", 20, "ninja");

// Realizando ataques
heroi1.atacar();  // Exibe: o mago atacou usando magia
heroi2.atacar();  // Exibe: o guerreiro atacou usando espada
heroi3.atacar();  // Exibe: o monge atacou usando artes marciais
heroi4.atacar();  // Exibe: o ninja atacou usando shuriken
