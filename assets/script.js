var searchBtnEl = document.querySelector("#landingSearchBtn");
var resultEl = document.querySelector("#resultCard");
const genreDropdown = document.getElementById('genre-input');
const typeDropdown = document.getElementById('type-input');
const streamDropdown = document.getElementById('streaming-input');

document.addEventListener('DOMContentLoaded', function() {

var submitBtn = $('.btn');

submitBtn.on("click", function(event) {
  event.preventDefault();
  window.location.href ="./assets/searchresults.html";
  const genreSelected = genreDropdown.value;
  const typeSelected = typeDropdown.value;
  const streamSelected = streamDropdown.value;


var savedInputs = {
  genre: genreSelected,
  type: typeSelected,
  stream: streamSelected
}


var savedInputsStringify = JSON.stringify(savedInputs);

localStorage.setItem("user input", savedInputsStringify);


});
});

// Movie Genres api
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjZmYWI0NjJhZGIwZGQxNDI5ZjcwYzM2ZmYxMGI4MyIsInN1YiI6IjY1MmFhYmQyMDI0ZWM4MDBjNzczYmE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w5PtLznDOdnkbBAapJaKnyfOHF-NEh8Vr4FvuiY9FBo'
    }
  };

  fetch_result = fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(data => {
   




const movieSelect = document.getElementById("genre-input");
const genreList = data.genres;


for (let i = 0; i < genreList.length; i++) {
    const option = document.createElement("option");

    option.id = `${genreList[i]}`;
    option.className = "genreOption";
    option.value = genreList[i].id;
    option.text = genreList[i].name;
    movieSelect.appendChild(option);
};

//TV Show Genre data Api
    fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

});

//Streaming Services api
fetch('https://api.themoviedb.org/3/watch/providers/movie?language=en-US&watch_region=US', options)
  .then(response => response.json())
  .then(data => {
    
    const streamingSelect = document.getElementById("streaming-input");
    const streamingList = data.results;

    //Renders Streaming List Options
    for (let i = 0; i < streamingList.length; i++) {
      const streamSelect = document.createElement("option");
      streamSelect.value = streamingList[i].provider_name;
      streamSelect.text = streamingList[i].provider_name;
      streamingSelect.appendChild(streamSelect);
    }
});

  //Movies Details api
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(data => console.log(data));
 