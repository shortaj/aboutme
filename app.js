var userName = prompt("What's your name?");
console.log("Hi, " + userName + "! Welcome to my about me page.");

var pet = prompt("What kind of pet do you think I have?");

if pet === "dog" {
  console.log ("You are correct! I have a French bulldog.")
} else { console.log("That is not correct. I have a dog.")
}

var diet = prompt("True or false: I am a vegan.");
if diet === true {
  console.log("Correct!")
} else { console.log("Incorrect! I am a vegan.")}
}

var homeState = prompt("True or false: I am a from Montana.");
if homeState === "true" {
  console.log("Correct!")
} else { console.log("Incorrect! I am from Montana.")
}

var computer = prompt("Do you think I'm a Windows or Mac person?");
if computer == "Windows" {
  console.log("Correct! I am a Windows girl.")
} else if computer == "Mac" {
  console.log("False! I prefer Windows.")
} else {
  console.log("I didn't quite understand that answer.")
}

var phone = prompt("Do you think I have an Android phone or an iPhone?");
if phone == "iPhone" {
  console.log("False, I prefer Android phones.")
} else if phone == "Android" {
  console.log("Correct!")
}
