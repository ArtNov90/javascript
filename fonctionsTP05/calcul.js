// Fonction qui calcule a * b + a + b
function calcul(a, b) {
    return a * b + a + b;
}

// Appel de la fonction avec des nombres
const resultat1 = calcul(3, 4);
console.log("Résultat avec des nombres (3, 4) : ", resultat1); // 19

// Test avec des chaînes de caractères
const resultat2 = calcul("3", "4");
console.log("Résultat avec des chaînes de caractères ('3', '4') : ", resultat2);

// Test avec un mélange (nombre + chaîne de caractères)
const resultat3 = calcul(3, "4");
console.log("Résultat avec un mélange (3, '4') : ", resultat3);
