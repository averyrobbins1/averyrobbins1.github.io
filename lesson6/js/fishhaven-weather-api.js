const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=3d90e22f8c2f6bfcb24ee1f9f8004f0d&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    const desc = jsObject.weather[0].description;
    document.getElementById('description').textContent = desc;
    document.getElementById('temperature').textContent = jsObject.main.temp;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;
    document.getElementById('humidity').textContent = jsObject.main.humidity;

    let t = document.querySelector('#temperature').innerHTML;
    let s = document.querySelector('#wind-speed').innerHTML;

    let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    f = Math.round(f);

    if (t > 50 ) {
      document.querySelector('#wind-chill').innerHTML = "N/A"
    } else if (s <= 3) {
        document.querySelector('#wind-chill').innerHTML = "N/A"
    } else {
        document.querySelector('#wind-chill').innerHTML = f
    }

  });

const forecast_url = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=3d90e22f8c2f6bfcb24ee1f9f8004f0d&units=imperial"
fetch(forecast_url)
  .then((response) => response.json())
  .then((jsObject) => {

    const forecasts = jsObject.list.filter((item) => item.dt_txt.includes('18:00:00'))
   
    document.querySelector('#day1-temp').innerHTML = forecasts[0].main.temp;
    document.querySelector('#day2-temp').innerHTML = forecasts[1].main.temp;
    document.querySelector('#day3-temp').innerHTML = forecasts[2].main.temp;
    document.querySelector('#day4-temp').innerHTML = forecasts[3].main.temp;
    document.querySelector('#day5-temp').innerHTML = forecasts[4].main.temp;
      
    const icon1 = 'https://openweathermap.org/img/w/' + forecasts[0].weather[0].icon + '.png'
    const icon2 = 'https://openweathermap.org/img/w/' + forecasts[1].weather[0].icon + '.png'
    const icon3 = 'https://openweathermap.org/img/w/' + forecasts[2].weather[0].icon + '.png'
    const icon4 = 'https://openweathermap.org/img/w/' + forecasts[3].weather[0].icon + '.png'
    const icon5 = 'https://openweathermap.org/img/w/' + forecasts[4].weather[0].icon + '.png'

    document.querySelector('#icon1').setAttribute('src', icon1)
    document.querySelector('#icon2').setAttribute('src', icon2)
    document.querySelector('#icon3').setAttribute('src', icon3)
    document.querySelector('#icon4').setAttribute('src', icon4)
    document.querySelector('#icon5').setAttribute('src', icon5)

    const date1 = new Date(forecasts[0].dt_txt)
    const date2 = new Date(forecasts[1].dt_txt)
    const date3 = new Date(forecasts[2].dt_txt)
    const date4 = new Date(forecasts[3].dt_txt)
    const date5 = new Date(forecasts[4].dt_txt)

    document.querySelector('#day1').innerHTML = date1.toDateString().split(' ')[0]
    document.querySelector('#day2').innerHTML = date2.toDateString().split(' ')[0]
    document.querySelector('#day3').innerHTML = date3.toDateString().split(' ')[0]
    document.querySelector('#day4').innerHTML = date4.toDateString().split(' ')[0]
    document.querySelector('#day5').innerHTML = date5.toDateString().split(' ')[0]
  })



  