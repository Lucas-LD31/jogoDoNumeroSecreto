let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

// Cria uma função para pegar a tag e o texto que será exibido na tela sempre que usar a função.
function exibirTextoNaTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

// Cria uma função para exibir a mensagem quando o jogo inicia ou é reiniciado.
function exibirMensagemInicial() {

    exibirTextoNaTela('h1', 'Jogo do número secreto');

    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100.');

}

exibirMensagemInicial();

// Cria uma função para atualizar e criar uma mensagem a cada tentativa de achar o número secreto.
function atualizarTentativas() {

    tentativas++;
    console.log(`Numero de tentativas: ${tentativas}`);

}

// Adicionar um texto no console ao clicar o botão de chute.
function verificarChute() {
    
    // Cria uma variavel que armazena oque for colocado no 'input' do html .
    let chute = document.querySelector('input').value;
    
    // Cria um if que caso a variavel chute seja igual o numero secreto criado pela função gerarNumeroAleatorio então o código abaixo vai rodar.
    if (chute == numeroSecreto) {

        atualizarTentativas();

        exibirTextoNaTela('h1', 'Você acertou!');
        
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Com ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        // Cria um if, que caso o chute seja menor que o número secreto então o código abaixo vai rodar.
        if (chute < numeroSecreto) {

            exibirTextoNaTela('h1', 'Você errou!');
            exibirTextoNaTela('p', 'O número secreto é maior.');

            atualizarTentativas();

        //Cria um else if caso o if acima não seja atendido, que caso o chute seja maior que o número secreto então o código abaixo vai rodar.
        } else if (chute > numeroSecreto) {

            exibirTextoNaTela('h1', 'Você errou!');
            exibirTextoNaTela('p', 'O número secreto é menor.');

            atualizarTentativas();

        }
        
        limparCampo();
    
    }
}

// Cria a função para gerar um número aleatório para o jogo.
function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    // Cria um if que caso o numero da variavel quantidadeDeElementosNaLista seja igual a variavel numeroLimite, reseta os números na variavel listaDeNumerosSorteados.
    if(quantidadeDeElementosNaLista == numeroLimite) {

        listaDeNumerosSorteados = [];

    }

    // Cria um if que se a variavel listaDeNumerosSorteados tenha o número dentro da variavel numeroEscolhido, então utiliza a função gerarNumeroAleatorio para sortear novamente.
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {

        return gerarNumeroAleatorio();

    } else {

        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;

    }

}

// Cria uma função que sempre que rodar a função, vai resetar o valor da variavel chute.
function limparCampo() {

    chute = document.querySelector('input');
    chute.value = '';

}

// Cria uma função que sempre que rodar a função, vai reiniciar completamente o jogo para seu estado original.
function reiniciarJogo() {

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}