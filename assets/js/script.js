
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

// Pet finder
// var petFinderURL = 'https://api.petfinder.com/v2/animals';
// var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
// var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6Ijk1ZjI0ZjYwMjcxNTk3MDg5MWVhNmM4NDAxZWNiZGI3NDkyNTdjZDRkMDdkNTViYWUwN2I2OWUxMTQxZGVkOTU5MTExNTE2ZTQ1ODAyNGE3IiwiaWF0IjoxNjc1NzMyNjM2LCJuYmYiOjE2NzU3MzI2MzYsImV4cCI6MTY3NTczNjIzNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.uz1dAhTj-7hWjsqoIP3hMzksIVJTqoLL53KbASfm_XnoRgD3YejpuDygOD279pvlbGXbwNr2vN5jVTcMbbOTajOfROIs1cjRTF-XNSv_8u3nZdelQerdueHNFLv6OFUpQqL56mZtmTqRT7TuTAQmgPCLXjLu7METJXFoVuHxSVGymZJY9SV7rbTXnzHcvAJh44cahmE6Y_TY2LZjzqL4HRLMyCma4XUChR2qd1tUb6KrMkO9QWJNIXD8CEvIBwATRm1VDkQAb-Sb73EccAHhnki-JL7Xiedi13VdDp6ad-gqcvJr1Y5IYxJxFjBu1R1zojD6n7epk1yLoWhobkjj7A';
// var postalCode = "60622";
// fetch(petFinderURL + '?location='+ postalCode, {headers:{'Authorization': 'Bearer ' + access_token}})
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {

//     console.log(data);
// })