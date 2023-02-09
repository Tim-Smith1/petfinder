
//dogs API 
// var ninjaDogURL =  'https://api.api-ninjas.com/v1/dogs?name=' + breed;

// var breed = 'pitbull';

var ninjaDogKey = "oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6"
var breed = "golden";
var energy = "3";
var ninjaDogURL = "https://api.api-ninjas.com/v1/dogs?name=" + breed;// + '&energy=' + energy;

//var barking = document.getElementById('barking').innerHTML;



fetch(ninjaDogURL, {headers:{'X-Api-Key': 'oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6'}})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        console.log(data);

var myImg = JSON.stringify(data[0].image_link);

//         function GFG_Fun() {
//                 var img = document.createElement('img');
//                 img.src =
//                 myImg;
//     //'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
//                 document.getElementById('image-link').appendChild(img);
                
//         }

        
//GFG_Fun();
        //myImg.src = JSON.stringify(data[0].image_link);
        console.log(myImg);
        //myImg.src = ('<img src=\'' + (data[0].image_link) + '\' alt="Placeholder image">');
        var imageContainer = document.getElementById('image-link');
        var img1 = document.createElement('img');
        img1.setAttribute('src', myImg);
        imageContainer.append(img1);
        console.log(img1);
        //console.log('<img src=\'' + (data[0].image_link) + '\' alt="Placeholder image">');
        
        //document.getElementById('image-link').appendChild(img);

        
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

        

var dogBreed = "https://api.api-ninjas.com/v1/dogs?name="+breed;
var dogEnergy = "https://api.api-ninjas.com/v1/dogs?energy="+energy;


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
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6ImEwYzhkMTcwNTRlZDIyY2Q1MGVmMGMxMzJiZTYxMzBkNTM4ZWRhZWU2YWE4OWM0ZThiZGVlZjc2NjU3NGQ5ODAyYTE4NmE2NDFkYmZmMmJmIiwiaWF0IjoxNjc1OTU2ODE0LCJuYmYiOjE2NzU5NTY4MTQsImV4cCI6MTY3NTk2MDQxNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.HokvqiIBTyCw8u4rBQBD6jn5O-dyT4MFaKAcLeZUQBwlXRjD8HKW_Q5Fo7eVTi15prvvqXcaeiH1HG13q0bAOgcHcVsBUKi1zalxr8rNb6HDBX-XZ1E6YAEt9B8RKTSHPRw8LKQQnsbhrcs_sMPfM4lNnfI-4at84PZKoEWBEvWcRjj0TA6fl84I-OEu42PbE2gggNQgyvqSxNQuQUzpiN8pZHT0Kbu8jOyfBMT-h3MzSY4hZxrY8N1NH8snV1sLpsJ4FTrN3EuBEkvaMkdjL_V9bZ4HBXyEXVmGXATehxnY7jBe1s_du4_o8Urbg8flSsYv0gcg-A3_4XIXi9Xghw';

var petFinderOneURL = 'https://api.petfinder.com/v2/animals/' + dogID;
fetch(petFinderOneURL, { headers: { 'Authorization': 'Bearer ' + access_token } })
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                console.log(data);
        })