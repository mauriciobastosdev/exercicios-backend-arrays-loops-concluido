const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomeComA = [];

for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i];
    if (nome[0] === 'A' || nome[0] === 'a') {
        nomeComA.push(nome);
    }
}

console.log(nomeComA);
