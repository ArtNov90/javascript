// Fonction qui met la première lettre en majuscule
function majusculePremiereLettre(chaine) {
    // Vérifier que le paramètre est bien une chaîne de caractères
    if (typeof chaine !== "string") {
        return "Erreur : le paramètre doit être une chaîne de caractères.";
    }

    // Vérifier que la chaîne n'est pas vide
    if (chaine.length === 0) {
        return "Erreur : la chaîne est vide.";
    }

    // Convertir la première lettre en majuscule et concaténer avec le reste
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

// Tests

// 1. Chaîne classique
const chaine1 = "bonjour";
console.log(majusculePremiereLettre(chaine1)); // "Bonjour"

// 2. Chaîne déjà en majuscule
const chaine2 = "Bonjour";
console.log(majusculePremiereLettre(chaine2)); // "Bonjour"

// 3. Chaîne vide
const chaine3 = "";
console.log(majusculePremiereLettre(chaine3)); // "Erreur : la chaîne est vide."

// 4. Paramètre non valide
const chaine4 = 12345;
console.log(majusculePremiereLettre(chaine4)); // "Erreur : le paramètre doit être une chaîne de caractères."
