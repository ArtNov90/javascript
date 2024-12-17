// Déclaration d'une variable contenant des données JSON sur la société Google
let googleInfo = {
    "nom": "Google",
    "siege_social": "Googleplex, Mountain View, California, United States",
    "fondateurs": [
        {
            "nom": "Larry Page",
            "date_naissance": "26/03/1973",
            "lieu_naissance": "East Lansing, Michigan"
        },
        {
            "nom": "Sergey Brin",
            "date_naissance": "21/08/1973",
            "lieu_naissance": "Moscou, Union Soviétique"
        }
    ],
    "chiffre_affaires": {
        "2008": 16.49,
        "2012": 37.97,
        "2016": 89.46,
        "2018": 136.2
    }
};

// Affichage des fondateurs de la société
console.log("Fondateurs de " + googleInfo.nom + ":");
for (let i = 0; i < googleInfo.fondateurs.length; i++) {
    let fondateur = googleInfo.fondateurs[i];
    console.log(fondateur.nom + ", né le " + fondateur.date_naissance + " à " + fondateur.lieu_naissance);
}

// Affichage des chiffres d'affaires
console.log("\nChiffre d'affaires de " + googleInfo.nom + ":");
for (let annee in googleInfo.chiffre_affaires) {
    console.log(annee + ": " + googleInfo.chiffre_affaires[annee] + " milliards de $");
}
