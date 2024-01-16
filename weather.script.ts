function getWeatherDetails(latitude: number, longitude: number) {
    const weatherAPIUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,daily,hourly&units=metric&appid=33fac16fc253265b6cab143ad7ddd351` 
      fetch(weatherAPIUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok.');
        }
        return res.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error('Problem', error));
  }

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