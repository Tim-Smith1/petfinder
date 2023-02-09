
var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogSize = searchParamsArr[0].split('=')[1];
var dogAge = searchParamsArr[1].split('=')[1];
var gender = searchParamsArr[2].split('=')[1];
var zipCode = searchParamsArr[3].split('=')[1];


var petFinderURL = 'https://api.petfinder.com/v2/animals?type=dog';
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjkwNzY3MTEyYmY4MzAwNDljNDZlMDZhNDM2ODBkNTllMDc3MTYxZjhjNTg2YmE4NjdlODhiMzhkMmVkMjJlYTUxZDYwZTE0YWY1MzA0ZGQwIiwiaWF0IjoxNjc1OTE5OTE0LCJuYmYiOjE2NzU5MTk5MTQsImV4cCI6MTY3NTkyMzUxNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.VqHQxHrg9sjRn5eXXjmsXIqUlAQXYD3TvdF9U0Cd5YcUE_HyaAnrxxrw1XDWxuw4o7VaORcpHlQA3zXUz8x1k_4Whet3A9VuI92hV76qNC7y8uAKUcORZYRJqTZrZp5Ap9u57MujAHmuOBaKRtKeEvynpSTeZbklugEwUYddcO-_obwRDas0-kmIV3Gi3BEVtqFygA9qn3LPDDDsQ1B9MWgvBvs4hl9bIvv-2FDGGnmKejJd0Hh3lUyy1wB0XVQGAr9WJ7btDJ9EL6kKNiJquRCnPI7tDAApkWURzEFkVd_o3btFo-XEP7lX--_mYJTaToeNAdqDjhM3jU-IVFIspw';


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





