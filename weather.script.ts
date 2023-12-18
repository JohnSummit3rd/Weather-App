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

function getGeoCoords(placeName: string) {
  const geoAPIUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(placeName)}&key=ddfef92911994579b46dfad8a5946f6d`
    fetch(geoAPIUrl)
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok.');
      }
      return res.json();
    })
    .then(data => {
      const firstResult = data.results[0];
      const { geometry } = firstResult;
      const { lat, lng } = geometry;

      console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    })
    .catch(error => console.error('Problem with the request:', error));
}
  
  const latitude = 39.9
  const longitude = 116.4

  const placeName = "Berlin"
  console.log(getWeatherDetails(latitude, longitude));
  console.log(getGeoCoords(placeName));