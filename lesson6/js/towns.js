const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing

        let towns = jsonObject['towns'];
        const my_towns = ["Preston", "Fish Haven", "Soda Springs"]

        in_my_towns = (my_town) => my_towns.includes(my_town);
        towns = towns.filter(my_town => in_my_towns(my_town.name))

        for (let i = 0; i < towns.length; i++ ) {

            let card = document.createElement('section');
            let article = document.createElement('article');
            let name = document.createElement('h2');
            let motto = document.createElement('h4');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let image = document.createElement('img');

            card.id = towns[i].photo;
            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
            averageRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

            article.appendChild(name);
            article.appendChild(motto);
            article.appendChild(yearFounded);
            article.appendChild(currentPopulation);
            article.appendChild(averageRainfall);

            card.appendChild(article)
            
            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name)
            card.appendChild(image)
            
            document.querySelector('div.cards').appendChild(card);
            }
      });
