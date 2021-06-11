const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function findMatches(word, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(word, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

const suggesttions = document.querySelector(".suggestions");

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const matchWord = this.value;
      const regex = new RegExp(matchWord, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${matchWord}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${matchWord}</span>`
      );
      const population = place.population;
      return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(population)}</span>
        </li>
      `;
    })
    .join("");

  suggesttions.innerHTML = html;
}

const searchInput = document.querySelector(".search");

searchInput.addEventListener("keyup", displayMatches);
