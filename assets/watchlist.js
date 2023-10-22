var watchlistEl = document.querySelector(".watchlistResults");

// watchmode API Key: gUIUJapK8L1BerWWTsAOTkVgJtk5gNssyjxG7e75
// curl -i 'https://api.watchmode.com/v1/title/345534/details/?apiKey=YOUR_API_KEY&append_to_response=sources'

// const watchApi = 'https://api.watchmode.com/v1/title/345534/details/?apiKey=gUIUJapK8L1BerWWTsAOTkVgJtk5gNssyjxG7e75&append_to_response=sources';


// fetch(watchApi)
// .then(response => response.json())
// .then(data => console.log(data));

var watchedMovies = JSON.parse(localStorage.getItem('watchSave'))



for (let i=0; i < watchedMovies.length; i++) {
  var watchListCard = document.createElement('div');
  watchListCard.className = "card watchlistResults";
  watchListCard.innerHTML = `
  <h5>${watchedMovies[i].title || watchedMovies[i].name}</h5>
  <p>${watchedMovies[i].summary}</p>`;

  watchlistEl.appendChild(watchListCard);

  var watchNowBtn = document.createElement('button');
  watchNowBtn.textContent = 'Watch Now';
  watchNowBtn.addEventListener ('click', function() {
    console.log("ඞ")
  })


  watchListCard.appendChild(watchNowBtn);
}

