document.addEventListener('DOMContentLoaded', function() {

var form = $('#search-form');
var submitBtn = $('.btn');

submitBtn.on("click", function(event) {
    event.preventDefault();
window.location.href ="./searchresults.html";


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
    // .catch(err => console.error(err))
    // .then((data) => {

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
//   tv show data
    fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

})

// watchmode API Key: gUIUJapK8L1BerWWTsAOTkVgJtk5gNssyjxG7e75
// curl -i 'https://api.watchmode.com/v1/title/345534/details/?apiKey=YOUR_API_KEY&append_to_response=sources'

const watchApi = 'https://api.watchmode.com/v1/title/345534/details/?apiKey=gUIUJapK8L1BerWWTsAOTkVgJtk5gNssyjxG7e75&append_to_response=sources';

fetch(watchApi)
.then(response => response.json())
.then(data => console.log(data))

