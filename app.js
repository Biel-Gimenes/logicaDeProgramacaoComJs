alert("Boa vindas ao Jogo");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random( ) * numeroMaximo + 1);
let chute;
let tentativas = 1;

//enquanto chute nao for igual ao numero secreto
while (chute != numeroSecreto ){
        chute = prompt(`Escolha um numero de 1 a ${numeroMaximo}`);
        //se chute for igal o numero secreto
    if (numeroSecreto == chute ){ 
        break;    
    } else {
        if (chute > numeroSecreto) {
        alert(`Voce errou, o numero Secreto e menor que ${chute}`);
    } else {
        alert(`Voce errou, o numero Secreto e maior que,  ${chute}`);
    }
    tentativas++;

    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
 alert(`Voce acertou o Numero, o numero era,  ${numeroSecreto} voce acertou em ${tentativas} ${palavraTentativa}` );

//  if (tentativas > 1){
//         alert(`Voce acertou o Numero, o numero era,  ${numeroSecreto} voce acertou em ${tentativas} chutes` );
// } else {
//         alert(`Voce acertou o Numero, o numero era,  ${numeroSecreto} voce acertou em ${tentativas} chute` );

// };