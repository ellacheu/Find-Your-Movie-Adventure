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


    //Display Movie Results//
    for (i = 0; i < movieDetailResult.results.length; i++) {
      var resultCard = document.createElement("div");
      var idContent = data.results[i].id;
      resultCard.className = "card resultItem";
      resultCard.id = `result-${i}`;
      resultEl.appendChild(resultCard);

<<<<<<< HEAD
//////////////////////    


=======
      var titleContent = data.results[i].title;
      var tvTitleContent = data.results[i].name;
      var movieTitle = document.createElement("h5");
      var tvTitle = document.createElement("h6");
      movieTitle.value = titleContent;
      movieTitle.textContent = titleContent;
      tvTitle.value = tvTitleContent;
      tvTitle.textContent = tvTitleContent;
      resultCard.appendChild(movieTitle);
      resultCard.appendChild(tvTitle);
>>>>>>> a8be06ddecf26daf2bfab6f7675cc91cc5589e73


<<<<<<< HEAD
    var titleContent = data.results[i].title;
    var tvTitleContent = data.results[i].name;
    var movieTitle = document.createElement("h5");
    var tvTitle = document.createElement("h5");
    movieTitle.value = titleContent;
    movieTitle.textContent = titleContent;
    tvTitle.value = tvTitleContent;
    tvTitle.textContent = tvTitleContent;
    resultCard.appendChild(movieTitle);
    resultCard.appendChild(tvTitle);
=======
      var summaryContent = data.results[i].overview;
      var summary = document.createElement('p');
      summary.value = summaryContent;
      summary.textContent = summaryContent;
      resultCard.appendChild(summary);
>>>>>>> a8be06ddecf26daf2bfab6f7675cc91cc5589e73

      var watchListBtn = document.createElement('button');
      resultCard.appendChild(watchListBtn);
      watchListBtn.textContent = 'Save to Watch List';
      watchListBtn.addEventListener('click', watchListClickHandle)
    }

<<<<<<< HEAD
    var summaryContent = data.results[i].overview;
    var summary = document.createElement('p');
    summary.value = summaryContent;
    summary.textContent = summaryContent;
    resultCard.appendChild(summary);

    var trailerBtn = document.createElement('button');
    trailerBtn.textContent = 'Watch Trailer';
    // trailerBtn.addEventListner ('click', function(){
    //   console.log(trailerBtn)
    // })
    resultCard.appendChild(trailerBtn);

    var watchListBtn = document.createElement ('button');
    watchListBtn.textContent = 'Save to Watch List';
    watchListBtn.addEventListener ('click', function() {
      var cardData = {
        title: titleContent, 
        summary: summaryContent,
      }
      console.log(cardData);    
      var cardDataString = JSON.stringify(cardData);
      localStorage.setItem("watchSave", cardDataString);

    })
    resultCard.appendChild(watchListBtn);
    
}

});

// watchmode API Key: gUIUJapK8L1BerWWTsAOTkVgJtk5gNssyjxG7e75
// curl -i 'https://api.watchmode.com/v1/title/345534/details/?apiKey=YOUR_API_KEY&append_to_response=sources'

// const watchApi = 'https://api.watchmode.com/v1/title/345534/details/?apiKey=gUIUJapK8L1BerWWTsAOTkVgJtk5gNssyjxG7e75&append_to_response=sources';


// fetch(watchApi)
// .then(response => response.json())
// .then(data => console.log(data));


=======
  });


function watchListClickHandle (event) {
  var parent = event.target.parentElement
  var watchedMovies = JSON.parse(localStorage.getItem('watchSave'))

  // if show & movie, assign by Id instead
  var cardData = {
    title: parent.querySelector("h5").textContent,
    name: parent.querySelector("h6").textContent,
    summary: parent.querySelector("p").textContent
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

>>>>>>> a8be06ddecf26daf2bfab6f7675cc91cc5589e73
