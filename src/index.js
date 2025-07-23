function searchCity(city) {
let apiKey = "4b08f845751300d9odtfbffbbf0216ac";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
console.log(apiUrl);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);