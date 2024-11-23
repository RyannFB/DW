

// Função da calculadora
// Leitura de entradas no Node.js
const readline = require('readline');

// Configurar interface para entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função da calculadora
function calculadora(num1, num2, operador) {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero!";
        default:
            return "Operador inválido. Use: +, -, *, /.";
    }
}

// Obter entradas do usuário
rl.question("Digite o primeiro número: ", (n1) => {
    rl.question("Digite o segundo número: ", (n2) => {
        rl.question("Digite o operador (+, -, *, /): ", (operador) => {
            // Converter entradas para números e calcular
            const numero1 = +n1;
            const numero2 = +n2;

            const resultado = calculadora(numero1, numero2, operador);

            // Exibir o resultado e encerrar
            console.log(`Resultado: ${resultado}`);
            rl.close();
        });
    });
});
