var watchlistEl = document.querySelector(".watchlistResults");

//MOVIE DETAIL API//
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjZmYWI0NjJhZGIwZGQxNDI5ZjcwYzM2ZmYxMGI4MyIsInN1YiI6IjY1MmFhYmQyMDI0ZWM4MDBjNzczYmE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w5PtLznDOdnkbBAapJaKnyfOHF-NEh8Vr4FvuiY9FBo'
    }
};

var cardDataString = localStorage.getItem('watchSave');

var watchSave = JSON.parse(cardDataString);

console.log(watchSave);

var watchListCard = document.createElement('div');
watchListCard.className = "card watchlistResults";
watchListCard.innerHTML =`
<h5>${watchSave.title}</h5>
<p>${watchSave.summary}</p>
`;

watchlistEl.appendChild(watchListCard);

var watchNowBtn = document.createElement('button');
watchNowBtn.textContent = 'Watch Now';
watchNowBtn.addEventListener ('click', function() {
    
})


