const original = [1, 4, 12, 21, 53, 88, 112];
const numerosPares = [];
let i = 0;

while (i < original.length) {
    if (original[i] % 2 == 0) {
        numerosPares.push(original[i]);
    }
    i++;
}
console.log(numerosPares);