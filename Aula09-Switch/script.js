//Switch = chave/ligar ou desligar/interruptor
//Vamos imaginar que eu queira verificar se certos alunos conseguiram ou não nota pra passar na prova. E eu vou mandar uma mensagem de acordo com a nota.

var p1= parseInt (prompt("Qual a nota da prova 1:  "));
var p2= parseInt (prompt("Qual a nota da prova 2: "));
alert("A média é acima de 6")
var media= (p1+p2)/2;

var conceito="" //essa é uma variável que vai receber um valor dependendo do if;

if(media>8.5){
    conceito="Ótimo";
}
else if(media >7){
    conceito="Bom";
}
else if(media > 6){
    conceito="Regular";
}
else{
    conceito="Reprovado"
}

alert(conceito + " sua média é:  " + media);

//Agora vou exibir a mensagem

switch (conceito){ //dentro do parenteses está o que eu vou analisar
    case "Ótimo": //precisa dos dois pontos
        alert('Parabéns, você é um estudante excelente, continue assim');
        break; //precisa do break se não ele exibe tudo abaixo
    case "Bom":
        alert('Parabéns, você foi bem, mas podia ser melhor, se esforce mais');
        break;
    case "Regular":
        alert('Parabéns, você foi aprovado, mas por pouco, melhore mais');
        break;
    case "Reprovado":
        alert('Infeliz você não se esforçou o suficiente, vá a cordenação para mais instruções');
        break;
    default://default = padrão
        alert('ERRO');
        break; //no default isso é meio irrelevante
}