/* São operações de comparação, > maior que, etc; Todas que vc conhece;
Mais importante são:
== - É o = do JS, porque usar = é atribuir; porém só compara o valor;
=== - É o Igual ao valor e Igual ao tipo
*/

var a=7;
var b=6;

console.log(7==6) 
//se eu coloca-se 1= somente o a iria atribuir o valor de b; Nesse caso o a vai ser comparado e gera um resultado negativo;

var c=10
var d="10" 
//note que é um string, ou seja, são coisas diferentes; mas se eu colocar c==d vai gerar um valor VERDADEIRO, por isso devo usar o ===

console.log(c===d) //Teste ==

/*Outra interessante é o:
!= - que é o DIFERENTE; também tem:
!== - que é DIFERENTE em Numero e DIFERENTE em Tipo;
*/

var x=5
var y="5"

console.log(x!==y)//Teste !=