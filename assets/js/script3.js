var searchParamsArr = document.location.search.split('&');
var dogID = searchParamsArr[0].split('=')[1];

var petFinderKey = "4z5js4u2Bie6Gn4LK2v6IjeXiCEHN7QjMerLwamf5MbkXyBllB";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0ejVqczR1MkJpZTZHbjRMSzJ2NklqZVhpQ0VITjdRak1lckx3YW1mNU1ia1h5QmxsQiIsImp0aSI6IjY5NGQ3OGVhZTdjNjE0NjFhY2MzNzMzNjQwNzE5YWUxMzAwMGJmNzRmOGUyODVjYTMxMzJjMWYxNmQ0ZjcwZWQ0YWY0NjAzM2VmMjQ4MTNlIiwiaWF0IjoxNjc2MDYwNDg4LCJuYmYiOjE2NzYwNjA0ODgsImV4cCI6MTY3NjA2NDA4OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.Vk5VPRG9X2EcdC0DKKiWdfxXYtFaEgkNud3UxGUfToR5T5iO0BZR-qB5iGa2ENFwcIlIdEdfvivMg-_Hn6UyD5i11nxaQQl7QSdMuotHYwxDHCxO9UjS_ec5R0HfD_jE60Eii42jzLM4pAv7bjCDL2c5muWX_zP3I2E60UR7ejY7qWurdWyaL33q6qIPgr_bIsgxhk_IoXm0qWVlJPmQQrXBcNzpgtAAX1Fi8Jr9cH-HUzujeghB3YtqeXzE4SnVQF_Z9uDxDPrigAGfQwwePyOSXiTc2g42adla3Fa4qiURdcwnPHZGqLLyfMRdqUpyoyf7ochrdf3rfNtxQsZEWA';

var ninjaDogKey = "oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6"
var breed;

function dogBreedInfo(){
var ninjaDogURL = "https://api.api-ninjas.com/v1/dogs?name=" + breed;
fetch(ninjaDogURL, {headers:{'X-Api-Key': 'oeZRCFASXWqpKLVdC4S1qg==0vv7FTjSoPeONrA6'}})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        
        // column 3 image
        var myImg = JSON.stringify(data[0].image_link);
        var imageContainer = document.getElementById('image-link');
        var img1 = document.createElement('img');
        myImg = myImg.replace(/['"]/g, '');
        img1.setAttribute('src', myImg);
        imageContainer.append(img1);
        
        //column 3 info
        document.getElementById('barking').innerHTML = ('Barking: ' + data[0].barking);
        document.getElementById('drooling').innerHTML = ('Drooling: ' + data[0].drooling);
        document.getElementById('energy').innerHTML = ('Energy: ' + data[0].energy);
        document.getElementById('child-friendly').innerHTML = ('Child Friendly: ' + data[0].good_with_children);
        document.getElementById('maxage').innerHTML = ('Max age: ' + data[0].max_life_expectancy);
        document.getElementById('playfulness').innerHTML = ('Playfulness: ' + data[0].playfulness);
        document.getElementById('protective').innerHTML = ('Protective: ' + data[0].protectiveness);
        document.getElementById('shedding').innerHTML = ('Shedding: ' + data[0].shedding);
        document.getElementById('trainability').innerHTML = ('Trainability: ' + data[0].trainability);
        
        })}

        


var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogID = searchParamsArr[0].split('=')[1];
var petFinderKey = "4z5js4u2Bie6Gn4LK2v6IjeXiCEHN7QjMerLwamf5MbkXyBllB";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0ejVqczR1MkJpZTZHbjRMSzJ2NklqZVhpQ0VITjdRak1lckx3YW1mNU1ia1h5QmxsQiIsImp0aSI6Ijk2Y2Q0ODBhYTRlNjEwMDNkZTgwMmEzYzNmZTU3NzM2YmIxNzFhZGI2NzgwNDA4OTgyNDMxZjM5MWVlYWRiNDBlOGU0MDRlZDJjMGNhZTE5IiwiaWF0IjoxNjc2MDU2NzYxLCJuYmYiOjE2NzYwNTY3NjEsImV4cCI6MTY3NjA2MDM2MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.riliiwhhK-HHyIee2ZCjA6qwc2vL4M4a3wBOzipHVrawHyUOiKUTAXF1z-YWXqYN5-KBS-seLOG4cAaw0uklrRXKgzRu0MASg-GFlK4pCABmJ8C4jveu-DZVb4DsNZIZArhT33bkro9QEjpkWzEPEzKH8wHfOw7_f2h9ScMMhGW4qIvkVoCrEGruPeeW2btJDsF_xASkZeo3z2VFFUkbF-MmClwF50oszr3iO68Z80Y1dA9g4Vl4KAWx7JqIf_3MmNMMetkycTXREXv0YYgsIg5Nwg9T_nsYL8Y7p8raIwSPJJ-GhESN1Uee8zRz_MmBT3XFQ2Rno48WRWqgpxxjwA';

var petFinderOneURL = 'https://api.petfinder.com/v2/animals/' + dogID;
fetch(petFinderOneURL, { headers: { 'Authorization': 'Bearer ' + access_token } })
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                
                breed = (data.animal.breeds.primary);
                dogBreedInfo();
///seleted dog center image
        $('.dog-image img').attr('src', data.animal.primary_photo_cropped.large);

////selected dog info

        var dogName = $('#dog-name');
        dogName.text(data.animal.name);

        var dogInfo = $('#dog-info');
        var dogDesc = $('<li>');
        dogDesc.text(data.animal.description);
        dogInfo.append(dogDesc);
        
        var dogBreed = $('<li>');
        dogBreed.addClass = ('card dogBreed');
        dogBreed.text(data.animal.breeds.primary);
        dogInfo.append(dogBreed);
                
        var dogEmail = $('<li>');
        dogEmail.text(data.animal.contact.email);
        dogInfo.append(dogEmail);

        var dogPhone = $('<li>');
        dogPhone.text(data.animal.contact.phone);
        dogInfo.append(dogPhone);

        var dogCity = $('<li>');
        dogCity.text(data.animal.contact.address.city)
        dogInfo.append(dogCity);
                
        })
        

        displayFavorites();
var favList = $('#favorites');
function displayFavorites() {
        var favorites = JSON.parse(localStorage.getItem('favorites'))
        for (let i = 0; i < favorites.length; i++) {
                var dogID = favorites[i];
                var petFinderOneURL = 'https://api.petfinder.com/v2/animals/' + dogID;

                fetch(petFinderOneURL, { headers: { 'Authorization': 'Bearer ' + access_token } })
                        .then(function (response) {
                                return response.json();
                        })
                        .then(function (data) {
                                var dogCard = $('<div>');
                                dogCard.addClass('card dogCards');
                                dogCard.attr('data-id', data.animal.id);
                                var dogImg = $('<div>');
                                dogImg.addClass('card-image')
                                dogCard.append(dogImg);
                                var figureEl = $('<figure>');
                                figureEl.addClass('image');
                                dogImg.append(figureEl);
                                imgEl = $('<img>');
                                imgEl.attr('src', data.animal.primary_photo_cropped
                                        .small);
                                figureEl.append(imgEl);
                                var dogInfo = $('<div>');
                                dogInfo.addClass('card-content');
                                dogCard.append(dogInfo);
                                var dogName = $('<h2>');
                                dogName.addClass('title is-4')
                                dogName.text(data.animal.name);
                                dogInfo.append(dogName);
                                var listEl = $('<ul>');
                                dogInfo.append(listEl);var viewBtn = $('<button>');
                                viewBtn.addClass('button viewBtn');
                                viewBtn.text("view full bio");
                                dogCard.append(viewBtn);
                                favList.append(dogCard);

                        });
        }
}

favList.on('click', '.viewBtn', function (){
        var dogID = $(this).parent().attr("data-id");
        location.href = './thirdpage.html?' + 'id=' + dogID;
});