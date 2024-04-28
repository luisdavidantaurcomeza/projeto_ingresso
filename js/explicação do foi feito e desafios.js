/* Você precisará declarar uma nova função, no arquivo app.js, chamada comprarPista:

function comprarPista(qtd) {

}
Agora, dentro dessa nova função, você precisa recuperar a quantidade de ingressos disponíveis para o tipo pista, utilizando a função parseInt para converter o valor de texto para número:

let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
COPIAR CÓDIGO
Na sequência, será necessário declarar um bloco condicional que será responsável por checar se a quantidade digitada é maior do que a quantidade disponível:

if (qtd > qtdPista) {

} else {

}
Agora, dentro do if, você deve exibir um alerta indicando que a quantidade digitada está indisponível, e dentro do else deve decrementar a quantidade digitada, além de alertar que a compra foi realizada com sucesso:

if (qtd > qtdPista) {
    alert('Quantidade indisponível para tipo pista');
} else {
    qtdPista = qtdPista - qtd;
    document.getElementById('qtd-pista').textContent = qtdPista;
    alert('Compra realizada com sucesso!');
}
Por fim, na função comprar(), você deve chamar a função comprarPista() caso o tipo de ingresso selecionado tenha sido do tipo pista:

if (tipo.value == 'pista') {
    comprarPista(qtd);
}
Pronto! Abra a página do projeto no navegador e verifique se a compra de ingressos do tipo pista está sendo realizada. 
Você precisará criar duas novas funções, chamadas comprarSuperior e comprarInferior, que serão similares à função comprarPista:

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}
Atenção! Caso copie e cole o código da função comprarPista, lembre-se de renomear todas as variáveis nas novas funções, para que o código funcione corretamente.

Agora, na função comprar, altere o bloco condicional para verificar os outros tipos de ingressos e chamar a função de acordo com o tipo escolhido:

if (tipo.value == 'pista') {
    comprarPista(qtd);
} else if (tipo.value == 'superior') {
    comprarSuperior(qtd);
} else {
    comprarInferior(qtd);
}
Pronto! Abra a página do projeto no navegador e verifique se a compra está funcionando corretamente para todos os tipos de ingressos.

Confira o código final do arquivo app.js:

function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd').value;

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}
Suponha que você está desenvolvendo um programa para uma loja de jogos e precisa calcular o desconto total que um cliente receberá em sua compra, de acordo com as seguintes regras:

A loja oferece desconto progressivo com base na quantidade de jogos comprados;
Cada jogo custa R$50 sem desconto;
Se o cliente comprar 5 ou mais jogos, ele receberá um desconto de 10% em cada jogo;
Se o cliente comprar 10 ou mais jogos, ele receberá um desconto de 20% em cada jogo;
Você deseja usar um loop while para calcular o desconto total, dado o número de jogos comprados, e escreveu o seguinte código:

function calcularDescontoTotal(quantidadeDeJogos) {
    let desconto = 0;
    let i = 0;

    while (i < quantidadeDeJogos) {
        if (quantidadeDeJogos >= 5) {
            desconto += 0.1 * 50;
        } else if (quantidadeDeJogos >= 10) {
            desconto += 0.2 * 50;
        }
        i++;
    }

    return desconto;
}
No entanto, você percebeu que há problemas de lógica no código escrito e ele não está funcionando conforme as regras descritas anteriormente.

Escolha a alternativa que indica o problema de lógica no código anterior:

O primeiro bloco if foi escrito de maneira incorreta, fazendo com que o segundo if nunca seja executado.


Exatamente! O primeiro if deveria ser executado apenas quando a quantidade de jogos for maior do que 5 e também menor do que 10

if (quantidadeDeJogos >= 5 && quantidadeDeJogos < 10) {

    DESAFIOS: 
1) Adicione uma verificação para garantir que a quantidade inserida pelo usuário seja um número positivo. Se o valor não for válido, exiba uma mensagem de erro adequada.
function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtdInput = document.getElementById('qtd');
    let qtd = parseInt(qtdInput.value);


    // Verificar se a quantidade é um número positivo
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }


    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}


function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}


function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}


function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}


2) Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.

function converterParaInteiro(valorString) {
    return parseInt(valorString);
}

// Exemplo de uso
let valorString = "42";
let valorInteiro = converterParaInteiro(valorString);
console.log(valorInteiro);  // Saída esperada: 42



3) Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.

function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erro: divisão por zero.";
    }
}

function calculadora(operacao, a, b) {
    switch (operacao) {
        case 'soma':
            return adicao(a, b);
        case 'subtracao':
            return subtracao(a, b);
        case 'multiplicacao':
            return multiplicacao(a, b);
        case 'divisao':
            return divisao(a, b);
        default:
            return "Operação inválida.";
    }
}

// Exemplo de uso
let resultado = calculadora('soma', 5, 3);
console.log(resultado);  // Saída esperada: 8

4) Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

// Exemplo de uso
let numero = 7;
let resultadoParOuImpar = verificarParOuImpar(numero);
console.log(resultadoParOuImpar);  // Saída esperada: Ímpar

5) Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar

function converterTemperatura(valor, escala) {
    if (escala.toLowerCase() === 'celsius') {
        return (valor * 9/5) + 32;  // Celsius para Fahrenheit
    } else if (escala.toLowerCase() === 'fahrenheit') {
        return (valor - 32) * 5/9;  // Fahrenheit para Celsius
    } else {
        return "Escala inválida";
    }
}

// Exemplo de uso
let temperaturaCelsius = 25;
let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, 'celsius');
console.log(temperaturaFahrenheit);  // Saída esperada: 77



Utilizar a função parseInt no JavaScript, para converter um valor do tipo String para um número inteiro;

Escrever o código de funcionalidades em funções separadas;

Utilizar um bloco condicional para determinar qual função deve ser chamada, de acordo com o valor armazenado em uma variável.

*/