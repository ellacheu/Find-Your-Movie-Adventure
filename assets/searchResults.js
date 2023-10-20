var resultEl = document.querySelector("#resultCard");

//MOVIE DETAIL API//
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjZmYWI0NjJhZGIwZGQxNDI5ZjcwYzM2ZmYxMGI4MyIsInN1YiI6IjY1MmFhYmQyMDI0ZWM4MDBjNzczYmE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w5PtLznDOdnkbBAapJaKnyfOHF-NEh8Vr4FvuiY9FBo'
    }
};

const storedCriteria = localStorage.getItem("user input");
if (storedCriteria) {
  const parsedCriteria = JSON.parse(storedCriteria);
  console.log(parsedCriteria);

var genreChoice = parsedCriteria.genre;
var typeChoice = parsedCriteria.type;
console.log(genreChoice);

if (genreChoice === "" && typeChoice === "") {
  var genreSearch = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
} else {
  var genreSearch = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc' + `&with_genres=${genreChoice}`
}
}
fetch(genreSearch, options)
.then(response => response.json())
.then((data) =>  {
   movieDetailResult = data
   console.log(movieDetailResult);


    

//////////////////////

//Display Movie Results//
for(i = 0; i < movieDetailResult.results.length; i++){
console.log(movieDetailResult.results[i]);
    var resultCard = document.createElement("div");
    resultCard.className = "card resultItem";
    resultCard.id = `result-${i}`;
    resultEl.appendChild(resultCard);

    // var trailerBtn = document.createElement('button');
    // trailerBtn.textContent = 'Watch Trailer';
    // trailerBtn.appendChild(resultItem);
    
    var titleContent = data.results[i].title;
    var movieTitle = document.createElement("h5");
    movieTitle.value = titleContent;
    movieTitle.textContent = titleContent;
    resultCard.appendChild(movieTitle);

    console.log(titleContent);

    var summaryContent = data.results[i].overview;
    var summary = document.createElement('p');
    summary.value = summaryContent;
    summary.textContent = summaryContent;
    resultCard.appendChild(summary);
    
}

});

