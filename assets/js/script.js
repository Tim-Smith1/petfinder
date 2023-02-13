var favList = $('#favorites');
var searchBtn = $('#searchBtn');
var petFinderKey = "4z5js4u2Bie6Gn4LK2v6IjeXiCEHN7QjMerLwamf5MbkXyBllB";

var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0ejVqczR1MkJpZTZHbjRMSzJ2NklqZVhpQ0VITjdRak1lckx3YW1mNU1ia1h5QmxsQiIsImp0aSI6IjZiMmNiNjQwNTU4YzMyMWFjN2I2YTkxNTIwYmQ5ZWE1Y2U2ZmVjOGYxNTFiODcyN2JkMzNjMjhkZDQyM2YwNGJlNjNmZjI4MDdiNDFmOWUzIiwiaWF0IjoxNjc2MzAyMDAxLCJuYmYiOjE2NzYzMDIwMDEsImV4cCI6MTY3NjMwNTYwMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.QBoE0Bt1KtVox50Dy9jK9rYDVwiRKd1Z9k_8Yg3-dHSQmUyRYXVAG9M468qZmCKHcrgrS7-Vi9oGiQ2X04NUAOJY3Hq6CUhhfDclWaNfc7RoA8cA9_DZfj9ARo7kUSXKdQbhXq8GjLcYZ6JettzVW_X0YjPV1bMhXlGOi2jMSM4N6K_IwRc5fzShLUw7ZSu2BMMfNb9ggJ_T4AnPR6qYfB_1rzPcZ-Nv6H3LT6FX5-zElflwK4ZIbd6Ldx12BGA_rJewheCymbHcPzuvBdxC8HpmJK6r34yrkNnHrTD8Hv4wFzKY6yCR44W671IAbvlaftXeYLAQVvhejKt4WD7QGw';



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