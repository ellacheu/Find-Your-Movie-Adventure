var resultEl = document.querySelector("#resultCard");

//MOVIE DETAIL API//
var options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjZmYWI0NjJhZGIwZGQxNDI5ZjcwYzM2ZmYxMGI4MyIsInN1YiI6IjY1MmFhYmQyMDI0ZWM4MDBjNzczYmE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w5PtLznDOdnkbBAapJaKnyfOHF-NEh8Vr4FvuiY9FBo'
  }
};

const storedCriteria = localStorage.getItem("user input");
if (storedCriteria) {

  var parsedCriteria = JSON.parse(storedCriteria);
  var genreChoice = parsedCriteria.genre;
  var typeChoice = parsedCriteria.type;

  if (genreChoice === "" && typeChoice === "Movies") {
    var genreSearch = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  } else if (typeChoice === "Movies") {
    var genreSearch = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc' + `&with_genres=${genreChoice}`;
  } else if (genreChoice === "" && typeChoice === "Shows") {
    var genreSearch = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=US';
  } else if (typeChoice === "Shows") {
    var genreSearch = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=US' + `&with_genres=${genreChoice}`;
  }
}
fetch(genreSearch, options)
  .then(response => response.json())
  .then((data) => {
    movieDetailResult = data
    console.log(data);


    //Display Movie Results//
    for (i = 0; i < movieDetailResult.results.length; i++) {
      var resultCard = document.createElement("div");
      var titleId = data.results[i].id;
      resultCard.className = "card resultItem";
      resultCard.id = `result-${i}`;
      resultEl.appendChild(resultCard);

      var posterData = "https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path;
      var posterImage = document.createElement("img")
      posterImage.src = posterData;
      posterImage.className = "poster";
      resultCard.appendChild(posterImage);

      var titleSummaryContainer = document.createElement("div");
      titleSummaryContainer.className = "cardTextContainer";
      resultCard.appendChild(titleSummaryContainer)

      var titleContent = data.results[i].title;
      var tvTitleContent = data.results[i].name;
      var movieTitle = document.createElement("h5");
      var tvTitle = document.createElement("h6");
      movieTitle.value = titleContent;
      movieTitle.textContent = titleContent;
      tvTitle.value = tvTitleContent;
      tvTitle.textContent = tvTitleContent;
      titleSummaryContainer.appendChild(movieTitle);
      titleSummaryContainer.appendChild(tvTitle);

      var idContent = document.createElement('span')
      idContent.setAttribute("style", "display:none;")
      idContent.value = titleId;
      idContent.textContent = titleId;
      titleSummaryContainer.appendChild(idContent);


      var summaryContent = data.results[i].overview;
      var summary = document.createElement('p');
      summary.value = summaryContent;
      summary.textContent = summaryContent;
      titleSummaryContainer.appendChild(summary);

      var watchListBtn = document.createElement('button');
      titleSummaryContainer.appendChild(watchListBtn);
      watchListBtn.textContent = 'Save to Watch List';
      watchListBtn.addEventListener('click', watchListClickHandle)
    }

  });


function watchListClickHandle (event) {
  var parent = event.target.parentElement.parentElement
  var watchedMovies = JSON.parse(localStorage.getItem('watchSave'))

  // if show & movie, assign by Id instead
  var cardData = {
    image: parent.querySelector("img").src,
    title: parent.querySelector("h5").textContent,
    name: parent.querySelector("h6").textContent,
    summary: parent.querySelector("p").textContent,
    id: parent.querySelector('span').value
  }

  if (watchedMovies) {
    watchedMovies.push(cardData)
    localStorage.setItem("watchSave", JSON.stringify(watchedMovies));
  } else {
    watchedMovies = []
    watchedMovies.push(cardData)
    localStorage.setItem("watchSave", JSON.stringify(watchedMovies));
  }
}

