const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    // Pushing the data into the array with ES6 spreads
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // Creating a new regular expression which we can use
        // to match the cities in the array
        // 'gi' stands for:
        // 'g' is for global, ik searches the entire array
        // 'i' is for case insensitive
        const regex = new RegExp(wordToMatch, 'gi');

        return place.city.match(regex) || place.state.match(regex);
    });
};

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function displayMatches() {
    const matchesArray = findMatches(this.value, cities);
    const html = matchesArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);

        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `
    }).join(''); // Turning the array into a string
    suggestions.innerHTML = html;
};

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);