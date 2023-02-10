
var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogSize = searchParamsArr[0].split('=')[1];
var dogAge = searchParamsArr[1].split('=')[1];
var gender = searchParamsArr[2].split('=')[1];
var zipCode = searchParamsArr[3].split('=')[1];



var petFinderURL = 'https://api.petfinder.com/v2/animals?type=dog';
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjM1Yzc2NGI2NTQ2MWYyMWQ1NWYyNzBkZmQ0YjE2MWM4NzJjMDQ5ZGIxNWI5NDQ3M2JlMTIwZjEzZGNmNzU5OGRkN2E5YzVkMjg2MDU4YWUzIiwiaWF0IjoxNjc2MDQ0Mzc5LCJuYmYiOjE2NzYwNDQzNzksImV4cCI6MTY3NjA0Nzk3OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.uirM3vhpNf-TG5EtihErUzbALfDWxT3oIkgUcTccKHsYqg5lTO4JpaAnpYLQwG4D0FLwRhr7tL4hq4aDqhVQJg18-LoHc3WaPJYQWhMIodZVJb0pqcTWXATACHjggRk0rteLIed-wmT9PgLKP8tDH-Kwq4isjtu4EHhBiijcHJXPvJjBPQOyY-IjzD0Hsa4bCRZf6pYkSMGhuTED-wZ4kRhB4Eu31H1dTYtdr3XJNIK5QZtBect6J2ixvTz6Xh78F59or0QXDdWwJXd3L6c1SH3I4ExgF976QaP318pFE9hFT8X_rcCYRg7OO6DhS_0wleLIhs2HF7ClpJnKBhuTog';

fetchDogList(dogSize, dogAge, gender, zipCode)
var searchBtn = $('#formBtn');

function searchFormSubmit(event) {
        event.preventDefault();
        var zipCode = $('.zipcode').val();
         console.log(zipCode);
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
                console.log(data.animals);
                for (var i = 0; i < data.animals.length; i++) {
                        if (data.animals[i].primary_photo_cropped !== null) {
                                var searchResults = $('#searchResults');
                                var dogCard = $("<div>");
                                dogCard.addClass('card dogCards');
                                dogCard.html('data-id', data.animals[i].id);
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
        var favBtn = $(this).children().children();
        $(this).children().children().toggleClass('fa-solid');
        if ($(this).children().children().hasClass("fa-solid") !== false) {
                console.log("true");
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
        location.href = './thirdpage.html?' + 'id=' + dogID;
});


  










    // dogFacts = {
        //     breeds: data.animals[i].breeds,
        //     attributes: data.animals[i].attributes,
        //     contact: data.animals[i].contact,
        //     name: data.animals[i].name,
        //     picture: data.animals[i].primary_photo_cropped.medium,
        //     environment: data.animals[i].environment,
        // }





