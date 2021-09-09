// DOM elements
var beerListContainer = document.querySelector('#beerList')

// Function to display current beer list
function renderBeerDisplay(data) {
    fetch('https://server.digitalpour.com/DashboardServer/api/v3/MenuItems/556fbbe55e002c0d44d5bd22/1/Tap?apiKey=556fbc725e002c0d44d5bd3a', {
        // The browser fetches the resource from the remote server without first looking in the cache.
        // The browser will then update the cache with the downloaded resource.
        cache: 'reload',
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // Store response data from our fetch request in variables
            var beverageLogo = data[0].MenuItemProductDetail.Beverage.LogoImageUrl;
            var beverage = data[0].MenuItemProductDetail.Beverage.BeverageName;
            var beverageStyle = data[0].MenuItemProductDetail.Beverage.BeerStyle.StyleName;
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
          
            col.setAttribute('class', 'col-md');
            col.classList.add('beer-card');
            card.setAttribute('class', 'card bg-primary h-100 text-white');
            cardBody.setAttribute('class', 'card-body p-2');
            cardTitle.setAttribute('class', 'card-title');
            beerStyleEl.setAttribute('class', 'card-text');
          
            // Add content to elements
            cardTitle.textContent = `${beverage}`;
            beerIcon.setAttribute('src', beverageLogo);
            beerIcon.setAttribute('alt', beverageLogo);
            beerStyleEl.textContent = `${beverageStyle}`;
       
          
            beerListContainer.append(col);
        });

}

renderBeerDisplay();