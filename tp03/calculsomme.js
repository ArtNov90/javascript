// Déclaration d'une variable contenant une valeur numérique entière
let num = 10; // Vous pouvez changer cette valeur pour tester d'autres cas

// Initialisation de la variable somme à 0
let somme = 0;

// Boucle pour calculer la somme de tous les nombres de 1 à num
for (let i = 1; i <= num; i++) {
    somme += i;  // Ajoute la valeur de i à somme à chaque itération
}

// Affichage du résultat
console.log("La somme des nombres de 1 à " + num + " est : " + somme);
