
var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogSize = searchParamsArr[0].split('=')[1];
var dogAge = searchParamsArr[1].split('=')[1];
var gender = searchParamsArr[2].split('=')[1];
var zipCode = searchParamsArr[3].split('=')[1];


var petFinderURL = 'https://api.petfinder.com/v2/animals?type=dog';
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjEzY2MwYTNiMjliNGZhYzIwMDA0M2E1N2FmOTM0YjAzZTYwOGMyZDRjZjQ4ODRlZTY1Y2Q3MDcwNTA4YzNlMzZhNmI1YjE1NzQzMzM4ZWEwIiwiaWF0IjoxNjc1ODkyODE4LCJuYmYiOjE2NzU4OTI4MTgsImV4cCI6MTY3NTg5NjQxOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.TiTomLx8Dpn0FkvvfS37NVRT9AbteSeyratotBef_OnE1f_Q4Jl066ZpytkDkszpCgu-7iZpS08f64KBBaGFhQM4s6A8pD1EjKe86Kf7gqy4662vq1gf1DS3sR2UrbqZAmoYRNJHt3Pt_cp8MWX5Kn4ZhDnZHbXyfLGeTKjaVhe6RIX6q-f2WS3LQKhedB-khw0SwpDXrf0eLczS_OdxlAd15N5pHAkVF7bPCGUu2xkF-tmoL2M1TdNCAVJQwKEP2K69WJVoFQNlQZX5tkruat8MqrDf2BaEXOGIYGlP6rfztGoKD8zBIgkoov5b0AWW4ZFmjwlfdCmEsI6oWc8NWw';

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
console.log($(this));
$(this).children().children().toggleClass('fa-solid');

if ($(this).children().children().contains('fa-solid')) {
        console.log("favorite");
}

})


    // dogFacts = {
        //     breeds: data.animals[i].breeds,
        //     attributes: data.animals[i].attributes,
        //     contact: data.animals[i].contact,
        //     name: data.animals[i].name,
        //     picture: data.animals[i].primary_photo_cropped.medium,
        //     environment: data.animals[i].environment,
        // }

  


        
