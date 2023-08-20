const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const limiteFilaDentro = 5;

while (filaDeFora.length > 0 && filaDeDentro.length < limiteFilaDentro) {
    const pessoa = filaDeFora.shift();
    filaDeDentro.push(pessoa);
}
console.log(`Fila de dentro: ${filaDeDentro}`);
console.log(`Fila de fora: ${filaDeFora}`);
