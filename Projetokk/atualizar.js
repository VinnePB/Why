const readline = require('readline');
const { carregarDados, salvarDados } = require('./dados');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function atualizarRegistro(callback) {
    rl.question("Digite o ID do registro a ser atualizado: ", (id) => {
        let dados = carregarDados();
        const indice = dados.findIndex(registro => registro.id === parseInt(id));

        if (indice !== -1) {
            rl.question("Digite a nova idade: ", (novaIdade) => {
                dados[indice].idade = parseInt(novaIdade);
                salvarDados(dados);
                console.log("Registro atualizado com sucesso!");
                callback();
            });
        } else {
            console.log("ID não encontrado.");
            callback();
        }
    });
}

module.exports = atualizarRegistro; 