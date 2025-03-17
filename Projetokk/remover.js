const readline = require('readline');
const { carregarDados, salvarDados } = require('./dados');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removerRegistro(callback) {
    rl.question("Digite o ID do registro a ser removido: ", (id) => {
        let dados = carregarDados();
        const novosDados = dados.filter(registro => registro.id !== parseInt(id));

        if (dados.length === novosDados.length) {
            console.log("ID não encontrado.");
        } else {
            salvarDados(novosDados);
            console.log("Registro removido com sucesso!");
        }
        callback();
    });
}

module.exports = removerRegistro;