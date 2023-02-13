var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogSize = searchParamsArr[0].split('=')[1];
var dogAge = searchParamsArr[1].split('=')[1];
var gender = searchParamsArr[2].split('=')[1];
var zipCode = searchParamsArr[3].split('=')[1];

var petFinderURL = 'https://api.petfinder.com/v2/animals?type=dog';

var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjBlNDg4OGQyZWIwMzZiMGMyNDQ4ZmEyNjViOWNiZjliMjY3NWMyY2Q2MGUxNDYyZjVlODUyYjM3ZmY3ZjgzYmZmOWQ2NzhjNTUyYjI2OThjIiwiaWF0IjoxNjc2MzAzMjUzLCJuYmYiOjE2NzYzMDMyNTMsImV4cCI6MTY3NjMwNjg1Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.CxaRw_ks36Mx0y4vYilh8HCnHC6zet4G78t3QtglZQ2ITvk0_E20VNDPuoE32BFx6g9azgl3b8Sx09QyPj5-HfQyVpr4PU8zSCGHQXaqrRCSDOpbMebvkA7rg4Fi-xP5_8NLK1K2LPvFIOWRqeOThq_IeJ2YVnKA_ukXm5gWPgjFv_5UVmJPHeZL2Ikegs-_8FdqTaGgkI9DV0Wq4wGykQkua5LXu1Wrqeo7AZjWH2UdoUT_nLgd4iKxZdpFZ4dGJtWiRTEeINLtPZ1QvqqwIxTaxvWOAy_sMcVNBjUKPxBK-ux1M5bV1JMnZzbWn1DQL4JtaOp_m6weXbO4bZ4nig';


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

function fetchDogList(dogSize, dogAge, gender, zipCode) {
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


var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
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

searchResults.on('click', '.viewBtn', function () {
        var dogID = $(this).parent().attr("data-id");
        location.href = './thirdpage.html?id=' + dogID;
});








