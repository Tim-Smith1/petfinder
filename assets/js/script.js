var dogBreedURL = "https://api.thedogapi.com/v1/breeds?limit=10&page=0"

fetch(dogBreedURL)
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
