
var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogSize = searchParamsArr[0].split('=')[1];
var dogAge = searchParamsArr[1].split('=')[1];
var gender = searchParamsArr[2].split('=')[1];
var zipCode = searchParamsArr[3].split('=')[1];


var petFinderURL = 'https://api.petfinder.com/v2/animals?type=dog';
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjY0ZDg2NTY3MTljMTljYzc1OTgyZDI2NmFiNzY1OTk0MzVmOWRmNDU0NTY0YzMxNThhYTBlMzI4ZDIzNWZmMmNkMDk5NTllZjgzNWQ4NmYyIiwiaWF0IjoxNjc1OTA1ODM0LCJuYmYiOjE2NzU5MDU4MzQsImV4cCI6MTY3NTkwOTQzNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.in6Sxyjg0Az6nj3yGGPjiatSGseJPaoxIqWuVe5KraebbTlm1gMTDZUbJywKUazg2qjXsC75xxYjlvDUeWNj6lM3GC1zRVlp_-ZWSBtbVtKZ7ATiCNy6ooLpnx1R_oX85I12RHMtEJOOy5LDF9qQhCFrra3TRPwPUE9zjfRkfj7HksLIYf9pGiBvnW6plj44tiFjNmuUkTpLBcKf_5hzatH_q-w5aDoEdGhZq0oW7DWAy77wKYELSb6DtB-wvnbNOLSqAOGX4biNLF9JjxWbAxfYhnM8b8wnqEQFaNEwoPbgY3ZgyeoJpzug6Gj0X1CzwN2z3Y0RqdjvhXPj1JcM3A';

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
var favorites = [];
var searchResults = $('#searchResults');
searchResults.on('click', '.favBtn', function () {
        var favBtn = $(this).children().children();
        $(this).children().children().toggleClass('fa-solid');
        if ($(this).children().children().hasClass("fa-solid") !== false) {
                console.log("true");
                var dogID = $(this).parent().attr("data-id");
                favorites.push(dogID);
                saveFavorites();
                var dogID = $(this).parent().attr("data-id");
                favorites.splice(dogID, 1);
                saveFavorites();

        } else {
                console.log("false");
                var dogID = $(this).parent().attr("data-id");
                favorites.splice(dogID, 1);
                console.log(favorites);
                saveFavorites();
        }
})

function saveFavorites() {
        localStorage.setItem("favorites", JSON.stringify(favorites));
}

// var petFinderOneURL = 'https://api.petfinder.com/v2/animals/' + dogID;
// fetch(petFinderOneURL, { headers: { 'Authorization': 'Bearer ' + access_token } })
//         .then(function (response) {
//                 return response.json();
//         })
//         .then(function (data) {
//                 console.log(data);
//         })





    // dogFacts = {
        //     breeds: data.animals[i].breeds,
        //     attributes: data.animals[i].attributes,
        //     contact: data.animals[i].contact,
        //     name: data.animals[i].name,
        //     picture: data.animals[i].primary_photo_cropped.medium,
        //     environment: data.animals[i].environment,
        // }





