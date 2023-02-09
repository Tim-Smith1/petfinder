var searchBtn = $('#searchBtn');
var petFinderKey = "vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi&client_secret=0lu8umPP2fDm04fyPgehlUvX8qObWDU2wT5jMUQH";
var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2bGhxUXczSTF0aDV5b0N2RmNRSkRnYTNRd0g5bllwM2ZhUmFTMlNLM0Nrdzh2dUhzaSIsImp0aSI6IjJkNzliZTM5MzI5MWIxMzE2MTg2ZjMwZjlmMDU5NWRlMDM1N2IzMmNmMGRiMDhiOGQwMTA3NjVjMDc1ZDFiZGU3YzU5YWY0ZjcyZTRkYzE1IiwiaWF0IjoxNjc1OTYxNzc5LCJuYmYiOjE2NzU5NjE3NzksImV4cCI6MTY3NTk2NTM3OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.xBv-m3L80HdnLbJjoIh28AbWR4zpeBYop3tqX-fFp7fd74hhiyCRTzz3DNdIb0RRzSHnyeWfPsCT3-9dfX4D50lHgY4dTpVOmkk6riJNV2HnBPriX_hz0z8R4SvpDyzlKgKVOsWoirEJdIpkbJBjlz-z4I1fSuhasKaetOmyOuCWYPcpGZge6PkR7iFTOWoSb9IP6ga3iXDgjDmaOuwpwBH0YPaPZ_5FdMvVQk_SA_TEK_YzLvFSe4Y_YNbE5bwgk-zLEVzXsX2B8EKPle2kCxchwRWGBji912RWJYoCqAvUGEZFmhg467WHTwB3Z0LCr7dCtWFGt8BLONiifduuVQ';


function searchFormSubmit(event) {
        event.preventDefault();
        var zipCode = $('.input').val();
        var dogAge = $('#dog-age').val();
        var dogSize = $('#dog-size').val();
        var gender = $('#gender').val();

        location.href = './secondpage.html?' + 'size=' + dogSize + '&age=' + dogAge + '&gender=' + gender + '&location=' + zipCode;

}

searchBtn.on('click', searchFormSubmit)


function init() {
        displayFavorites();
    }
    
init();



function displayFavorites(){
        var favorites = JSON.parse(localStorage.getItem('favorites'))
        for (let i = 0; i < favorites.length; i++) {
                var dogID = favorites[i];
                var petFinderOneURL = 'https://api.petfinder.com/v2/animals/' + dogID;
                
        fetch(petFinderOneURL, { headers: { 'Authorization': 'Bearer ' + access_token } })
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                console.log(data);
                for (var i = 0; i < data.animals.length; i++) {
                        if (data.animals[i].primary_photo_cropped !== null) {
                                var favList = $('#favorites');
                                var dogCard = $("<div>");
                                dogCard.addClass('card dogCards');
                                dogCard.attr('data-id', data.animals[i].id);
                                var dogImg = $('<div>');
                                dogImg.addClass('card-image')
                                favList.append(dogImg);
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
                }
                
        }
)}}