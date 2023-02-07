
//  nija dogs
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

        var name = 'golden retriever'

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/dogs?name=' + name,
    headers: { 'X-Api-Key': 'T7QIScN/hE7tGLJqxcA8Aw==PVPfhpWBYaQG47WV'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});


//curl -d "grant_type=client_credentials&client_id={5PMCPqhNqHhJ0g5XCTR9ec4o6PWSrMEFZ6Dh9EcpSusg6YAqys}&client_secret={KObbObsjHVnqt4M2znIkRkogYckY71ibUD29b2CC}" https://api.petfinder.com/v2/oauth2/token
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





// Pet finder
var petFinderURL = 'https://api.petfinder.com/v2/animals';
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjZiMGM4NDhhZGNkZWQyODAyMjFmZGJiNDU0YTM1NTJhMzYzZTI0ZWFhY2Y4NjhmNmY2MDhhNTdkYjkxOGJmNjhmODg3NmJkYjk4ZmEwNzNiIiwiaWF0IjoxNjc1Nzg5NjkyLCJuYmYiOjE2NzU3ODk2OTIsImV4cCI6MTY3NTc5MzI5MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.Yxi0UgDzrXX7ST1MjMHhNE_AqPKH8QelWDvhNHVHXh7CnBUZLeJlTVRgeKReP0GSDSmJ-i9UExY1gneY8YDGWIwj3T8KEVq3GO7Te6kbd2sb4YFc253lCaBr0DYVHrnYwK-PNxt7Ue5VwR7AzjU3E5SSJT3buS-7RJJXX8y34X2fqi2pFAjdiJybSkFvcnMqDiaiJjPS5xsSqvyPN3_VIDy8Rmk2jG2P7LmuQWASC2BfGihlW_aIj0O2EJ0M7ck399vujY6HyAcrtag0nHQic61zAb-9SAH2HyuDr0hxg79JY_J0BTLlM9zLIdkuM1WR5IieXC74JM2NgQBox8T4yA';
var postalCode = "60622";
fetch(petFinderURL + '?location='+ postalCode, {headers:{'Authorization': 'Bearer ' + access_token}})
.then(function (response) {
    return response.json();
})
.then(function (data) {

    console.log(data);
})

// relavant data:
// petFinderInfo = {

// }
