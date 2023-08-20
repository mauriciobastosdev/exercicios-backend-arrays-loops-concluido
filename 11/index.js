const original = [5, 7, 13, 17, 26, 34, 118, 245];
const entre = [];

for (let numero of original) {
    if (numero >= 10 && numero <= 20) {
        entre.push(numero);
    }
}
console.log(entre);
