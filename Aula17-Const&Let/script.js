//Existe mais de um jeit de criar variáveis, até aqui só usamos VAR, mas dá pra usar Const e Let 

//Const&Let foram inseridos no ES6 ou EmaScript2015 (são iguais), cuidado porque é rescente e computadores com navegadores MUITOOO antigos podem não funcionar, mas isso é raro;


var n1=4;
let n2=5;
const n3=7; 

console.log(n1);
console.log(n2);
console.log(n3);



//A const é uma constante, assim não é possível  mais atribuir outro valor a n3; porém esse valor pode ser modificado, o que é diferente de ser reatribuido. Como?

//minha constante sendo um array ou um objeto eu posso adicionar valores a eles e assim mudar; ex.:

const a=[4]

a.push(5)// push é um comando usado pra inseri coisas em um array

//ou usando um objeto

console.log(a);

const b={
    numero:[1,2,3],
    nome:'Rooselt'

}

b.notas=[21,17,14];

console.log(b)


//Somente a const é assim, porém tanto a const como a let são variáveis LOCAIS o que as diferem da VAR que é uma variável GLOBAL; mas como assim?

//Se criarmos um bloco e colocar as variáveis lá e mandar imprimir issi no console fora do bloco não vai dar certo;:

{
    var z1=42;
    let z2=11;
    const z3=77; 
    console.log(z1)
    console.log(z2)
    console.log(z3) // a const e a let só funcionam dentro desse bloco se sair dele já era, são variáveis locaaaaais

}

/*
console.log(z1)
console.log(z2)
console.log(z3)
se deixarmos isso fora do bloco somente a z1 seria lida, porque var é uma variável global, porém a let e a const não seriam exibidas, daria erro

*/


//A grande importância de variáveis locais é a facilidade de encontrar erros, assim aprenda desde logo a sempre que possível usar as variáveis locais







