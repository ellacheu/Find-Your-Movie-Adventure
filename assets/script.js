var searchBtnEl = document.querySelector("#landingSearchBtn");

document.addEventListener('DOMContentLoaded', function() {

var form = $('#search-form');
var submitBtn = $('.btn');

submitBtn.on("click", function(event) {
    event.preventDefault();
window.location.href ="./searchresults.html";
getResults();


console.log(submitBtn);
});
});

// movie genres api
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjZmYWI0NjJhZGIwZGQxNDI5ZjcwYzM2ZmYxMGI4MyIsInN1YiI6IjY1MmFhYmQyMDI0ZWM4MDBjNzczYmE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w5PtLznDOdnkbBAapJaKnyfOHF-NEh8Vr4FvuiY9FBo'
    }
  };

  fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(data => {
         console.log(data)


const movieSelect = document.getElementById("genre-input");
const genreList = data.genres;
console.log(genreList);

for (let i = 0; i < genreList.length; i++) {
    const option = document.createElement("option");
    console.log(genreList[i].name);
    option.value = genreList[i].name;
    option.text = genreList[i].name;
    movieSelect.appendChild(option);
}
//   tv show genre data
    fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

})

// streaming services api
fetch('https://api.themoviedb.org/3/watch/providers/movie?language=en-US&watch_region=US', options)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    const streamingSelect = document.getElementById("streaming-input");
    const streamingList = data.results;

    for (let i = 0; i < streamingList.length; i++) {
      const streamSelect = document.createElement("option");
      console.log(streamingList[i].provider_name);
      streamSelect.value = streamingList[i].provider_name;
      streamSelect.text = streamingList[i].provider_name;
      streamingSelect.appendChild(streamSelect);
    }
  })
  // movies details api
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(data => 
    console.log(data))
    

// watchmode API Key: gUIUJapK8L1BerWWTsAOTkVgJtk5gNssyjxG7e75
// curl -i 'https://api.watchmode.com/v1/title/345534/details/?apiKey=YOUR_API_KEY&append_to_response=sources'

// const watchApi = 'https://api.watchmode.com/v1/title/345534/details/?apiKey=gUIUJapK8L1BerWWTsAOTkVgJtk5gNssyjxG7e75&append_to_response=sources';


// fetch(watchApi)
// .then(response => response.json())
// .then(data => console.log(data));

// const sourceApi = 'https://api.watchmode.com/v1/sources/?regions=US&types=sub&apiKey=gUIUJapK8L1BerWWTsAOTkVgJtk5gNssyjxG7e75'

// fetch(sourceApi)
//   .then (response => response.json());
//   .then(data => console.log(data));



// Movie Results

var getResults = function() {
  //Pull the movie and/or TV show results
  //Pull user parameters
  //Compare the parameters to the results
  //Display Results that match parameters
}
