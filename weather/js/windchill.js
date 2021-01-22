// calculate wind chill form temperature and wind speed

let t = document.querySelector('#temperature').innerHTML
let s = document.querySelector('#wind-speed').innerHTML

let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16))
f = Math.round(f)

if (t > 50 ) {
    document.querySelector('#wind-chill').innerHTML = "N/A"
} else if (s <= 3) {
    document.querySelector('#wind-chill').innerHTML = "N/A"
} else {
    document.querySelector('#wind-chill').innerHTML = f
}