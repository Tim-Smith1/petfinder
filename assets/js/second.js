
var searchParamsArr = document.location.search.split('&');
console.log(searchParamsArr);
var dogSize = searchParamsArr[0].split('=')[1];
var dogAge = searchParamsArr[1].split('=')[1];
var gender = searchParamsArr[2].split('=')[1];
var zipCode = searchParamsArr[3].split('=')[1];


var petFinderURL = 'https://api.petfinder.com/v2/animals?type=dog';
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjdhYmZjOTlkOTljNzFjMWIxMmUzYjc1MTcwNTM0MTBmNTEyNGMzMDY1YWZhZWEyYjRkMWE2MTI4MzUwYTA1OThlNjA0MzA5NzkyMDNmZDg0IiwiaWF0IjoxNjc1ODk2ODY2LCJuYmYiOjE2NzU4OTY4NjYsImV4cCI6MTY3NTkwMDQ2Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.AQPqzMODp-Lp036kGEE9BERehjVDXN5JU955hJqR0ih2pRljeye--jft6mmIaPLR0j6AGQDHysHqJ89qwz591Bhku7pEtI4BFqmzIn9auhfkKOKbIuIGrPwjSCI0RvAZFJ_mgdJOs6_5UvCVESjJXSDago-IvlxWG7BsR0Aeb4hbSJnKGm2NGt4X6_YYJNx1mrjgH4B_Wi0zk8ptijA_Tda5DkcLbTC6iZIOrahqvTU8OCl85JgO4VT_Fm6-wBBZrezT9zIgNPwL3EfoeZ3Lxdtae-Y-bjXaVymDl33Z8nkVMeprdXT9BZAcEL0gvG536HAJfBJsumqqh7Lf7V0tpw';

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


})


    // dogFacts = {
        //     breeds: data.animals[i].breeds,
        //     attributes: data.animals[i].attributes,
        //     contact: data.animals[i].contact,
        //     name: data.animals[i].name,
        //     picture: data.animals[i].primary_photo_cropped.medium,
        //     environment: data.animals[i].environment,
        // }

  


        
