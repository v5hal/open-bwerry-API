// Define the initial API endpoint
const initialApiUrl = "https://api.openbrewerydb.org/breweries?per_page=51"; // Adjust the per_page parameter as needed

// Function to fetch data for all breweries and display it on the webpage
function displayAllBreweryData() {
    fetch(initialApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            // Display brewery data on the webpage
            data.forEach(brewery => {
                displayBreweryCard(brewery);
            });
        })
        .catch(error => console.error(error));
}

// Function to display a brewery card on the webpage
function displayBreweryCard(brewery) {
    // Create a div element for the brewery card
    const breweryCard = document.createElement('div');
    breweryCard.classList.add('brewery-card');

    // Populate the brewery card with data
    breweryCard.innerHTML = `
        <h3>${brewery.name}</h3>
        <p>Type: ${brewery.brewery_type}</p>
        <p>Address: ${brewery.street}, ${brewery.city}, ${brewery.state} ${brewery.postal_code}</p>
        <p>Phone: ${brewery.phone}</p>
        <p>Website: <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
    `;

    // Append the brewery card to the container on the webpage
    document.getElementById('brewery-container').appendChild(breweryCard);
}

// Call the function to fetch data for all breweries and display it on the webpage
displayAllBreweryData();
