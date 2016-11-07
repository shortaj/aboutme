'use strict';

var userName = prompt('What\'s your name?');
alert ('Hi, ' + userName + '! Welcome to my about me page.');

function answers(q) {

  q = 0;

  var pet = prompt('Do you think I have a dog?').toUpperCase();
  if (pet === 'YES') {
    alert('Correct! I have a dog named Vincent.');
    q++;
    alert('Your score is now ' + q + ' out of 5.');
    console.log(q);
  } else if (pet === 'NO') {
    alert('False! I have a dog named Vincent.');
  } else {
    alert('I didn\'t understand your answer.');
    };

    var diet = prompt('Am I a vegan?').toUpperCase();
    if (diet === 'YES') {
      alert('You are right!');
      q++;
      alert('Your score is now ' + q + ' out of 5.');
    } else if (diet === 'NO') {
      alert('False!');
    } else {
      alert('Your answer didn\'t make sense to me.')
    };

    var homeState = prompt('True or false: I am from Montana.').toUpperCase();
    if (homeState === 'TRUE') {
      alert('You are correct!');
      q++;
      alert('Your score is now ' + q + ' out of 5.');
    } else if (homeState === 'FALSE') {
      alert('Incorrect!');
    } else {
      alert('Your answer doesn\'t make sense.');
    }

    var computer = prompt('Do you think I\'m a Windows or Mac person?').toUpperCase();
    if (computer === 'WINDOWS') {
      alert('Correct! I am a Windows girl.');
      q++;
      alert('Your score is now ' + q + ' out of 5.');
    } else if (computer === 'MAC') {
      alert('False! I prefer Windows.');
    } else {
      alert('I didn\'t quite understand that answer.');
    }

    var phone = prompt('Do you think I have an Android phone or an iPhone?').toUpperCase();
    if (phone === 'IPHONE') {
      alert('False, I prefer Android phones.');
    } else if (phone === 'ANDROID') {
      alert('Correct!');
      q++;
      alert('Your score is now ' + q + ' out of 5.');
    } else {
      alert('That answer didn\'t make sense.')
    }

  alert('Your final score is ' + q + ' out of 5.');
}

answers();

function numberGuess(i) {

  i = 0;

var numberGuess = prompt('Let\'s play a number guessing game! What number am I thinking of?');
var userAnswer = numberGuess;
  if (parseInt(userAnswer) === 32 ) {
    alert('Correct!');
    console.log('You got the right answer!');
  } else if (parseInt(userAnswer) > 32) {
    i++;
    alert('Too high. This is the ' + i + '/4 attempts.');
  } else if (parseInt(userAnswer) < 32){
    i++;
    alert('Too low. This is the ' + i + '/4 attempts.');
  } else if (userAnswer === null) {
    alert('Please play the game.');
  } else {
    alert('Numbers please.')
    i++;
  }
}

numberGuess();
