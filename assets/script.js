document.addEventListener('DOMContentLoaded', function() {

var form = $('#search-form');
var submitBtn = $('.submitBtn');

submitBtn.on("click", function(event) {
    event.preventDefault();
window.location.href ="./searchresults.html";


console.log(submitBtn);
});
});


