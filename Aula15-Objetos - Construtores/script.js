//Construtores são maneiras de integrar as funções e variáveis com o objeto

//Primeiramente quero um array com vários nomes de alunos, notas etc

function calcMed() {
    return (this.nota1+this.nota2)/2;
    //Usando o this ele vai fazer isso pra cada objeto
}

var turma=[
    {
        nome:'Roosevelt',
        nota1:9,
        nota2:7,
        media:calcMed //agora média é uma função, a função calcMed
    },
    //Observe que eu criei um array e dentro dele um objeto com as propriedades nome, notas e media
    {
        nome:'João',
        nota1:5,
        nota2:7.5,
        media:calcMed
    },

]

var aluno0=turma[0] //agora aluno é a variável do 1º objeto dentro do array;

console.log(aluno0); //vai retornar todos os valores do objeto;
console.log(aluno0.media()) //vai retornar os valores da função media


console.log('_________________________________________________________________________________________')

var aluno1=turma[1]

console.log(aluno1)
console.log(aluno1.media())

console.log('_________________________________________________________________________________________')
console.log('_________________________________________________________________________________________')

//Agora imagina acrescentar aluno ali um por um é muito fácil de errar nas variáveis, vamos ver outra maneira:

//1º Passo vamos tentar fazer uma função que vai receber dados de um array e retornar a média

function criarAluno(name,p1,p2) {
    return{ //esse retono vai fazer os dados voltarem com a média
        name:name, //lembrando que os elementos dentro de um array e dentro de um objeto são separados por virgula;
        n1:p1,
        n2:p2,
        med:function() {
            return (this.n1+this.n2)/2; //agr a média vai ser calculada de acordo com cada elemento do meu array;
        }
    }

}

//2º Passo vou criar um array com os dados do meus alunos, esses dados vão alimentar a função criarAluno e ela vai retonar os mesmos dados + a média;

var classe = [
    criarAluno("Roosevelt", 7,8),
    criarAluno("Pedro", 7.7,6.8),
    criarAluno("Joaquim",5.4,8.9)
]

//Agora vou criar uma variável pra receber os dados de classe e exibir isso no console

var a = classe[0] //agora é só alterar o index do array que irei exibir o que quiser

console.log(a);
console.log(a.med());

console.log('_________________________________________________________________________________________')


//Para não ter que ficar puxando dentro do meu array index por index eu posso fazer um for pra farrer isso

//Tem duas maneiras de fazer isso 1ª que a gente aprendeu

for (var a of classe){
    console.log('O '+ a.name +' tirou '+ a.n1+ ' na 1ª prova e '+ a.n2+' na segunda prova, asssim ficando com uma média de: '+a.med())
}
console.log('_________________________________________________________________________________________')


//Praticamente tudo no JS é um Objeto em eles sempre tem método, assim posso usar a segunda forma:

classe.forEach(function (elemento){
    console.log(elemento);
}
)
//repare que forEach é alimentado por uma função que tem uma variável elemento;
//forEach vai farrer o array classe e colocar dentro de elemento cada um dos elementos do array


console.log('_________________________________________________________________________________________')
console.log('_________________________________________________________________________________________')

//Como foi dito tudo no JS praticamente é um objeto então eu posso tratar uma função como um objeto, fazendo assim construtores:

//1ª Vou criar uma função e dentro dela um objeto usando this

function aluno(nomes,nA,nB) { //repare que a cor de nome está diferente porque eu instanciei o objeto
    this.nomes=nomes, //repare que aqui eu vou usar o = aon invés dos :
    this.notaA=nA,
    this.notaB=nB
    this.m=function m() {
        return (this.notaA+this.notaB)/2
        
    }
    //repare que não tem um return pra aluno, isso é a grande diferença de instanciar ou não;
}

//Assim criei uma função especifica, posso criar uma váriavel com new que vai atribuir valores a cada instância do meu objeto;

var x = new aluno('Roosevelt', 7,8);

console.log(x)