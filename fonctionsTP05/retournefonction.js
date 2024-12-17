// Fonction qui retourne une fonction
function creerMultiplicateur(n) {
    // Retourne une fonction prenant un paramètre nb
    return function (nb) {
        return nb * n;
    };
}

// Création de deux fonctions avec des valeurs de n différentes
const multiplierPar2 = creerMultiplicateur(2);
const multiplierPar5 = creerMultiplicateur(5);

// Utilisation des fonctions retournées
console.log(multiplierPar2(10)); // 20
console.log(multiplierPar2(3));  // 6

console.log(multiplierPar5(10)); // 50
console.log(multiplierPar5(3));  // 15

// Vérification que les variables sont des fonctions
console.log(typeof multiplierPar2); // "function"
console.log(typeof multiplierPar5); // "function"
