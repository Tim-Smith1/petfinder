var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogSize = searchParamsArr[0].split('=')[1];
var dogAge = searchParamsArr[1].split('=')[1];
var gender = searchParamsArr[2].split('=')[1];
var zipCode = searchParamsArr[3].split('=')[1];


var petFinderURL = 'https://api.petfinder.com/v2/animals?type=dog';
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjQ4YzkyN2FhYTY1NzQzZmI2MzMwMzNhNmVkODBlZDlhN2RlYjA4YWJhNDVkNjgwOWM2YTJmMTE1YzIwMGZkYjVkYWIzYzdmZTM2MDNkZWNmIiwiaWF0IjoxNjc1ODgwOTM2LCJuYmYiOjE2NzU4ODA5MzYsImV4cCI6MTY3NTg4NDUzNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.KucJcBsu8LYBczavo7k1CHHDKJyIlwyTaHBEn7H4OyicxBupKP6GiTBe_9hf079b60cnq_CUSOg1UHI0Qj9OdFqJYdSoNQztCIIgHkamrTL0ToGrAia9sQ0ym7Q8jc1zCe8etw3LsCHBq81U4HTJitef3JXsNIPurkSPKlZyPR-J0Kd6atere0nvcS4c6Y61jss2RCAdkRdXc6hPgyp4BkEoDFeyovtCYr8yOFule5sgtxpH-f68HO0iAFLmd1lp-m_6aQhN0EoME3EoJSW0SY_B2ZI1BPPJZ5YqaKrm4fcwdnf3CEfPbibK9Jbf7CoZH-ZHnkCHiztGQr72PFWzew';

fetch(petFinderURL + '&size=' + dogSize + '&age=' + dogAge + '&gender=' + gender + '&location=' + zipCode, { headers: { 'Authorization': 'Bearer ' + access_token } })
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
        console.log(data.animals);
for (var i = 0; i < data.animals.length; i++) {
        
        // dogFacts = {
        //     breeds: data.animals[i].breeds,
        //     attributes: data.animals[i].attributes,
        //     contact: data.animals[i].contact,
        //     name: data.animals[i].name,
        //     picture: data.animals[i].primary_photo_cropped.medium,
        //     environment: data.animals[i].environment,
        // }
var searchResults = $('#searchResults');

var dogCard = $("<div>");
dogCard.addClass('card');
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
dogName.text(data.animals[i].name);
dogInfo.append(dogName);
var listEl = $('<ul>');
dogInfo.append(listEl);
var breed = $('<li>');
breed.text(data.animals[i].breeds.primary);
listEl.append(breed)
var city = $('<li>');
city.text = (data.animals[i].contact.address.city)
listEl.append(city)
var zip = $('<li>');
zip.text(data.animals[i].contact.address.postcode);
listEl.append(zip);


searchResults.append(dogCard);




        
}})



  

        
