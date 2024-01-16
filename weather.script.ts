const apiKey = "33fac16fc253265b6cab143ad7ddd351";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=singapore";

<<<<<<< HEAD
/*function getGeoCoords(locationName: string) {
  const geoAPIUrl = `https://maps.googleapis.com/maps/api/geocode/json?address:${location}&key=AIzaSyCxhP9WdIAb430dBIKjGAaLcJYs6DOZ4VI`;
    fetch(geoAPIUrl)
    .then(res => {
      if(!res.ok) {
        throw new Error('Network response was not ok.');
      }
      return res.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Problem', error));
}*/
  
  const latitude = 39.9
  const longitude = 116.4

  const locationName = "Shanghai";
  console.log(getWeatherDetails(latitude, longitude));
  //console.log(getGeoCoords(locationName));
=======
async function getWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector
}


getWeather();
>>>>>>> 9e3062ac21649b1af36033d07a31219c9871dbf9
