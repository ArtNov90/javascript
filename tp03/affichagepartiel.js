let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// 1. Afficher uniquement les entiers supérieurs à 3
console.log("Entiers supérieurs à 3 :");
for (let i = 0; i < array.length; i++) {
    if (array[i] > 3) {
        console.log(array[i]);
    }
}

// 2. Afficher uniquement les entiers pairs
console.log("\nEntiers pairs :");
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}

// 3. Afficher uniquement les valeurs aux index pairs
console.log("\nValeurs aux index pairs :");
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        console.log(array[i]);
    }
}

// 4. Afficher uniquement les entiers impairs
console.log("\nEntiers impairs :");
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        console.log(array[i]);
    }
}
