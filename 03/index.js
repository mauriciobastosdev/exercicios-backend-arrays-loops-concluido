const numeros = [54, 22, 14, 87, 10, 284];
let i = 0;
let c = 0;

while (i < numeros.length) {
    if (numeros[i] === 10) {
        console.log(numeros.length);
        c++;
    }
    i++;
}
if (c === 0) {
    console.log("-1");
}