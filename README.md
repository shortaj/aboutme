<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>About me</title>
  </head>
  <body>

  <h1>Hello!</h1>
  <hr />
    <p>My name is Braelynn. I currently reside in Seattle. </p>
  <blockquote>
  <h2>Education</h2>
    <p>I have a journalism degree from the <em>University of Montana</em>.</p>

  <h2>Job Experience</h2>
  <ul>
    <li>I have experience working as a video editor for various YouTube channels.</li>
    <li>I also have freelance video editing experience.</li>
  </ul>
  <h2>Goals</h2>
    <p>
      I want to be working as a software engineer at a tech company.
    </p>

  </blockquote>

<script>
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

  </script>

  </body>
</html>
