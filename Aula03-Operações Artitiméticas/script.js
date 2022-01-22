/*
Principais operadores matemáticos (vou tirar os que nos sabe):
    OBS.: o Java Script aceita números quebrados;
% = módulo;
++ = incremento;
-- = decremento;

*/
var a=10;
var b=15;
var c= a % b;
console.log(c) // o resultado disso é 10, porque o módulo retorna o resto da divisão

//testando % - resultado: % é um divisão que retonar o resto;
var d=10/3;
var e=d%3;
console.log(e);

//O incremento é a variável +1

var x=50;

x++;//note que não preciso de = nem nada disso

var y=30;

++y;//note que pode vir antes ou depois;

console.log(y)

/* CUIDADO!!!!

++y é DIFERENTE de y++

A diferença consiste na ordem de soma. Suponha que eu queira abribuir o valor de y em uma variável z, aritimeticamenete falando essa é a diferença:
z=++y -> z = (30 + 1) -> logo z=31  e y= 31;
z=y++ -> (z=[30)+1] -> logo z =30 e y = 31 - isso porque ele atribui o valor a z primeiro e depois soma +1 em y, assim as duas variáveis tem valores distintos;
kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk - Muito Legal;
*/
var r="100"

p=++r // p=101 e r=101;

console.log(p)
console.log(r)

var s="100"

l=s++ //l=100 e s=101;

console.log(l)
console.log(s)

//OBS.: TUDO VISTO em ++ serve pra --;





/*SINTAXE DE ESCRITA - é importande dizer que o mesmo trem pode ser escrito de duas formas:
y++ = y=y+1 ISSO é IGUAL a y +=1;

y = y/10  => y /= 10;
x = x%10 => x%=10;
r= r*8 => r*=8;
e por ai vai
*/



