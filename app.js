// 'use strict';
//
// var userName = prompt('What\'s your name?');
// alert ('Hi, ' + userName + '! Welcome to my about me page.');
//
// function answers(correctAnswers) {
//
//   correctAnswers = 0;
//
//   var pet = prompt('Do you think I have a dog?').toUpperCase();
//   if (pet === 'YES') {
//     alert('Correct! I have a dog named Vincent.');
//     correctAnswers++;
//     alert('Your score is now ' + correctAnswers + ' out of 5.');
//     console.log(correctAnswers);
//   } else if (pet === 'NO') {
//     alert('False! I have a dog named Vincent.');
//   } else {
//     alert('I didn\'t understand your answer.');
//     };
//
//     console.log('Do you think I have a dog?');
//     console.log(pet);
//
//     var diet = prompt('Am I a vegan?').toUpperCase();
//     if (diet === 'YES') {
//       alert('You are right!');
//       correctAnswers++;
//       alert('Your score is now ' + correctAnswers + ' out of 5.');
//     } else if (diet === 'NO') {
//       alert('False!');
//     } else {
//       alert('Your answer didn\'t make sense to me.')
//     };
//
//     console.log('Am I a vegan?')
//     console.log(diet);
//
//     var homeState = prompt('True or false: I am from Montana.').toUpperCase();
//     if (homeState === 'TRUE') {
//       alert('You are correct!');
//       correctAnswers++;
//       alert('Your score is now ' + correctAnswers + ' out of 5.');
//     } else if (homeState === 'FALSE') {
//       alert('Incorrect!');
//     } else {
//       alert('Your answer doesn\'t make sense.');
//     }
//
//     console.log('True or false: I am from Montana.');
//     console.log(homeState);
//
//     var computer = prompt('Do you think I\'m an Apple person?').toUpperCase();
//     if (computer === 'YES') {
//       alert('False! I am a Windows girl.');
//       correctAnswers++;
//       alert('Your score is now ' + correctAnswers + ' out of 5.');
//     } else if (computer === 'NO') {
//       alert('True! I prefer Windows.');
//     } else {
//       alert('I didn\'t correctAnswersuite understand that answer.');
//     }
//
//     console.log('Do you think I\'m an Apple person?');
//     console.log(computer);
//
//     var phone = prompt('Do you think I have an Android phone?').toUpperCase();
//     if (phone === 'NO') {
//       alert('False, I prefer Android phones.');
//     } else if (phone === 'YES') {
//       alert('Correct!');
//       correctAnswers++;
//       alert('Your score is now ' + correctAnswers + ' out of 5.');
//     } else {
//       alert('That answer didn\'t make sense.')
//     }
//
//     console.log('Do you think I have an Android phone?');
//     console.log(phone);
//
//   alert('Your final score is ' + correctAnswers + ' out of 5.');
//
//   console.log('Final score: ' + correctAnswers);
// }


function numberGuessingGame(){
  for (var i = 1; i < 5; i++) {
    var userAnswer = prompt('Let\'s play a number guessing game! What number am I thinking of?');

    if (parseInt(userAnswer) === 32 ) {
      alert('Correct!');
      alert('You got the right answer!');
      break;
    } else if (parseInt(userAnswer) > 32) {
      alert('Too high.');
    } else if (parseInt(userAnswer) < 32){
      alert('Too low.');
    }
    if (i === 4){
      alert('Bummer! You used up all of your tries. The number was 32.');
      break;
    }

  }
}

numberGuessingGame();

// answers();
