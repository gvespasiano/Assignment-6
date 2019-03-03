//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt;

//While loop console log of speeches
	i = 0;
	while (i<speechesArray.length){
		console.log("This is written by "+speechesArray[i].author);
		i++;
	};
	
document.getElementById('BtnDonate').addEventListener('click', function(){
  //For loop of favorites
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');

  for(var i = 0; i < speechesArray.length; i++) {
	  if(favoriteSpeechPrompt === speechesArray[i].author){
	  	console.log(speechesArray[i].author + " was " + speechesArray[i].authorAge + " when he wrote this speech!")
	  }
  }
});

//Variables for oldest and newest

var oldestSpeech = speechesArray[0].year;
var earliestSpeech = speechesArray[0].year;

for(i=0; i<speechesArray.length; i++){
	if(speechesArray[i].year > earliestSpeech){
		var earliestSpeech = speechesArray[i].year
	};
};
for(i=0; i<speechesArray.length; i++){
	if(speechesArray[i].year < oldestSpeech){
		var oldestSpeech = speechesArray[i].year
	};
};

console.log("The oldest speech was written in " + oldestSpeech);
console.log("The earliest speech was written in " + earliestSpeech);


document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].year === oldestSpeech){
  	console.log("This is the oldest speech on the page.");
  } else if(speechesArray[0].year === earliestSpeech){
  	console.log("This is the most recent speech on the page.");
  } else {
  console.log("It is neither the oldest nor the latest of our speeches.");
   }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].year === oldestSpeech){
  	console.log("This is the oldest speech on the page.");
  } else if(speechesArray[1].year === earliestSpeech){
  	console.log("This is the most recent speech on the page.");
  } else {
  console.log("It is neither the oldest nor the latest of our speeches.");
   }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].year === oldestSpeech){
  	console.log("This is the oldest speech on the page.");
  } else if(speechesArray[2].year === earliestSpeech){
  	console.log("This is the most recent speech on the page.");
  } else {
  console.log("It is neither the oldest nor the latest of our speeches.");
   }
});


userNamePrompt = window.prompt('Hello, what is your name?');

if(typeof userNamePrompt === 'string' && userNamePrompt !== ''){
  console.log('Hi ' + userNamePrompt + '!');
}else{
  console.log('Ok, I\'ll just call you User.');
  userNamePrompt = 'User';
}