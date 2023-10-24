var watchlistEl = document.querySelector(".watchlistResults");
var watchedMovies = JSON.parse(localStorage.getItem('watchSave'));

//watchmode API 3: VT6zUuxqPms7VHQFixS8tbs2T56o7c2r5kfENQrx
//watchmode API 4: 9K8HfK17GBx7i7DxDAIUs1E06dXTYdzVrzOomkLJ


for (let i=0; i < watchedMovies.length; i++) {

  if (watchedMovies[i].title.length > 0) {
    var watchApi = 'https://api.watchmode.com/v1/title/' + `movie-${watchedMovies[i].id}` + '/sources/?apiKey=VT6zUuxqPms7VHQFixS8tbs2T56o7c2r5kfENQrx&append_to_response=sources';
  
  } else {
    var watchApi = 'https://api.watchmode.com/v1/title/' + `tv-${watchedMovies[i].id}` + '/sources/?apiKey=VT6zUuxqPms7VHQFixS8tbs2T56o7c2r5kfENQrx&append_to_response=sources';
  }
  

  fetch(watchApi)
  .then(response => response.json())
  .then(data => {
    
    watchSource = data;

    var watchListCard = document.createElement('div');
    watchListCard.className = "card resultItem2";
    watchListCard.innerHTML = `
    <img class="poster" src=${watchedMovies[i].image}>
    <div class=cardTextContainer2>
    <h5>${watchedMovies[i].title || watchedMovies[i].name}</h5>
    <p>${watchedMovies[i].summary}</p>
    </div>`;
  
    watchlistEl.appendChild(watchListCard);
  
    var watchNowBtn = document.createElement('button');
    watchNowBtn.textContent = 'Watch Now';
    watchNowBtn.addEventListener ('click', function() {
      event.preventDefault();
      
      if (data[i].web_url) {
        window.location.href = (data[i].web_url)

      }
   
    })
  
    
    watchListCard.appendChild(watchNowBtn);
  })
    
}

