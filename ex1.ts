/* Exercício 2 lista 3
Escreva um programa que repita a leitura de uma senha até que ela seja válida. 
Para cada leitura de senha  incorreta informada, escrever a mensagem "Senha Invalida".
 Quando a senha for informada corretamente deve ser impressa a mensagem 
 "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002.*/

const teclado = require(`prompt-sync`)();

let senha: number = 0;

do {
    senha = parseInt(teclado(`Digite a senha: `));
    if (senha != 2002) {
        console.log(`Senha Inválida.`);
    }
    else {
        console.log(`Acesso Permitido.`);
    }
} while (senha != 2002)