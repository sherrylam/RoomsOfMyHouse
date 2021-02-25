/***********************************************************************************
	Mood States
	by Sherry Lam

	Overview:
  	This is a series of rooms in my house. 
  	Get around the place by following text prompts.

------------------------------------------------------------------------------------
	Notes:
	Click doors to get into a room. Down arrow to return back to living room.

***********************************************************************************/

// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// text offset
var offset = 50;

var lineHeight;

var size = 32;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/entrance.png');
  images[1] = loadImage('assets/livingroom.png');
  images[2] = loadImage('assets/kitchen.png');
  images[3] = loadImage('assets/bedroom.png');
  images[4] = loadImage('assets/tearoom.png');
  images[5] = loadImage('assets/bathroom.png');
  images[6] = loadImage('assets/splash.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight-4);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(size);
  textFont('Roboto Slab');

  // set to one for startup
  drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(186, 219, 209);

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawSplash() will draw the image at index 6 from the array
drawSplash = function() {
  text("Welcome to Sherry's House!!!", width/2, 150);
  image(images[6], width/2, height/2);
  text("Click anywhere to enter my house", width/2, height - 150);
}

//-- drawEntrance() will draw the image at index 0 from the array
drawEntrance = function() {
  image(images[0], width/2, height/2);

  instruction();
}

//-- drawLivingRoom() will draw the image at index 1 from the array
drawLivingRoom = function() {
  image(images[1], width/2, height/2);

  instruction();
}

//-- drawKitchen() will draw the image at index 2 from the array
drawKitchen = function() {
  image(images[2], width/2, height/2);

  instruction();
}

//-- drawBedroom() will draw the image at index 3 from the array
drawBedroom = function() {
  image(images[3], width/2, height/2);

  instruction();
}

//-- drawTeaRoom() will draw the image at index 4 from the array
drawTeaRoom = function() {
  image(images[4], width/2, height/2);

  instruction();
}

//-- drawBathroom() will draw the image at index 5 from the array
drawBathroom = function() {
  image(images[5], width/2, height/2);

  instruction();
}


// Change the drawFunction variable based on your interaction
function keyPressed() {
  if( drawFunction === drawSplash ) {
    return;
  }
  // press down arrow to return to living room. if in living room, return to entrance
  if( keyCode === DOWN_ARROW ) {
    if( drawFunction === drawKitchen || drawFunction === drawBedroom || drawFunction === drawTeaRoom ) {
    	drawFunction = drawLivingRoom;
    }
    else if( drawFunction === drawLivingRoom) {
    	drawFunction = drawEntrance;
    }
  }

  else if( key === 's' ) {
    drawFunction = drawSplash;
  }
}

function mousePressed() {
  // change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = drawEntrance;
  }
  // add buttons in entrance
  else if( drawFunction === drawEntrance ) {
  	// to living room
  	if ((mouseX > width/2 - 135) && (mouseX < width/2 + 140) && (mouseY > height/2 - 180) && (mouseY < height/2 + 190)) {
  	  drawFunction = drawLivingRoom;
  	}
  }
  // add buttons in living room
  else if( drawFunction === drawLivingRoom ) {
  	// to kitchen
  	if( (mouseX > width/2 - 300) && (mouseX < width/2 - 185) && (mouseY > height/2 - 260) && (mouseY < height/2 + 75) ) {
	  drawFunction = drawKitchen;
  	}
  	// to bedroom
  	if( (mouseX > width/2 + 50) && (mouseX < width/2 + 170) && (mouseY > height/2 - 175) && (mouseY < height/2 + 50) ) {
  	  drawFunction = drawBedroom;
  	}
  	// to tearoom
  	if( (mouseX > width/2 + 190) && (mouseX < width/2 + 300) && (mouseY > height/2 - 260) && (mouseY < height/2 + 120) ) {
  	  drawFunction = drawTeaRoom;
  	}
  }
  // add button in bedroom
  else if( drawFunction === drawBedroom ) {
  	// to bathroom
  	if( (mouseX > width/2 + 235) && (mouseX < width/2 + 280) && (mouseY > height/2 - 260) && (mouseY < height/2 + 220) ) {
  	  drawFunction = drawBathroom;
  	}
  }
  // add buttons in bathroom
  else if( drawFunction === drawBathroom ) {
  	// to bedroom
  	if( (mouseX > width/2 + 220) && (mouseX < width/2 + 300) && (mouseY > height/2 - 270) && (mouseY < height/2 + 220) ) {
  	  drawFunction = drawBedroom;
  	}
  	// to tearoom
  	if( (mouseX > width/2 - 300) && (mouseX < width/2 - 170) && (mouseY > height/2 - 245) && (mouseY < height/2 + 210) ) {
	  drawFunction = drawTeaRoom;
  	}
  }
  // add button in tearoom
  else if( drawFunction === drawTeaRoom ) {
  	// to bathroom
  	if( (mouseX > width/2 - 300) && (mouseX < width/2 - 170) && (mouseY > height/2 - 245) && (mouseY < height/2 + 210) ) {
	  drawFunction = drawBathroom;
  	}
  }
}

// adds instruction to go back to splash page
function instruction() {
  textSize(24);
  text("Press [s] to go back to splash page.", width/2, offset);
}