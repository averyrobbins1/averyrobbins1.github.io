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

        // soda springs

        const ss_events = towns[2].events
       
        let ss1 = document.createElement('li')
        let ss2 = document.createElement('li')
        let ss3 = document.createElement('li')

        ss1.innerHTML = ss_events[0]
        ss2.innerHTML = ss_events[1]
        ss3.innerHTML = ss_events[2]

        document.querySelector('.ss-events-list').appendChild(ss1)
        document.querySelector('.ss-events-list').appendChild(ss2)
        document.querySelector('.ss-events-list').appendChild(ss3)
    });