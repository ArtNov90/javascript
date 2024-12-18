// Fonction qui calcule a * b + a + b avec gestion des erreurs
function calcul(a, b) {
    // Vérification de la présence des deux paramètres
    if (a === undefined || b === undefined) {
        throw new Error("Erreur : Les deux paramètres doivent être fournis.");
    }

    // Vérification que les deux paramètres sont des nombres
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Erreur : Les deux paramètres doivent être des nombres.");
    }

    // Calcul
    return a * b + a + b;
}

// Test avec des nombres valides
try {
    const resultat1 = calcul(3, 4);
    console.log("Résultat avec des nombres (3, 4) : ", resultat1); // 19
} catch (error) {
    console.error(error.message);
}

// Test avec des chaînes de caractères
try {
    const resultat2 = calcul("3", "4");
    console.log("Résultat avec des chaînes de caractères ('3', '4') : ", resultat2);
} catch (error) {
    console.error(error.message); // Affiche l'erreur
}

// Test avec un mélange (nombre + chaîne de caractères)
try {
    const resultat3 = calcul(3, "4");
    console.log("Résultat avec un mélange (3, '4') : ", resultat3);
} catch (error) {
    console.error(error.message); // Affiche l'erreur
}

// Test avec un paramètre manquant
try {
    const resultat4 = calcul(3);
    console.log("Résultat avec un seul paramètre (3) : ", resultat4);
} catch (error) {
    console.error(error.message); // Affiche l'erreur
}
