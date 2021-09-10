// DOM elements
var beerListContainer = document.querySelector('#beerList')

// Function to display current beer list
function renderBeerDisplay(data) {
    fetch('https://server.digitalpour.com/DashboardServer/api/v3/MenuItems/556fbbe55e002c0d44d5bd22/1/Tap?apiKey=556fbc725e002c0d44d5bd3a', {
    
        cache: 'reload',
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            console.log(data);

            for (let i = 0; i < data.length; i++) {
                // Store response data from our fetch request in variables
                var beverageLogo = data[i].MenuItemProductDetail.Beverage.LogoImageUrl;
                var beverage = data[i].MenuItemProductDetail.Beverage.BeverageName;
                var beverageStyle = data[i].MenuItemProductDetail.Beverage.BeerStyle.StyleName;
                console.log(beverageLogo)
                console.log(beverage)
                console.log(beverageStyle)


                var col = document.createElement('div');
                var card = document.createElement('div');
                var cardBody = document.createElement('div');
                var cardTitle = document.createElement('h5');
                var beerIcon = document.createElement('img');
                var beerStyleEl = document.createElement('p');


                col.append(card);
                card.append(cardBody);
                cardBody.append(cardTitle, beerIcon, beerStyleEl);

                col.setAttribute('class', 'col-md-3');
                col.classList.add('beer-card');
                card.setAttribute('class', 'card text-black');
                cardBody.setAttribute('class', 'card-body');
                cardTitle.setAttribute('class', 'card-title');
                beerStyleEl.setAttribute('class', 'card-text');

                // Add content to elements
                cardTitle.textContent = `${beverage}`;
                beerIcon.setAttribute('src', beverageLogo);
                beerIcon.setAttribute('alt', beverageLogo);
                beerStyleEl.textContent = `${beverageStyle}`;


                beerListContainer.append(col);
            }

        });

}

renderBeerDisplay();