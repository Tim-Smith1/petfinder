
// //  nija dogs
// var nijaDogKey = "mdyq9NKoVyj8PyZs+WRkkQ==IML8Igs43m66eDga"
// var breed = "yorkshire terrier"
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

var searchBtn = $('#searchBtn');



function searchFormSubmit(event) {
        event.preventDefault();
        var zipCode = $('.input').val();
        var dogAge = $('#dog-age').val();
        var dogSize = $('#dog-size').val();
        var gender = $('#gender').val();

        fetch(petFinderURL + '&size=' + dogSize + '&age=' + dogAge + '&gender=' + gender + '&location=' + zipCode, { headers: { 'Authorization': 'Bearer ' + access_token } })
                .then(function (response) {
                        return response.json();
                })
                .then(function (data) {

                        console.log(data);
                })

}

searchBtn.on('click', searchFormSubmit)


// Pet finder
var petFinderURL = 'https://api.petfinder.com/v2/animals?type=dog';
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjkyYmNlN2M4OWQ2NzljMzI4NDkxYmRhMGVkNmZhMDZhMmI4MGI5YTAzNWU4MzFhMmJlMzI0ZmE5NDFhODQzMzkwOTMxOTE5MTEwOWYxOWY4IiwiaWF0IjoxNjc1ODc3MDQ0LCJuYmYiOjE2NzU4NzcwNDQsImV4cCI6MTY3NTg4MDY0NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.ZOoLfbx2XCpbMmZDSfTIeOBmQgBjIVqpT3UiaxE48T6PuhVj96vaSPAzqbyXk4SSUHMM7OgsZjl9IMHtbc5Y1xcpJhK3icvZLlfBZpVx95A7AVr0Sg0oyU7trquwHt-W6aGrY6WkxLuEKqmKwt9J999fazrqEo0yfiy3RTESvAs7ptpvjOYRunrz1Gmj4pqHuaF_tjxHE3GpDdOf55KfE1Z_5nzNiUfaScQPPaDdTOMczRsrmzP_-ShIdldyIYzkdvFcsroDkYG6RPJXEOoOhspaFJ6x0Bw-YxMZ-e0LSTp-msDKGQw6ieCrd5lv3veTKOAcTLNq0bAv_znpvrsA8w';




// relavant data:
// petFinderInfo = {

// }

// var dogFacts = {
// age: data[i].age,
// breeds:  
// }

