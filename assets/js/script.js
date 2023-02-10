var favList = $('#favorites');
var searchBtn = $('#searchBtn');
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi&client_secret=0lu8umPP2fDm04fyPgehlUvX8qObWDU2wT5jMUQH";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjZlYjhmNDE3NzA2MjQxNWI1NWYyNDlmNzVkYzZmZjY3NjhiN2I2ZDQwYTE1MjQzYWNiYjE5NTdjNjI2MjI1MmI5OTA1NDYzZTBlMTM3N2QyIiwiaWF0IjoxNjc2MDU1OTU0LCJuYmYiOjE2NzYwNTU5NTQsImV4cCI6MTY3NjA1OTU1NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.t7QB7TM09Zx6zOlfcAGrG8CkFo7YNwP_pzFl3E9PzFQo4OL-NBTiydaY_htQVE9KTR2aOouueP75GL22iET_y2dFDwRyDvxZ368xw3bt9aojzegfzivnKb3aYy8VqC3Gc2MgV6uR8dby3nnz4AAJWMJF3K_G0X9Kim4_RpWZBWfiwvprtPAd6Pjz-MCf5-I4l-MxwIsrx8VCYtKYd3z4ak_xd8RwuL9r2o_fXRevzLpIQP4S-VSaEM5F4F0D2Bo1pi4OBv01pja3vZ-HaTvy6UUwT-paP4QhKefdgQkEOH2luUlwKSPYG9sPRo7AIxRE6FHVsnlVUTRBNdTqAfGkNQ';
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];


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
     if (favorites.length > 0) {
        displayFavorites();   
     } else {
        var pTag = $('<p>');
        pTag.text('No favorites to display')
        favList.append(pTag);
     }     
}

init();

function displayFavorites() {
       
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


favList.on('click', '.favBtn', function () {
        var favBtn = $(this).children().children();
        $(this).children().children().addClass('fa-regular');
        $(this).children().children().removeClass('fa-solid');
        if ($(this).children().children().hasClass("fa-regular") !== false) {
                var dogID = $(this).parent().attr("data-id");
                var indexOfNonFav = favorites.indexOf(dogID); 
                favorites.splice(indexOfNonFav, 1);
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