var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogSize = searchParamsArr[0].split('=')[1];
var dogAge = searchParamsArr[1].split('=')[1];
var gender = searchParamsArr[2].split('=')[1];
var zipCode = searchParamsArr[3].split('=')[1];


var petFinderURL = 'https://api.petfinder.com/v2/animals?type=dog';
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjJiZTgwZWFjNjE4MzIzYWVmYjBmNzZlYzc2YWNmNTJkNWJhYWY2Yjk3NTYxZjRkNWVkY2VkYmMxNTFkOWM2MTQyMTZmYTI3ZTUzNTMyNjUxIiwiaWF0IjoxNjc1ODg1MDc5LCJuYmYiOjE2NzU4ODUwNzksImV4cCI6MTY3NTg4ODY3OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.N3-WcGP6TjwtGdaSZhR1hDPa7tnrar8xa2chgRALFuzV00SWU6Kn_gDgcmrmVpwBC4HJxnb8lawg9kEmiv5935XEEgJ4yY8WOPyQ5wSB3IT6gasR39u9CdStbolSC3TrCy_S5q-BVnK_UtRaaZ-b6TjXpgQAkKgbmI37MrYj5FkrTNL-BdGYfrmUKmX7aPeFiqHIUjH__iiLlB6ssi1QUYZG0p6a8nNiwmeLMYeZUrJvcBVUzTqvfh9klDt8ITTBEH0Lr1lp14h0ZSqHy78Q03ZFW5-gW6WJuJROMqRb2pc0F90Is0ImojUUYDVe3yaTO5v1VcmCoBXSfL1g4CqhCw';

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

  


        
