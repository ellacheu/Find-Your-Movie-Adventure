var watchlistEl = document.querySelector(".watchlistResults");
var watchedMovies = JSON.parse(localStorage.getItem('watchSave'));
var modal = document.getElementById("errorModal");
// var close = document.querySelector(".close");
console.log(watchedMovies)
// watchmode API Key: gUIUJapK8L1BerWWTsAOTkVgJtk5gNssyjxG7e75

//watchmode API 2: jJzKRNygZlziCV5DW4foPZDO7A0FExdqV2CAW0AN


for (let i=0; i < watchedMovies.length; i++) {
  console.log(watchedMovies[i].name)
  if (watchedMovies[i].hasOwnProperty("title")) {
    var watchApi = 'https://api.watchmode.com/v1/title/' + `movie-${watchedMovies[i].id}` + '/sources/?apiKey=jJzKRNygZlziCV5DW4foPZDO7A0FExdqV2CAW0AN&append_to_response=sources';
  
  } else if (watchedMovies[i].hasOwnProperty("name")) {
    var watchApi = 'https://api.watchmode.com/v1/title/' + `tv-${watchedMovies[i].id}` + '/sources/?apiKey=jJzKRNygZlziCV5DW4foPZDO7A0FExdqV2CAW0AN&append_to_response=sources';
  } else {

  }
  // const watchApi = 'https://api.watchmode.com/v1/title/345534/sources/?apiKey=gUIUJapK8L1BerWWTsAOTkVgJtk5gNssyjxG7e75&append_to_response=sources';

  fetch(watchApi)
  .then(response => response.json())
  .then(data => {
    
    watchSource = data;
    console.log(data)
    var watchListCard = document.createElement('div');
    watchListCard.className = "card watchlistResults";
    watchListCard.innerHTML = `
    <h5>${watchedMovies[i].title || watchedMovies[i].name}</h5>
    <p>${watchedMovies[i].summary}</p>`;
  
    watchlistEl.appendChild(watchListCard);
  
    var watchNowBtn = document.createElement('button');
    watchNowBtn.textContent = 'Watch Now';
    watchNowBtn.addEventListener ('click', function() {
      event.preventDefault();
      
      if (data[i].web_url) {
        window.location.href = (data[i].web_url)

      } else {
        modal.style.display = "block";

      }
   
    })
  
    
    watchListCard.appendChild(watchNowBtn);
  })
    
}

// close.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event){
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
