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

        // fish haven

        const fh_events = towns[0].events
            
        let fh1 = document.createElement('li')
        let fh2 = document.createElement('li')
        let fh3 = document.createElement('li')
        let fh4 = document.createElement('li')

        fh1.innerHTML = fh_events[0]
        fh2.innerHTML = fh_events[1]
        fh3.innerHTML = fh_events[2]
        fh4.innerHTML = fh_events[3]

        document.querySelector('.fh-events-list').appendChild(fh1)
        document.querySelector('.fh-events-list').appendChild(fh2)
        document.querySelector('.fh-events-list').appendChild(fh3)
        document.querySelector('.fh-events-list').appendChild(fh4)

    });