// toggle the menu (hamburger menu)

const hambutton = document.querySelector('.ham')
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false)

// add the format date to the footer

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

// toggle the promotional banner on Fridays
// note: I'm using some of the date stuff from above

let friday = "Friday"

console.log(today)

if (today === friday) {
    document.querySelector('.hidden').style.display = "block"
} else {
    document.querySelector('.hidden').style.display = "none"
}

// adjust storm severity rating

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}