//Imagine que eu queira veririficar se o cabloco é maior de idade


var idade = prompt('Qual sua idade?');

if (idade>25 && idade <70){
    alert('Pode');
    var pedido=prompt('Qual seu pedido?');
}
//a condição tem vir entre parenteses;
//Para colocar mais de um comando precisamos usar o bloco de comando (abrir e fechar o If com {})
//o Eslse é o SENÃO e pra colocar um if dentro do outro usa o else if
//Perceba que eu preciso fazer a checagem dos 25 primeiro, porque se eu sou maior que 25 eu com certeza sou maior de 18, porém se eu sou menor que 25 eu ainda posso ser maior que 18
else if(idade>=18 && idade<70){
    alert('PODE');
    alert('Mostre a identidade, por favor');
} 
else{
    alert('NÃO PODE');
    alert('Vá com Deus')
}
   
//Eu ainda poderia usar o && ou o || dentro - imagine que não se possa vender pra maiores de 70 anos

//O Operador Ternário serve pra If's simples, que eu possa escrever em uma linha, além disso posso atribuir uma variável a ele

var numero=parseInt (prompt ('Vamos verificar se um numero é primo, está pronto? Escolha um número: '));

var a = numero%2==0 ? true:false;

numero!=2?alert(a):alert(false);


