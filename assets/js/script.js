var dogBreedURL = "https://api.thedogapi.com/v1/breeds?limit=10&page=0"

fetch(dogBreedURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
console.log(data);
        });
