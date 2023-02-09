
//dogs API 
// var ninjaDogURL =  'https://api.api-ninjas.com/v1/dogs?name=' + breed;

// var breed = 'pitbull';

var ninjaDogKey = "oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6"
var breed = "pit";
var energy = "3";
var ninjaDogURL = "https://api.api-ninjas.com/v1/dogs?name=" + breed;// + '&energy=' + energy;

//var barking = document.getElementById('barking').innerHTML;



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
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjE0NzE3MmMxNTUwOWE0MWVjMWQ3YmFhODJmOGUzOGZiMTg4OTcwNTdlMzkzMTA3MGViNzA0ZWNlNGMwZjk3ZjYxYTIyNGNhZWJhOWQ4OWRjIiwiaWF0IjoxNjc1OTY4MDU2LCJuYmYiOjE2NzU5NjgwNTYsImV4cCI6MTY3NTk3MTY1Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.ujheov4-mO2MtJH8_AsBiO6smr7J3Abuw3YZonoRl72vrRfJUNOSESC1RKLhzfXlI90GUljc-u4BDZPkpJZG83ZbMC8FIdnV6ShIA7soi4GkzGMGQIH9mNnXChJxY5zdWteDfeRCuajwwSZc54AZojDRopQHoPexVTCV2u4qUyJSvNuIr4Z8CPs6YWgBf4HSFZrS_zkMOLsah4hM-ez_T01Bpu-qSAUGcAzix0kn0XH5xl0bWCr532zkbYyP7FPzqattmwjac2CSnVn0i4ScNoGiarj6wrJv-h9rjgw54aQo-1yY2OggY-T20ez2Yemz6WpRRaZmq4ZYwJ8u9gwaeg';

var petFinderOneURL = 'https://api.petfinder.com/v2/animals/' + dogID;
fetch(petFinderOneURL, { headers: { 'Authorization': 'Bearer ' + access_token } })
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                console.log(data);
                console.log(data.animal.breeds.primary);

        ///seleted dog center image



        ////selected dog info





        })