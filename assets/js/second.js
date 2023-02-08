var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogSize = searchParamsArr[0].split('=')[1];
var dogAge = searchParamsArr[1].split('=')[1];
var gender = searchParamsArr[2].split('=')[1];
var zipCode = searchParamsArr[3].split('=')[1];


var petFinderURL = 'https://api.petfinder.com/v2/animals?type=dog';
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6Ijc0YTAzYTdmNzcyYTQ2NzIzNTY3OTViMTFiN2IxMDc4NDM4ODVhNTY2NzFiMmFjMmI0MmEwYjk4NmNjZDljNWU0Y2Y2NWEzYjE4YWEyODk1IiwiaWF0IjoxNjc1ODg5MTQ3LCJuYmYiOjE2NzU4ODkxNDcsImV4cCI6MTY3NTg5Mjc0Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.A67avj-13yNwNM20IILzPX5K6B4Az9xUryMmTg-7KCEwgDf7aIXyRmwHC4AZlKQAJiQFFGe6p0Rc6wvSGL9XQItRHGQkMXHHF7TB6mHnVKM7OgFiRcynKR1fjXnZ_3p0ANp9th_RSw8429SMOHC8bjPh530rTEI-zJU38J3463VZMhTsFupmh2hGbyj5CNcjZZ-Tf3zcGXQ0qwqEfoj7B4Mxp0y7G6srPqhTlUuVslTQ-uKbEZu0UeO_i3lLBvvkSqjGCrwWa8U9EZ8ZLt33o_FVoEkPhV5L9NgZI2O-Ul45Fe2afJEfy6IV-8um2W_Q2TFsDlG4PS2rTRQOcU7Otw';

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

  


        
