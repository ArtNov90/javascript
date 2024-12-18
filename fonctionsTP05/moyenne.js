function calculerMoyenne(arr) {
    // Vérification si le paramètre est bien un tableau
    if (!Array.isArray(arr)) {
        throw new TypeError("Le paramètre doit être un tableau.");
    }
    
    // Vérification si tous les éléments du tableau sont des nombres
    for (let element of arr) {
        if (typeof element !== "number") {
            throw new TypeError("Tous les éléments du tableau doivent être des nombres.");
        }
    }

    // Calcul de la moyenne
    const somme = arr.reduce((acc, val) => acc + val, 0);
    return somme / arr.length;
}

// Différents appels pour tester les cas
try {
    console.log("Cas 1 : Tableau valide [10, 20, 30] =>", calculerMoyenne([10, 20, 30]));
} catch (error) {
    console.error("Erreur dans le cas 1 :", error.message);
}

try {
    console.log("Cas 2 : Tableau mixte [10, '20', 30] =>", calculerMoyenne([10, "20", 30]));
} catch (error) {
    console.error("Erreur dans le cas 2 :", error.message);
}

try {
    console.log("Cas 3 : Paramètre non-tableau =>", calculerMoyenne("pas un tableau"));
} catch (error) {
    console.error("Erreur dans le cas 3 :", error.message);
}
