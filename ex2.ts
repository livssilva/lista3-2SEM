/* Exercício 2 lista 3
Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema
  cartesiano. Para cada ponto escrever o quadrante a que ele pertence.
O algoritmo será encerrado quando pelo  menos uma de duas coordenadas for 
NULA (nesta situação sem escrever mensagem alguma). */

const teclado = require (`prompt-sync`)();

let x: number;
let y: number;

do {
    let x: number = parseInt(teclado("Digite a coordenada X: "));
    let y: number = parseInt(teclado("Digite a coordenada Y: "));

    if (x == 0 || y == 0) {
        break;
    }

    if (x > 0 && y > 0) {
        console.log("Primeiro");
    } else if (x < 0 && y > 0) {
        console.log("Segundo");
    } else if (x < 0 && y < 0) {
        console.log("Terceiro");
    } else if (x > 0 && y < 0) {
        console.log("Quarto");
    }
} while (true);


