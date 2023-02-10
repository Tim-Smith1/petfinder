var favList = $('#favorites');
var searchBtn = $('#searchBtn');
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi&client_secret=0lu8umPP2fDm04fyPgehlUvX8qObWDU2wT5jMUQH";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjBiMDhhNWRlZDFmZjIyZjViMTc5MzY4OGQ4ZTczNGU1ZmNhNmY3ZTI0OTBjMmFiM2IwMjY0MTRkZDEzNDk3ZTkzZTkxODFkZmMwZGRiYWQzIiwiaWF0IjoxNjc2MDQ4NzAxLCJuYmYiOjE2NzYwNDg3MDEsImV4cCI6MTY3NjA1MjMwMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.fSDGoBODbAT3KbVQSRRKSINX3sroIABY2G9b1HAtRPop_tg9LjXnIZtXkXSTz0VDiHRyHc6pX_Xd9DhY7gITvK_EWinGxmXybA4S3rKs_C0IHJ9DAsGRDPM2_05LF5Vm8AhQcwts0vlfsCfQUrAnYJWnHkfqlBAth1TVdcxRKVhkGT3kMiRxQeh-Fr9QAAlQ3k-MzfP4tngoArO_CxiNoZzUG5tyGPgvleqclg6uRj49NVDaTHYaBNnmUM-avmj2cAChBve4LJO3lCkaM5U9QiwpcW08-QyBr6JvZQng__GuZVITBJ3aUVEvsLDnhKfwoLUZ8CfcUPQZwB5oPkMSxw';


function searchFormSubmit(event) {
        event.preventDefault();
        var zipCode = $('.input').val();
        var dogAge = $('#dog-age').val();
        var dogSize = $('#dog-size').val();
        var gender = $('#gender').val();

        location.href = './secondpage.html?' + 'size=' + dogSize + '&age=' + dogAge + '&gender=' + gender + '&location=' + zipCode;

}

searchBtn.on('click', searchFormSubmit)


function init() {
        displayFavorites();
}

init();



function displayFavorites() {
        var favorites = JSON.parse(localStorage.getItem('favorites'))
        for (let i = 0; i < favorites.length; i++) {
                var dogID = favorites[i];
                var petFinderOneURL = 'https://api.petfinder.com/v2/animals/' + dogID;

                fetch(petFinderOneURL, { headers: { 'Authorization': 'Bearer ' + access_token } })
                        .then(function (response) {
                                return response.json();
                        })
                        .then(function (data) {
                                
                                var dogCard = $("<div>");
                                dogCard.addClass('card dogCards');
                                dogCard.attr('data-id', data.animal.id);
                                var dogImg = $('<div>');
                                dogImg.addClass('card-image')
                                dogCard.append(dogImg);
                                var figureEl = $('<figure>');
                                figureEl.addClass('image');
                                dogImg.append(figureEl);
                                imgEl = $('<img>');
                                imgEl.attr('src', data.animal.primary_photo_cropped
                                        .medium);
                                figureEl.append(imgEl);
                                var dogInfo = $('<div>');
                                dogInfo.addClass('card-content');
                                dogCard.append(dogInfo);
                                var dogName = $('<h2>');
                                dogName.addClass('title is-4')
                                dogName.text(data.animal.name);
                                dogInfo.append(dogName);
                                var listEl = $('<ul>');
                                dogInfo.append(listEl);
                                var breed = $('<li>');
                                breed.text("Primary breed: " + data.animal.breeds.primary);
                                listEl.append(breed)
                                var city = $('<li>');
                                city.text = (data.animal.contact.address.city)
                                listEl.append(city)
                                var zip = $('<li>');
                                zip.text("Postal code: " + data.animal.contact.address.postcode);
                                listEl.append(zip);
                                var favBtn = $('<button>');
                                favBtn.addClass('button favBtn');
                                dogCard.append(favBtn);
                                var span = $('<span>');
                                span.addClass('icon');
                                favBtn.append(span);
                                var icon = $('<i>')
                                icon.addClass('fa-solid fa-heart');
                                span.append(icon);
                                var viewBtn = $('<button>');
                                viewBtn.addClass('button viewBtn');
                                viewBtn.text("view full bio");
                                dogCard.append(viewBtn);
                                favList.append(dogCard);
                                

                        })
                       
        }
}

var favorites = JSON.parse(localStorage.getItem('favorites'))||[];
console.log(favorites);
favList.on('click', '.favBtn', function () {
        var favBtn = $(this).children().children();
        $(this).children().children().addClass('fa-regular');
        $(this).children().children().removeClass('fa-solid');
        if ($(this).children().children().hasClass("fa-regular") !== false) {
                var dogID = $(this).parent().attr("data-id");
                var indexOfNonFav = favorites.indexOf(dogID);
                console.log(indexOfNonFav); 
                favorites.splice(indexOfNonFav, 1);
                console.log(favorites);
                saveFavorites();
                location.reload();
        }
})

function saveFavorites() {
        localStorage.setItem("favorites", JSON.stringify(favorites));
        
}

favList.on('click', '.viewBtn', function (){
        var dogID = $(this).parent().attr("data-id");
        location.href = './thirdpage.html?' + 'id=' + dogID;
});