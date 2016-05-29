//Start links to gallery classes
window.onload = function() {

	var homeStart = document.querySelector('#logo');
	homeStart.onclick = function() {
		startHome();
	}

	var theWorldStart = document.querySelector('#the_world');
	theWorldStart.onclick = function() {
		startWorld();
	}
}

//Arrays
var arrayPhotos = [
'world-bryggen.jpg', 'world-gamcheon.jpg', 'world-morro.jpg', 'world-rocks.jpg', 'world-tokyo.jpg'
];

///////////
//home logo
///////////
//Attaches the user's click to home logo
function startHome() {
	this.makeHome();
}

//Returns to landing page
function makeHome() {
	var resetBgHome = document.querySelector('.jumbo-gallery');
	resetBgHome.className = 'jumbo';
}

///////////
//the world
///////////
//Attaches the user's click to the Photo Gallery trigger
function startWorld() {
	this.makeWorldGallery();
	this.makeUlDiv();
	this.makeWorldUlandLi();
}

//Makes the Photo Gallery
function makeWorldGallery() {
	var resetBgGallery = document.querySelector('.jumbo');
	resetBgGallery.className = 'jumbo-gallery';

	var jumboGalleryContainer = document.createElement('div');
		jumboGalleryContainer.setAttribute('class', 'world-class');
		resetBgGallery.appendChild(jumboGalleryContainer);
}

//REUSABLE: Makes UL Div for World
function makeUlDiv() {
	var findWorldClass = document.querySelector('.world-class');

	var ulDiv = document.createElement('div');
		ulDiv.setAttribute('class', 'ul-div');

		findWorldClass.appendChild(ulDiv);
}

//Creates the World ul and li loop with data-name to image
function makeWorldUlandLi() {
	var findUL = document.querySelector('.ul-div');
	var createUL = document.createElement('ul');
	
	createUL.setAttribute('class', 'img');
	findUL.appendChild(createUL);

	for (i = 0; i < arrayPhotos.length; i++) {
		var worldLi = document.createElement('li');
		var worldLiGet = document.getElementsByClassName(arrayPhotos[i]);
		var findImg = document.querySelector('.img');

		worldLi.className = arrayPhotos[i];
		worldLi.setAttribute('data-world', arrayPhotos[i]);

		findImg.appendChild(worldLi);
		console.log(worldLiGet[i]);
		//worldLiGet[i].innerHTML = '<img src="img/'+arrayPhotos[i]+'">';
	}
}





