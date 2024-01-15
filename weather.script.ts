const apiKey = "33fac16fc253265b6cab143ad7ddd351";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=singapore";

async function getWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector
}


getWeather();
