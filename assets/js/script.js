var favList = $('#favorites');
var searchBtn = $('#searchBtn');
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi&client_secret=0lu8umPP2fDm04fyPgehlUvX8qObWDU2wT5jMUQH";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6ImUzMTgwYjcwNTUzODI5ZTU2ZWJkMTQ4YmE5N2YzNGI5ZjUwYjc2ZDZiMzg0MGI2ODY1ZTdiNThiNDE5YmE2OTMzOTdmYTI1NzkwZTMzMzRkIiwiaWF0IjoxNjc2MDUyMDczLCJuYmYiOjE2NzYwNTIwNzMsImV4cCI6MTY3NjA1NTY3Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.gcYR1ITADF7cyqRKH40Kv0y5Bf1uRtsn5H7qhUs59dgXBWyB6EuX5mjQzAyv_Y1AEd7yQVZI_e5lN9_zMQyINHf-T2ueVJIW_iVmyHafOb-2E8fLiAXA7QN7paO6x63nhVjCnk9p5FMPItGsNCIFvo-ANc9jMYDJExA2Ps0PEZvqhzvIIo7wqBhxz5gatalzbVgR2-DkA15XUpuCfX0-PeK2vjoqxM5vf_ieLuJy0gVpGCcXj5BMvWE_GNa0NxocnvS5eVJ4EXGGrrCbMdv-bLt6bhoccHKFsVdohyNaZtRVUTdGKGoIfmwCVmQkODbqjR41tn7OCfqFLb_wGOYWdA';
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
        console.log(favorites);
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