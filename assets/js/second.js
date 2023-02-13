var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogSize = searchParamsArr[0].split('=')[1];
var dogAge = searchParamsArr[1].split('=')[1];
var gender = searchParamsArr[2].split('=')[1];
var zipCode = searchParamsArr[3].split('=')[1];

var petFinderURL = 'https://api.petfinder.com/v2/animals?type=dog';

var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6ImJhOTU0ZWYwNWRhODhmYzI2ZTc4MTg3NTNiZDIwZThhYjRiYzJlNzliODBlZGQwNTZiM2I3YTg3YWYyYmQ1ZjUzZjJjMGE0MDU0MWJmYmY0IiwiaWF0IjoxNjc2Mjk3MDgxLCJuYmYiOjE2NzYyOTcwODEsImV4cCI6MTY3NjMwMDY4MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.hGX1-uGgOSYQ5g8jTS-v9BX03dtSGgW-x3-8VUsGLNmBftsi-Uf-EXprSsDQKxqa__zta0QcELaWm4Cd2ykZsnDS8tkolTj2w1T8joZsR8RyTp8OO2c0aFPoodhrWvEi3fV3ZMmm9MsWHuPH0XIHcPNXPWTHF-j9g8RdZs6Oh8kGEIex3avx7s8GfrhcMPH629SZudVwI6xWFt8IrFdjMAlEq6B0DIqDH_j2OEydVHPhyKiwoPU0G3sOssOO515dgpdAizGfsEPrbgFRhW3iBVNBwG2Wg5AgcagR4ZvawEwA3NMeC8AxFh80LtocR03dBGTuO65DwecgvcCk3vGQeQ';


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








