const readline = require('readline');
const { carregarDados, salvarDados } = require('./dados');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function adicionarRegistro(callback) {
    rl.question("Digite o nome: ", (nome) => {
        rl.question("Digite a idade: ", (idade) => {
            let dados = carregarDados();
            const novoRegistro = {
                id: dados.length + 1,
                nome: nome,
                idade: parseInt(idade)
            };
            dados.push(novoRegistro);
            salvarDados(dados);
            console.log("Registro adicionado com sucesso!");
            callback();
        });
    });
}

module.exports = adicionarRegistro; 