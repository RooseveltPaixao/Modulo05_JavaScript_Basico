alert("Cuidado pessoa feia olhando"); 
/* As "" são pra NOMES, se vc quiser declarar variáveis use sem aspas; agora se quiser escrever um comentário, sei lá, com aspas;
Já o ; é opcional, mas vamos colocar sempre.
*/

console.log("Testando 1 2 3");


/* Criando uma variável:
    OBS.: variável é um pedaço de memória indefinido
pra criar uma variável usa-se o comando: var e na frente dele o nome da variável; ex.:
var a;
*/

var a;

/* Criada uma variável com valor indefinido*/

/* para colocar valores na variável podemos colocar no momento que declaramos; ex.:
var a = "Cuscuz";
Ou depois de ser declarada; ex.: 
var b;
b="Arroz"
*/

a = "Arroz com Feijão";

var b="Feijão Preto";

console.log(a);

console.log(b);

/* uma variável também pode receber outra váriavel, mas cuidado com a ordem*/

c=a;

console.log(c) /*c agr recebe Arroz com Feijão, mas a ordem importa*/

var d="FrangoFrito";
e=d;
d="Pastel";
console.log(e) /* o valor de "e" vai ser IDENFINIDO, pois pegou o valor de d antes de D mudar de valor*/