const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
      
        let towns = jsonObject['towns'];
        const my_towns = ["Preston", "Fish Haven", "Soda Springs"]

        in_my_towns = (my_town) => my_towns.includes(my_town);
        towns = towns.filter(my_town => in_my_towns(my_town.name))
        console.log(towns)

        // preston

        const preston_events = towns[1].events
       
        let pe1 = document.createElement('li')
        let pe2 = document.createElement('li')
        let pe3 = document.createElement('li')

        pe1.innerHTML = preston_events[0]
        pe2.innerHTML = preston_events[1]
        pe3.innerHTML = preston_events[2]

        document.querySelector('.preston-events-list').appendChild(pe1)
        document.querySelector('.preston-events-list').appendChild(pe2)
        document.querySelector('.preston-events-list').appendChild(pe3)

    });