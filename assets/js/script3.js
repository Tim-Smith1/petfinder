
//dogs API 
// var ninjaDogURL =  'https://api.api-ninjas.com/v1/dogs?name=' + breed;

// var breed = 'pitbull';

var ninjaDogKey = "oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6"
var breed = localStorage.getItem('dogBreed');
var energy = "3";
var ninjaDogURL = "https://api.api-ninjas.com/v1/dogs?name=" + breed;// + '&energy=' + energy;

//var barking = document.getElementById('barking').innerHTML;

// function breedDogBreed() {

//     //converts array to string
//     breed = localStorage.getItem('dogBreed');

// }


fetch(ninjaDogURL, {headers:{'X-Api-Key': 'oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6'}})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        //console.log(data);

        //column 3 image
        var myImg = JSON.stringify(data[0].image_link);
        var imageContainer = document.getElementById('image-link');
        var img1 = document.createElement('img');
        myImg = myImg.replace(/['"]/g, '');
        img1.setAttribute('src', myImg);
        imageContainer.append(img1);
        
        //column 3 info
        document.getElementById('barking').innerHTML = ('Barking:' + data[0].barking);
        document.getElementById('drooling').innerHTML = ('Drooling:' + data[0].drooling);
        document.getElementById('energy').innerHTML = ('Energy:' + data[0].energy);
        document.getElementById('child-friendly').innerHTML = ('Child Friendly:' + data[0].good_with_children);
        document.getElementById('maxage').innerHTML = ('Max age:' + data[0].max_life_expectancy);
        document.getElementById('playfulness').innerHTML = ('Playfulness:' + data[0].playfulness);
        document.getElementById('protective').innerHTML = ('Protective:' + data[0].protectiveness);
        document.getElementById('shedding').innerHTML = ('Shedding:' + data[0].shedding);
        document.getElementById('trainability').innerHTML = ('Trainability:' + data[0].trainability);
        
        })

        

// var dogBreed = "https://api.api-ninjas.com/v1/dogs?name="+breed;
// var dogEnergy = "https://api.api-ninjas.com/v1/dogs?energy="+energy;

//document.getElementById('barking').innerHTML = ('Barking:' +data.list[0].barking);




// function searchFormSubmit(event) {
//     event.preventDefault();
//     var zipCode = $('.input').val();
//     var dogAge = $('#dog-age').val();
//     var dogSize = $('#dog-size').val();
//     var gender = $('#gender').val();

//     fetch(petFinderURL + '&size=' + dogSize + '&age=' + dogAge + '&gender=' + gender + '&location=' + zipCode, { headers: { 'Authorization': 'Bearer ' + access_token } })
//             .then(function (response) {
//                     return response.json();
//             })
//             .then(function (data) {

//                     console.log(data);
//             })

// }

// searchBtn.on('click', searchFormSubmit)

var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogID = searchParamsArr[0].split('=')[1];
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi&client_secret=0lu8umPP2fDm04fyPgehlUvX8qObWDU2wT5jMUQH";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjJiNWExYzA2N2Y1YzYxMzZlYzg0N2ZjOWFjN2MyODczOGNhMzc3NDUxZjk3N2E4ZjllZGYxYWNlNDgwNzI0Mzk4MDA0Y2RmYjMzNDMwY2I5IiwiaWF0IjoxNjc2MDQwNjkyLCJuYmYiOjE2NzYwNDA2OTIsImV4cCI6MTY3NjA0NDI5Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.vsMAphOF03Po4eCl-NQy5_z8xa0Ee306YgVUX5O8wfDyEYe0GzgP1wHLSZonAVoDj9qmqucW-OMYNY3Y9iol4Ii3DaXhW-08GPKjq4fRmkLHFzwd8wvhp_TETnqfEhJ7ieud_4Qza0Ypo8Qtj5oLvr7XDpHx8_W49anfJ9S4Zh1Iy1tbJfqSF-PKVx2-KSdK0x6_PnbKKgH-P6vS5MfP7G13Ttcr2lF_0OlYyZPygN4RJ9Dn9DQFOkJxvCMaTjsKv4_2PcRPWOjqIoY5JiYiwnUq1_nD2kJ-_u01BpopvilZIUug-u6aSv08RJeWqPUGhwLjVGXuGlo-OKd0xJKFQg';

var petFinderOneURL = 'https://api.petfinder.com/v2/animals/' + dogID;
fetch(petFinderOneURL, { headers: { 'Authorization': 'Bearer ' + access_token } })
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                console.log(data);
                console.log(data.animal.breeds.primary);
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

///Append breed from ninja API to use breed from petfinder API
        //breed.innerText = (data.animal.breeds.primary);
        localStorage.setItem('dogBreed', (data.animal.breeds.primary)); 
        })
        
        //breedDogBreed();