var searchParamsArr = document.location.search.split('&');
var dogID = searchParamsArr[0].split('=')[1];

var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6ImJhOTU0ZWYwNWRhODhmYzI2ZTc4MTg3NTNiZDIwZThhYjRiYzJlNzliODBlZGQwNTZiM2I3YTg3YWYyYmQ1ZjUzZjJjMGE0MDU0MWJmYmY0IiwiaWF0IjoxNjc2Mjk3MDgxLCJuYmYiOjE2NzYyOTcwODEsImV4cCI6MTY3NjMwMDY4MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.hGX1-uGgOSYQ5g8jTS-v9BX03dtSGgW-x3-8VUsGLNmBftsi-Uf-EXprSsDQKxqa__zta0QcELaWm4Cd2ykZsnDS8tkolTj2w1T8joZsR8RyTp8OO2c0aFPoodhrWvEi3fV3ZMmm9MsWHuPH0XIHcPNXPWTHF-j9g8RdZs6Oh8kGEIex3avx7s8GfrhcMPH629SZudVwI6xWFt8IrFdjMAlEq6B0DIqDH_j2OEydVHPhyKiwoPU0G3sOssOO515dgpdAizGfsEPrbgFRhW3iBVNBwG2Wg5AgcagR4ZvawEwA3NMeC8AxFh80LtocR03dBGTuO65DwecgvcCk3vGQeQ';

var ninjaDogKey = "oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6"
var breed;

function dogBreedInfo(){
var ninjaDogURL = "https://api.api-ninjas.com/v1/dogs?name=" + breed;
fetch(ninjaDogURL, {headers:{'X-Api-Key': 'oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6'}})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        
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

var petFinderOneURL = 'https://api.petfinder.com/v2/animals/' + dogID;
fetch(petFinderOneURL, { headers: { 'Authorization': 'Bearer ' + access_token } })
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                
                breed = (data.animal.breeds.primary);
                dogBreedInfo();
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