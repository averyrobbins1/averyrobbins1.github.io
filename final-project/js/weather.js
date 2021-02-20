const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=3d90e22f8c2f6bfcb24ee1f9f8004f0d&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const desc = jsObject.weather[0].description;
    document.getElementById('description').textContent = desc;
    document.getElementById('temperature').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;

  });

const forecast_url = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=3d90e22f8c2f6bfcb24ee1f9f8004f0d&units=imperial";
fetch(forecast_url)
  .then((response) => response.json())
  .then((jsObject) => {


    console.log(jsObject)
    const forecasts = jsObject.list.filter((item) => item.dt_txt.includes('12:00:00'))
   
    document.querySelector('#day5-temp').innerHTML = forecasts[4].main.temp;
      
    const icon5 = 'https://openweathermap.org/img/w/' + forecasts[4].weather[0].icon + '.png'

    // document.querySelector('#icon5').setAttribute('src', icon5)

    const date5 = new Date(forecasts[4].dt_txt)

    document.querySelector('#day5').innerHTML = date5.toDateString().split(' ')[0]
  })