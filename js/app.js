//Start Photo Gallery
window.onload = function() {
	console.log('loaded');

	var photoGalleryStart = document.getElementById('photo-gallery');
	photoGalleryStart.onclick = function() {
		startPhoto();
	}
}

//Attaches the user's click to the Photo Gallery trigger
function startPhoto() {
	console.log('start photo gallery')
	this.makePhotoGallery();
}


//Photo Gallery div array
var photoDivArray = ['1', '2', '3', '4'];
//Makes the Photo Gallery
function makePhotoGallery() {

	var jumboPhoto = document.querySelector('#jumbo-photo')
	jumboPhoto.innerHTML = '';
	console.log('cleared');

	for (var i = 0; i < photoDivArray.length; i++) {
		var divCreate = document.createElement('div');
		divCreate.setAttribute('class', 'photo-class');
		divCreate.setAttribute('data-value', photoDivArray[i]);
		jumboPhoto.appendChild(divCreate);
		divCreate.addEventListener('click', function(event) {
			var clickedHere = this;
			openPhoto(clickedHere);

		})

	}
	console.log('created divs')
}

function openPhoto(photo) {
	console.log('gonna open the photo soon')
}
