const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let c = 0;
let i = 0;

while (i < numeros.length) {
    if (numeros[i] % 2 == 0) {
        c += numeros[i];
    }
    i++;
}
console.log(c)
