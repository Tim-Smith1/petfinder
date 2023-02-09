var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogSize = searchParamsArr[0].split('=')[1];
var dogAge = searchParamsArr[1].split('=')[1];
var gender = searchParamsArr[2].split('=')[1];
var zipCode = searchParamsArr[3].split('=')[1];


var petFinderURL = 'https://api.petfinder.com/v2/animals?type=dog';
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjA2NjZkMmUwNTcyNTI0NTA0NDg4YThlYzdiNjU1ZTVjOTllYzk1ZGM5NjRmNGNmOGZiYzg5Yzk4ZmE3MGQyZDU5MDU4ZWIyZDVjZTk1YWZhIiwiaWF0IjoxNjc1OTA3MzQwLCJuYmYiOjE2NzU5MDczNDAsImV4cCI6MTY3NTkxMDk0MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.pOmQOpJA2-9uwl9kWnUoplu_J72euLTlcuP7reB8GnqzHq1EXVzvw-iv8ulWhJH9INot34-x7WR6Jc8hwL7ZYUyhjOIXZRfCQe6xZlI68XoMftOOROgjOyvv6L-IkzGSHNlorvJvhMBtSW3p7VfND4sx4UrZmBFnorNbuZkLIOQ-a-Stc9iX5b8v5x4rBhfw67Bd3fhRCSX71W0C1AHBFcaaFr7RIlx1f6zlbiOmzYDiMxfeQ_SfoN3bwvhJYywgTTT9j1cBZkKOkRRKfKEE_eINRVEP-PNdX64kitQBq0LU9n-3OUIAdW5kSGYenldwWZJAz3srohYvUUv7-mbf2w"';

fetch(petFinderURL + '&size=' + dogSize + '&age=' + dogAge + '&gender=' + gender + '&location=' + zipCode, { headers: { 'Authorization': 'Bearer ' + access_token } })
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
        console.log(data.animals);
for (var i = 0; i < data.animals.length; i++) {
        
var searchResults = $('#searchResults');

var dogCard = $("<div>");
dogCard.addClass('card dogCards');
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
searchResults.append(dogCard);
        
}})

    // dogFacts = {
        //     breeds: data.animals[i].breeds,
        //     attributes: data.animals[i].attributes,
        //     contact: data.animals[i].contact,
        //     name: data.animals[i].name,
        //     picture: data.animals[i].primary_photo_cropped.medium,
        //     environment: data.animals[i].environment,
        // }

  


        
