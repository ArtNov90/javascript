// Fonction qui vérifie si un tableau ne contient que des nombres
function verifieContenuTableau(tableau) {
    // Vérifie que tous les éléments du tableau sont des nombres
    return tableau.every(element => typeof element === 'number');
}

// Appels de la fonction

// 1. Un tableau contenant uniquement des nombres
const tableau1 = [1, 2, 3, 4, 5];
console.log(verifieContenuTableau(tableau1)); // true

// 2. Un tableau contenant des nombres et une chaîne de caractères
const tableau2 = [1, "hello", 3];
console.log(verifieContenuTableau(tableau2)); // false

// 3. Un tableau vide
const tableau3 = [];
console.log(verifieContenuTableau(tableau3)); // true
