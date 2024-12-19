function fetchPollutionData() {
    // Crée une nouvelle requête AJAX
    const xhr = new XMLHttpRequest();
    const url = "https://digicode.cleverapps.io/json/pays/pollution";

    // Configure la requête GET
    xhr.open("GET", url, true);

    // Définir le comportement en cas de réponse
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Analyse la réponse JSON
            const data = JSON.parse(xhr.responseText);
            displayPollutionData(data);
        }
    };

    // Envoie la requête
    xhr.send();
}

function displayPollutionData(data) {
    // Récupère le conteneur où afficher les données
    const container = document.getElementById("pollution-container");

    // Affiche les informations du polluant et de l'année
    const title = document.createElement("h2");
    title.textContent = `Polluant : ${data.polluant} (${data.unite}), Année : ${data.annee}`;
    container.appendChild(title);

    // Crée une table pour afficher les données
    const table = document.createElement("table");
    table.border = "1";

    // Ajouter un en-tête au tableau
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>Nom</th>
            <th>Valeur (${data.unite})</th>
            <th>Pourcentage (%)</th>
        </tr>
    `;
    table.appendChild(thead);

    // Ajouter le corps du tableau
    const tbody = document.createElement("tbody");
    data.pays.forEach(pays => {
        const row = document.createElement("tr");

        // Colonne Nom avec drapeau
        const nameCell = document.createElement("td");
        nameCell.innerHTML = `<img src="https://flagcdn.com/24x18/${pays.code}.png" alt="${pays.nom}" /> ${pays.nom}`;
        row.appendChild(nameCell);

        // Colonne Valeur
        const valueCell = document.createElement("td");
        valueCell.textContent = pays.valeur;
        row.appendChild(valueCell);

        // Colonne Pourcentage
        const percentageCell = document.createElement("td");
        percentageCell.textContent = `${pays.pourcentage} %`;
        row.appendChild(percentageCell);

        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Ajouter la table au conteneur
    container.appendChild(table);
}
