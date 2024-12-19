function fetchCountryData() {
    // Crée une nouvelle requête AJAX
    const xhr = new XMLHttpRequest();
    const url = "https://restcountries.com/v2/all";

    // Configure la requête GET
    xhr.open("GET", url, true);

    // Définir le comportement en cas de réponse
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Analyse la réponse JSON
            const data = JSON.parse(xhr.responseText);
            displayCountryData(data);
        }
    };

    // Envoie la requête
    xhr.send();
}

function displayCountryData(data) {
    // Récupère le conteneur où afficher les données
    const container = document.getElementById("country-container");

    // Crée une table pour afficher les données
    const table = document.createElement("table");
    table.border = "1";

    // Ajouter un en-tête au tableau
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>Nom</th>
            <th>Capitale</th>
            <th>Population</th>
            <th>Région</th>
        </tr>
    `;
    table.appendChild(thead);

    // Ajouter le corps du tableau
    const tbody = document.createElement("tbody");
    data.forEach(country => {
        const row = document.createElement("tr");

        // Nom du pays
        const nameCell = document.createElement("td");
        nameCell.textContent = country.name || "N/A";
        row.appendChild(nameCell);

        // Capitale
        const capitalCell = document.createElement("td");
        capitalCell.textContent = country.capital || "N/A";
        row.appendChild(capitalCell);

        // Population
        const populationCell = document.createElement("td");
        populationCell.textContent = country.population.toLocaleString("en-US") || "N/A";
        row.appendChild(populationCell);

        // Région
        const regionCell = document.createElement("td");
        regionCell.textContent = country.region || "N/A";
        row.appendChild(regionCell);

        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Ajouter la table au conteneur
    container.appendChild(table);
}
