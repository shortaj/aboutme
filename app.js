'use strict';

var userName = prompt('What\'s your name?');
alert ('Hi, ' + userName + '! Welcome to my about me page. Lets play a guessing game!');

function guessingQuiz() {

var pet = prompt('What kind of pet do you think I have?').toUpperCase;

if (pet === 'dog') {
  alert ('You are correct! I have a French bulldog.')
} else { alert ('That is not correct. I have a dog.')
}

var diet = prompt('True or false: I am a vegan.');
if (diet === true) {
  alert('Correct!')
} else {
  alert('Incorrect! I am a vegan.')}
}

var homeState = prompt('True or false: I am a from Montana.');
if (homeState === 'true') {
  alert('Correct!')
} else { alert('Incorrect! I am from Montana.')
}

var computer = prompt('Do you think I\'m a Windows or Mac person?');
if (computer == 'Windows') {
  alert('Correct! I am a Windows girl.')
} else if (computer == 'Mac') {
  alert('False! I prefer Windows.')
} else {
  alert('I didn\'t quite understand that answer.')
};

var phone = prompt('Do you think I have an Android phone or an iPhone?');
if (phone == 'iPhone') {
  alert('False, I prefer Android phones.')
} else if (phone == 'Android') {
  alert ('Correct!')
}



guessingQuiz();
