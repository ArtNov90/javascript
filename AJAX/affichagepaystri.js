let countriesData = []; // Stocker les données récupérées
let currentSortOrder = null; // Ordre actuel du tri (null, 'asc', 'desc')

function fetchCountryData() {
    const xhr = new XMLHttpRequest();
    const url = "https://restcountries.com/v2/all";

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            countriesData = JSON.parse(xhr.responseText);
            renderTable();
        }
    };

    xhr.send();
}

function renderTable() {
    const container = document.getElementById("country-container");

    // Nettoyer le conteneur pour éviter les doublons
    container.innerHTML = "";

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // En-tête du tableau
    thead.innerHTML = `
        <tr>
            <th>Nom</th>
            <th>Capitale</th>
            <th id="population-header">Population 
                <i class="fas ${getPopulationIcon()}"></i>
            </th>
            <th>Région</th>
        </tr>
    `;
    table.appendChild(thead);

    // Corps du tableau
    countriesData.forEach(country => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = country.name || "N/A";
        row.appendChild(nameCell);

        const capitalCell = document.createElement("td");
        capitalCell.textContent = country.capital || "N/A";
        row.appendChild(capitalCell);

        const populationCell = document.createElement("td");
        populationCell.textContent = country.population.toLocaleString("en-US") || "N/A";
        row.appendChild(populationCell);

        const regionCell = document.createElement("td");
        regionCell.textContent = country.region || "N/A";
        row.appendChild(regionCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    container.appendChild(table);

    // Ajouter l'événement de clic pour trier la colonne Population
    document.getElementById("population-header").addEventListener("click", togglePopulationSort);
}

function togglePopulationSort() {
    if (currentSortOrder === "asc") {
        currentSortOrder = "desc";
        countriesData.sort((a, b) => b.population - a.population);
    } else {
        currentSortOrder = "asc";
        countriesData.sort((a, b) => a.population - b.population);
    }

    renderTable();
}

function getPopulationIcon() {
    if (currentSortOrder === "asc") {
        return "fa-arrow-up"; // Icône pour tri ascendant
    } else if (currentSortOrder === "desc") {
        return "fa-arrow-down"; // Icône pour tri descendant
    } else {
        return "fa-sort"; // Icône pour colonne non triée
    }
}
