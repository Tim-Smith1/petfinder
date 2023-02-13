# petfinder
[deployed application](https://nuvirtfsfft01-opj2621.slack.com/archives/C04NXPBE0Q2/p1675974002512699)


## Description

This is an application designed to help a user search for a rescue dog based on their location. 

Users can also search by dog age, size and gender. 

* As a user, I want to be able to search for dogs near me, and then learn more about the breed of those dogs.

* We utilized PetFiner's API for our dog search. 

* NinjaDog's API to gather information about differnt dog breeds.

* We used jQueary in out javascript.

* we used Bulma's css library to style our application. 


## Usage

GIVEN a search input with zipcode, dog age, dog size and dog gender
WHEN a user searches for a dog
THEN they are presented with a list of dogs available for adoption meeting their search peramiters
WHEN the user clicks to view full bio
THEN they are presented with the breed information about that dog, contact information for the adoption agency, and a brief bio about that dog. 
WHEN the user favorites a dog
THEN that search is added to the favorites section on the home page, and the dog bio page.

## Instructions

before running the code, you will need to request an access code from petfinder. Run the following command in your terminal:

curl -d "grant_type=client_credentials&client_id=vlhqQw3I1th5yoCvFcQJDga3QwH9nYp3faRaS2SK3Ckw8vuHsi&client_secret=0lu8umPP2fDm04fyPgehlUvX8qObWDU2wT5jMUQH" https://api.petfinder.com/v2/oauth2/token

and then update the access code on scrip.js, second.js and script3.js

## Authors

Tim Smith
[Tim-Smith1](https://github.com/Tim-Smith1)


Ricardo Rangel
[R-Rangel](https://github.com/R-Rangel)

Allison Nault
[allisonnault](https://github.com/allisonnault)

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Photos:
![Screen Shot 2023-02-10 at 11 04 09 AM](https://user-images.githubusercontent.com/122688372/218157969-f371a4a7-d08e-44d6-8e63-c85526f8e4f4.png)
![Screen Shot 2023-02-10 at 11 06 16 AM](https://user-images.githubusercontent.com/122688372/218157967-38408788-1b64-44ac-bc50-3de9b7fbc4c5.png)
![Screen Shot 2023-02-10 at 11 30 26 AM](https://user-images.githubusercontent.com/122688372/218157963-da2ad2f1-1f6c-4040-bbe0-4a18ef2447d9.png)


