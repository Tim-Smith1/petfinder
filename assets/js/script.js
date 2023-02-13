var favList = $('#favorites');
var searchBtn = $('#searchBtn');


var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjhhOWZlNzczMjQ1ZTIzM2ZhNjBhNmVkNGE3NjQ4YTRhZTA3OTQzNDJlYjUxYzBkNDM1NjhkMjAwNGI1NjhjMjg2Y2ZhMGExNWEzOGIzODYzIiwiaWF0IjoxNjc2MzIxMjU1LCJuYmYiOjE2NzYzMjEyNTUsImV4cCI6MTY3NjMyNDg1NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.J_gW1anbs37bM9nrW0iqcM9ntmNGD3i0M7IbZPl4SG326uHrOCynhapA6A8dkccA3EZxDozCwuaIbivdqRQF_59F0qNevZRdF5z6QjTWGJwd86gco02nYDwL5x8XdJ4xuE_KGX9lA5uVRAd5pasWQ4DugutNb71K2JxWcFnHdVuosDtRvhXPClRE8xfY_bAHrwC1hySOsBv6ppXQO_z6tQ9q6x0UCIOp_-oyo14HrPKG7JneOrRpcdS4-IkB7Z3GFN7JnzIHfFkOUaCOKYuobw4c_OO-jg0UciwqE5FcrHlDCGdkBUqiKfOz5HwdpYAy7Tse0-erO-ETIC1dH8xN5g';


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