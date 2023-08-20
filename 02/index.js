const letras = ["A", "a", "B", "C", "E", "e"];
let i = 0;
let c = 0;

while (i < letras.length) {
    if (letras[i] === "E" || letras[i] === "e") {
        c++;
    }
    i++;
}
if (c != 0) {
    console.log(`Foram encontradas ${c} letras "E" ou "e".`);
} else {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
}