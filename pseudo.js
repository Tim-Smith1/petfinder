// relavant data:
// petFinderInfo = {

// }

// var dogFacts = {
// age: data[i].age,
// breeds:  
// }


// //  nija dogs
// var nijaDogKey = "mdyq9NKoVyj8PyZs+WRkkQ==IML8Igs43m66eDga"
// var breed = "yorkshire terrier";
// var nijaDogURL = "https://api.api-ninjas.com/v1/dogs?name="+breed;

// fetch(nijaDogURL, {headers:{'X-Api-Key': 'mdyq9NKoVyj8PyZs+WRkkQ==IML8Igs43m66eDga'}})
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
// console.log(data);
//         });

//         var name = 'golden retriever'

// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/dogs?name=' + name,
//     headers: { 'X-Api-Key': 'T7QIScN/hE7tGLJqxcA8Aw==PVPfhpWBYaQG47WV'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });


// relevant data:
// breedFacts = {
//         barking: data[0].barking,
//         drooling: data[0].drooling,
//         energy: data[0].energy,
//         goodWithChildren: data[0].good_with_children,
//         goodWithDogs: data[0].good_with_other_dogs,
//         maxHeight: data[0].max_height_male,
//         minHeight: data[0].min_height_female,
//         maxWeight: data[0].max_weight_male,
//         minWeight: data[0].min_weight_female,
//         minLifeEx: data[0].min_life_expectancy,
//         playfulness: data[0].playfulness,
//         shedding: data[0].dhedding,
//         trainability: data[0].trainability 
// }


curl -d "grant_type=client_credentials&client_id=vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi&client_secret=0lu8umPP2fDm04fyPgehlUvX8qObWDU2wT5jMUQH" https://api.petfinder.com/v2/oauth2/token
