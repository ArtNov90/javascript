// Fonction pour créer un gestionnaire de tâches
function creerGestionnaire() {
    const taches = []; // Tableau pour stocker les tâches

    return {
        // Ajouter une nouvelle tâche avec une description
        ajouterTache(description) {
            taches.push({ description, terminee: false });
            console.log(`Tâche ajoutée : "${description}"`);
        },

        // Marquer une tâche comme terminée en fonction de son index
        terminerTache(index) {
            if (index >= 0 && index < taches.length) {
                taches[index].terminee = true;
                console.log(`Tâche "${taches[index].description}" marquée comme terminée.`);
            } else {
                console.log("Erreur : Index de tâche invalide.");
            }
        },

        // Afficher toutes les tâches avec leur état
        afficherTaches() {
            if (taches.length === 0) {
                console.log("Aucune tâche à afficher.");
            } else {
                console.log("Liste des tâches :");
                taches.forEach((tache, index) => {
                    const etat = tache.terminee ? "Terminée" : "Non terminée";
                    console.log(`${index}. [${etat}] ${tache.description}`);
                });
            }
        },
    };
}

// Tests du gestionnaire de tâches

// Création d'un gestionnaire
const gestionnaire = creerGestionnaire();

// Ajout de tâches
gestionnaire.ajouterTache("Acheter du lait");
gestionnaire.ajouterTache("Faire du sport");
gestionnaire.ajouterTache("Réviser le JavaScript");

// Affichage des tâches
gestionnaire.afficherTaches();

// Terminer une tâche
gestionnaire.terminerTache(1);

// Affichage des tâches après modification
gestionnaire.afficherTaches();

// Tentative de terminer une tâche avec un index invalide
gestionnaire.terminerTache(10);
