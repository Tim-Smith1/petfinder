



//dogs API 
//sample URL https://api.api-ninjas.com/v1/dogs?name=

var name = 'golden retriever'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/dogs?name=' + name,
    headers: { 'X-Api-Key': 'oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});



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