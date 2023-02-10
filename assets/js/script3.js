
var ninjaDogKey = "oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6"
var breed;



function dogBreedInfo(){
var ninjaDogURL = "https://api.api-ninjas.com/v1/dogs?name=" + breed;
fetch(ninjaDogURL, {headers:{'X-Api-Key': 'oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6'}})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        console.log(data);

        // column 3 image
        var myImg = JSON.stringify(data[0].image_link);
        var imageContainer = document.getElementById('image-link');
        var img1 = document.createElement('img');
        myImg = myImg.replace(/['"]/g, '');
        img1.setAttribute('src', myImg);
        imageContainer.append(img1);
        
        //column 3 info
        document.getElementById('barking').innerHTML = ('Barking: ' + data[0].barking);
        document.getElementById('drooling').innerHTML = ('Drooling: ' + data[0].drooling);
        document.getElementById('energy').innerHTML = ('Energy: ' + data[0].energy);
        document.getElementById('child-friendly').innerHTML = ('Child Friendly: ' + data[0].good_with_children);
        document.getElementById('maxage').innerHTML = ('Max age: ' + data[0].max_life_expectancy);
        document.getElementById('playfulness').innerHTML = ('Playfulness: ' + data[0].playfulness);
        document.getElementById('protective').innerHTML = ('Protective: ' + data[0].protectiveness);
        document.getElementById('shedding').innerHTML = ('Shedding: ' + data[0].shedding);
        document.getElementById('trainability').innerHTML = ('Trainability: ' + data[0].trainability);
        
        })}

        


var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogID = searchParamsArr[0].split('=')[1];
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi&client_secret=0lu8umPP2fDm04fyPgehlUvX8qObWDU2wT5jMUQH";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjZlYjhmNDE3NzA2MjQxNWI1NWYyNDlmNzVkYzZmZjY3NjhiN2I2ZDQwYTE1MjQzYWNiYjE5NTdjNjI2MjI1MmI5OTA1NDYzZTBlMTM3N2QyIiwiaWF0IjoxNjc2MDU1OTU0LCJuYmYiOjE2NzYwNTU5NTQsImV4cCI6MTY3NjA1OTU1NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.t7QB7TM09Zx6zOlfcAGrG8CkFo7YNwP_pzFl3E9PzFQo4OL-NBTiydaY_htQVE9KTR2aOouueP75GL22iET_y2dFDwRyDvxZ368xw3bt9aojzegfzivnKb3aYy8VqC3Gc2MgV6uR8dby3nnz4AAJWMJF3K_G0X9Kim4_RpWZBWfiwvprtPAd6Pjz-MCf5-I4l-MxwIsrx8VCYtKYd3z4ak_xd8RwuL9r2o_fXRevzLpIQP4S-VSaEM5F4F0D2Bo1pi4OBv01pja3vZ-HaTvy6UUwT-paP4QhKefdgQkEOH2luUlwKSPYG9sPRo7AIxRE6FHVsnlVUTRBNdTqAfGkNQ';

var petFinderOneURL = 'https://api.petfinder.com/v2/animals/' + dogID;
fetch(petFinderOneURL, { headers: { 'Authorization': 'Bearer ' + access_token } })
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                console.log(data);
                breed = (data.animal.breeds.primary);
                console.log(breed);
                dogBreedInfo();
                console.log(data.animal.primary_photo_cropped.medium);



///seleted dog center image
        $('.dog-image img').attr('src', data.animal.primary_photo_cropped.large);

////selected dog info

        var dogName = $('#dog-name');
        dogName.text(data.animal.name);

        var dogInfo = $('#dog-info');
        var dogDesc = $('<li>');
        dogDesc.text(data.animal.description);
        dogInfo.append(dogDesc);
        
        var dogBreed = $('<li>');
        dogBreed.addClass = ('card dogBreed');
        dogBreed.text(data.animal.breeds.primary);
        dogInfo.append(dogBreed);
                
        var dogEmail = $('<li>');
        dogEmail.text(data.animal.contact.email);
        dogInfo.append(dogEmail);

        var dogPhone = $('<li>');
        dogPhone.text(data.animal.contact.phone);
        dogInfo.append(dogPhone);

        var dogCity = $('<li>');
        dogCity.text(data.animal.contact.address.city)
        dogInfo.append(dogCity);
                
        })
        

        displayFavorites();
var favList = $('#favorites');
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
                                var dogCard = $('<div>');
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
                                        .small);
                                figureEl.append(imgEl);
                                var dogInfo = $('<div>');
                                dogInfo.addClass('card-content');
                                dogCard.append(dogInfo);
                                var dogName = $('<h2>');
                                dogName.addClass('title is-4')
                                dogName.text(data.animal.name);
                                dogInfo.append(dogName);
                                var listEl = $('<ul>');
                                dogInfo.append(listEl);var viewBtn = $('<button>');
                                viewBtn.addClass('button viewBtn');
                                viewBtn.text("view full bio");
                                dogCard.append(viewBtn);
                                favList.append(dogCard);

                        });
        }
}

favList.on('click', '.viewBtn', function (){
        var dogID = $(this).parent().attr("data-id");
        location.href = './thirdpage.html?' + 'id=' + dogID;
});