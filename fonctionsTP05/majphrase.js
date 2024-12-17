// Fonction pour mettre la première lettre en majuscule
function majusculePremiereLettre(chaine) {
    if (typeof chaine !== "string") {
        return "Erreur : le paramètre doit être une chaîne de caractères.";
    }
    if (chaine.length === 0) {
        return "Erreur : la chaîne est vide.";
    }
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

// Fonction pour mettre en majuscule la première lettre de chaque mot
function majusculePhrase(phrase) {
    if (typeof phrase !== "string") {
        return "Erreur : le paramètre doit être une chaîne de caractères.";
    }
    if (phrase.trim().length === 0) {
        return "Erreur : la chaîne est vide ou contient uniquement des espaces.";
    }

    // Diviser la phrase en mots et appliquer majusculePremiereLettre à chaque mot
    const mots = phrase.split(" ");
    const motsMaj = mots.map(mot => majusculePremiereLettre(mot));

    // Rejoindre les mots pour former la phrase finale
    return motsMaj.join(" ");
}

// Tests

// 1. Chaîne classique
const phrase1 = "bonjour tout le monde";
console.log(majusculePhrase(phrase1)); // "Bonjour Tout Le Monde"

// 2. Phrase déjà formatée
const phrase2 = "Bonjour Tout Le Monde";
console.log(majusculePhrase(phrase2)); // "Bonjour Tout Le Monde"

// 3. Chaîne vide
const phrase3 = "";
console.log(majusculePhrase(phrase3)); // "Erreur : la chaîne est vide ou contient uniquement des espaces."

// 4. Phrase avec des espaces multiples
const phrase4 = "  bonjour   tout   le monde  ";
console.log(majusculePhrase(phrase4)); // "Bonjour Tout Le Monde"

// 5. Paramètre non valide
const phrase5 = 12345;
console.log(majusculePhrase(phrase5)); // "Erreur : le paramètre doit être une chaîne de caractères."
