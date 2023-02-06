// var dogBreedURL = "https://api.thedogapi.com/v1/breeds?limit=10&page=0"

// fetch(dogBreedURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
// console.log(data);
//         });


var nijaDogKey = "mdyq9NKoVyj8PyZs+WRkkQ==IML8Igs43m66eDga"
var breed = "yorkshire terrier"
var nijaDogURL = "https://api.api-ninjas.com/v1/dogs?name="+breed;

fetch(nijaDogURL, {headers:{'X-Api-Key': 'mdyq9NKoVyj8PyZs+WRkkQ==IML8Igs43m66eDga'}})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
console.log(data);
        });