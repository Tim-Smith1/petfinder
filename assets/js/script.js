var searchBtn = $('#searchBtn');
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi&client_secret=0lu8umPP2fDm04fyPgehlUvX8qObWDU2wT5jMUQH";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6ImQ3ZmVhMjAyOTQ3MmEyNDU5OWRkZTFmOWMyMzhjYWI1YTViM2E5MzMxYWFmOGVlMjFhMGMzYTgwYzkwNDQ0Y2FmMjVlZmI1ZDdlMTViZDQwIiwiaWF0IjoxNjc1OTY1NzMxLCJuYmYiOjE2NzU5NjU3MzEsImV4cCI6MTY3NTk2OTMzMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.A1nZoGuH1rW5W5uweq2Ut4yy0hwTwYM2-1MOeqq1lE4Q83SCjSOzreNK_b31429oJ9ZmPkOvchbQRsRILKERB7VNyT-NGQMd9t7aO6a8XbUs9gVYNASlBdE_b5fjsYznDwfB9a8gX3R_Cf5CsC16UlzRfDzgDvSBehf2uwd5nvsYnsM2GT_67ThL64ltvCAx0mv544yS3R--pdzfi7dt2lgCfcbDKGHmTHAmPXQnIP7Jqlvx7zvTSzQzR96cvHucoY0bUSfWjSCP5yj6GP0KdrzJFZIaoS_ZDNlVndXJ0JH2WNytZGnFTQN8CCW7M7cHbRi15i2zFFDfWv1N_LWMYw';


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
        displayFavorites();
}

init();



function displayFavorites() {
        var favorites = JSON.parse(localStorage.getItem('favorites'))
        for (let i = 0; i < favorites.length; i++) {
                var dogID = favorites[i];
                var petFinderOneURL = 'https://api.petfinder.com/v2/animals/' + dogID;

                fetch(petFinderOneURL, { headers: { 'Authorization': 'Bearer ' + access_token } })
                        .then(function (response) {
                                return response.json();
                        })
                        .then(function (data) {
                                var favList = $('#favorites');
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