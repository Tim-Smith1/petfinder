var favList = $('#favorites');
var searchBtn = $('#searchBtn');
var petFinderKey = "4z5js4u2Bie6Gn4LK2v6IjeXiCEHN7QjMerLwamf5MbkXyBllB";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0ejVqczR1MkJpZTZHbjRMSzJ2NklqZVhpQ0VITjdRak1lckx3YW1mNU1ia1h5QmxsQiIsImp0aSI6Ijk2Y2Q0ODBhYTRlNjEwMDNkZTgwMmEzYzNmZTU3NzM2YmIxNzFhZGI2NzgwNDA4OTgyNDMxZjM5MWVlYWRiNDBlOGU0MDRlZDJjMGNhZTE5IiwiaWF0IjoxNjc2MDU2NzYxLCJuYmYiOjE2NzYwNTY3NjEsImV4cCI6MTY3NjA2MDM2MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.riliiwhhK-HHyIee2ZCjA6qwc2vL4M4a3wBOzipHVrawHyUOiKUTAXF1z-YWXqYN5-KBS-seLOG4cAaw0uklrRXKgzRu0MASg-GFlK4pCABmJ8C4jveu-DZVb4DsNZIZArhT33bkro9QEjpkWzEPEzKH8wHfOw7_f2h9ScMMhGW4qIvkVoCrEGruPeeW2btJDsF_xASkZeo3z2VFFUkbF-MmClwF50oszr3iO68Z80Y1dA9g4Vl4KAWx7JqIf_3MmNMMetkycTXREXv0YYgsIg5Nwg9T_nsYL8Y7p8raIwSPJJ-GhESN1Uee8zRz_MmBT3XFQ2Rno48WRWqgpxxjwA';
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