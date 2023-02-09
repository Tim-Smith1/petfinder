
var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogSize = searchParamsArr[0].split('=')[1];
var dogAge = searchParamsArr[1].split('=')[1];
var gender = searchParamsArr[2].split('=')[1];
var zipCode = searchParamsArr[3].split('=')[1];


var petFinderURL = 'https://api.petfinder.com/v2/animals?type=dog';
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjliZDlkMTgzOGFmOGJjMzQyMjI2YmFmYWMxYjgwMTExNjhhNTE3OTQ2MGExNjdjNjg3MzQ3NTVlMjEzMzVmMDY2ODdlMTUxMWVlYmZkY2UwIiwiaWF0IjoxNjc1OTAwODYyLCJuYmYiOjE2NzU5MDA4NjIsImV4cCI6MTY3NTkwNDQ2Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.iGgFrUAUVNyenEun-2invHXdOkjWkS3U6Uo9Ha8TPZs4AURPoT2lluE_cE9g0q1cDKLlDQoNu9K5yuoYRyl8VHzoPrBreEb_yAjn8t_OM-E-aqNK1ZKpSI-67q9LMbQ7WzSN5axgj4jOU-POxIVg0zhr8ELQV9Fmmb9V7Z8qVpdsMxxC_ES-aTTfIlWBZoJcy2JnZxt6G65nDs2QhfgwWXWMH8Rn_wM7blq3evIFqEZFTmRASWV_S53B_-ZCiDuYT5oolXxtNwhxqiygAdwmtYqfMc4od-rgKmMKPKHL48n-r0r6wxRGL19zGeooqSBNcdL72NTxPn4sTzJ3S3g3oQ';

fetch(petFinderURL + '&size=' + dogSize + '&age=' + dogAge + '&gender=' + gender + '&location=' + zipCode, { headers: { 'Authorization': 'Bearer ' + access_token } })
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
        console.log(data.animals);
for (var i = 0; i < data.animals.length; i++) {
        if (data.animals[i].primary_photo_cropped !== null) {
                var searchResults = $('#searchResults');
                var dogCard = $("<div>");
                dogCard.addClass('card dogCards');
                dogCard.attr('data-id', data.animals[i].id);
                var dogImg = $('<div>');
                dogImg.addClass('card-image')
                dogCard.append(dogImg);
                var figureEl = $('<figure>');
                figureEl.addClass('image');
                dogImg.append(figureEl);
                imgEl = $('<img>');
                imgEl.attr('src', data.animals[i].primary_photo_cropped
                .medium);
                figureEl.append(imgEl);
                var dogInfo = $('<div>');
                dogInfo.addClass('card-content');
                dogCard.append(dogInfo);
                var dogName = $('<h2>');
                dogName.addClass('title is-4')
                dogName.text(data.animals[i].name);
                dogInfo.append(dogName);
                var listEl = $('<ul>');
                dogInfo.append(listEl);
                var breed = $('<li>');
                breed.text("Primary breed: " + data.animals[i].breeds.primary);
                listEl.append(breed)
                var city = $('<li>');
                city.text = (data.animals[i].contact.address.city)
                listEl.append(city)
                var zip = $('<li>');
                zip.text("Postal code: " + data.animals[i].contact.address.postcode);
                listEl.append(zip);
                var favBtn = $('<button>');
                favBtn.addClass('button favBtn');
                dogCard.append(favBtn);
                var span = $('<span>');
                span.addClass('icon');
                favBtn.append(span);
                var icon = $('<i>')
                icon.addClass('fa-regular fa-heart');
                span.append(icon);
                var viewBtn = $('<button>');
                viewBtn.addClass('button viewBtn');
                viewBtn.text("view full bio");
                dogCard.append(viewBtn);
                searchResults.append(dogCard);
        }


                
}})

var searchResults = $('#searchResults');
searchResults.on('click', '.favBtn', function(){
console.log($(this).parent().attr("data-id"));
$(this).children().children().toggleClass('fa-solid');

})

var id = 59889330;
var petFinderOneURL = 'https://api.petfinder.com/v2/animals/' + id;
fetch(petFinderOneURL, { headers: { 'Authorization': 'Bearer ' + access_token } })
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
        console.log(data);})

    // dogFacts = {
        //     breeds: data.animals[i].breeds,
        //     attributes: data.animals[i].attributes,
        //     contact: data.animals[i].contact,
        //     name: data.animals[i].name,
        //     picture: data.animals[i].primary_photo_cropped.medium,
        //     environment: data.animals[i].environment,
        // }

  


        
