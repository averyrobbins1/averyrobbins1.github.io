// all the date things

let date = new Date()

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let today = days[date.getDay()]
let date_num = date.getDate()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let month = months[date.getMonth()]
let year = date.getFullYear()

let full_date = today.concat(", ", date_num, " ", month, " ", year)


document.getElementById('current-year').textContent = year
document.getElementById('today').innerHTML = full_date
