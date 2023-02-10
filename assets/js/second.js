var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogSize = searchParamsArr[0].split('=')[1];
var dogAge = searchParamsArr[1].split('=')[1];
var gender = searchParamsArr[2].split('=')[1];
var zipCode = searchParamsArr[3].split('=')[1];

var petFinderURL = 'https://api.petfinder.com/v2/animals?type=dog';

var petFinderKey = "4z5js4u2Bie6Gn4LK2v6IjeXiCEHN7QjMerLwamf5MbkXyBllB";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0ejVqczR1MkJpZTZHbjRMSzJ2NklqZVhpQ0VITjdRak1lckx3YW1mNU1ia1h5QmxsQiIsImp0aSI6IjY5NGQ3OGVhZTdjNjE0NjFhY2MzNzMzNjQwNzE5YWUxMzAwMGJmNzRmOGUyODVjYTMxMzJjMWYxNmQ0ZjcwZWQ0YWY0NjAzM2VmMjQ4MTNlIiwiaWF0IjoxNjc2MDYwNDg4LCJuYmYiOjE2NzYwNjA0ODgsImV4cCI6MTY3NjA2NDA4OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.Vk5VPRG9X2EcdC0DKKiWdfxXYtFaEgkNud3UxGUfToR5T5iO0BZR-qB5iGa2ENFwcIlIdEdfvivMg-_Hn6UyD5i11nxaQQl7QSdMuotHYwxDHCxO9UjS_ec5R0HfD_jE60Eii42jzLM4pAv7bjCDL2c5muWX_zP3I2E60UR7ejY7qWurdWyaL33q6qIPgr_bIsgxhk_IoXm0qWVlJPmQQrXBcNzpgtAAX1Fi8Jr9cH-HUzujeghB3YtqeXzE4SnVQF_Z9uDxDPrigAGfQwwePyOSXiTc2g42adla3Fa4qiURdcwnPHZGqLLyfMRdqUpyoyf7ochrdf3rfNtxQsZEWA';


fetchDogList(dogSize, dogAge, gender, zipCode)
var searchBtn = $('#formBtn');

function searchFormSubmit(event) {
        event.preventDefault();
        var zipCode = $('.zipcode').val();
        var dogAge = $('#dog-age').val();
        var dogSize = $('#dog-size').val();
        var gender = $('#gender').val();

        location.href = './secondpage.html?' + 'size=' + dogSize + '&age=' + dogAge + '&gender=' + gender + '&location=' + zipCode;
        
}

searchBtn.on('submit', searchFormSubmit)

function fetchDogList(dogSize, dogAge, gender, zipCode){
        fetch(petFinderURL + '&size=' + dogSize + '&age=' + dogAge + '&gender=' + gender + '&location=' + zipCode, { headers: { 'Authorization': 'Bearer ' + access_token } })
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                for (var i = 0; i < data.animals.length; i++) {
                        if (data.animals[i].primary_photo_cropped !== null) {
                                var searchResults = $('#searchResults');
                                var dogCard = $("<div>");
                                dogCard.addClass('card dogCards');
                                dogCard.attr('data-id', data.animals[i].id);
                                var dogImg = $('<div>');
                                dogImg.addClass('card-image')
                                dogCard.append(dogImg);
                                var figureEl = $('<figure>');
                                figureEl.addClass('image');
                                dogImg.append(figureEl);
                                imgEl = $('<img>');
                                imgEl.attr('src', data.animals[i].primary_photo_cropped
                                        .medium);
                                figureEl.append(imgEl);
                                var dogInfo = $('<div>');
                                dogInfo.addClass('card-content');
                                dogCard.append(dogInfo);
                                var dogName = $('<h2>');
                                dogName.addClass('title is-4')
                                dogName.text(data.animals[i].name);
                                dogInfo.append(dogName);
                                var listEl = $('<ul>');
                                dogInfo.append(listEl);
                                var breed = $('<li>');
                                breed.text("Primary breed: " + data.animals[i].breeds.primary);
                                listEl.append(breed)
                                var city = $('<li>');
                                city.text = (data.animals[i].contact.address.city)
                                listEl.append(city)
                                var zip = $('<li>');
                                zip.text("Postal code: " + data.animals[i].contact.address.postcode);
                                listEl.append(zip);
                                var favBtn = $('<button>');
                                favBtn.addClass('button favBtn');
                                dogCard.append(favBtn);
                                var span = $('<span>');
                                span.addClass('icon');
                                favBtn.append(span);
                                var icon = $('<i>')
                                icon.addClass('fa-regular fa-heart');
                                span.append(icon);
                                var viewBtn = $('<button>');
                                viewBtn.addClass('button viewBtn');
                                viewBtn.text("view full bio");
                                dogCard.append(viewBtn);
                                searchResults.append(dogCard);
                        }
                }
        })      
}


var favorites = JSON.parse(localStorage.getItem('favorites'))||[];
var searchResults = $('#searchResults');
searchResults.on('click', '.favBtn', function () {
        $(this).children().children().toggleClass('fa-solid');
        if ($(this).children().children().hasClass("fa-solid") !== false) {
                var dogID = $(this).parent().attr("data-id");
                favorites.push(dogID);
                saveFavorites();
        } else {
                var dogID = $(this).parent().attr("data-id");
                var indexOfNonFav = favorites.indexOf(dogID); 
                favorites.splice(indexOfNonFav, 1);
                saveFavorites();
        }
});

function saveFavorites() {
        localStorage.setItem("favorites", JSON.stringify(favorites));
}

searchResults.on('click', '.viewBtn', function (){
        var dogID = $(this).parent().attr("data-id");
        location.href = './thirdpage.html?id=' + dogID;
});








