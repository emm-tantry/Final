// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

let executeButton;
let outputParagraph;
let outputDiv;
let inputElement;
let executeButton2;
let outputParagraph2;
let outputDiv2;
let inputElement2;
let randomNeighborThing = ["— ran over your cat", "— helped you bring in groceries", "— watched your dog while you were gone", "— crashed into your car", "— destroyed your garden"]
let randomCoworkerThing = ["— spilled coffee on your papers", "— secretly distributes candy during meetings", "— took credit for your work", "— carried the group project"];
let randomAThing = ["— spread rumors about you", "— stole one of your cats", "— insulted your cat", "— glared at your cat"];
let randomSThing = ["— helped you pick up when fell", "— returned the wallet you dropped", "— found your lost cat"];
let randomIThing = ["— ignored you", "— called security on you"];
let randomFThing = ["— helped you move in","— helped you with rent"];

window.addEventListener('DOMContentLoaded', function() {
  outputAction1 = document.getElementById("action1");
  outputAction2 = document.getElementById("action2");
  outputAction3 = document.getElementById("action3");
  outputAction4 = document.getElementById("action4");
  outputAction5 = document.getElementById("action5");
  outputAction6 = document.getElementById("action6");

  executeButton = document.getElementById("button1");
  outputParagraph = document.getElementById("outputText1");
  outputDiv = document.getElementById("welcomeMessage");
  inputElement = document.getElementById("name-input");
  executeButton.addEventListener("click",input);

  executeButton1 = document.getElementById("rate1");
  outputParagraph1 = document.getElementById("rated1");
  outputDiv1 = document.getElementById("yours1");
  inputElement1 = document.getElementById("number-input1");
  showContinue1 = document.getElementsByClassName("continue")
  executeButton1.addEventListener("click",input1);

  executeButton2 = document.getElementById("rate2");
  outputParagraph2 = document.getElementById("rated2");
  outputDiv2 = document.getElementById("yours2");
  inputElement2 = document.getElementById("number-input2");
  showContinue2 = document.getElementsByClassName("continue2")
  executeButton2.addEventListener("click",input2);

  executeButton3 = document.getElementById("rate3");
  outputParagraph3 = document.getElementById("rated3");
  outputDiv3 = document.getElementById("yours3");
  inputElement3 = document.getElementById("number-input3");
  showContinue3 = document.getElementsByClassName("continue3")
  executeButton3.addEventListener("click",input3);

  executeButton31 = document.getElementById("alert1");
  executeButton31.addEventListener("click",input31);

  executeButton4 = document.getElementById("rate4");
  outputParagraph4 = document.getElementById("rated4");
  outputDiv4 = document.getElementById("yours4");
  inputElement4 = document.getElementById("number-input4");
  showContinue4 = document.getElementsByClassName("continue4")
  executeButton4.addEventListener("click",input4);

  executeButton5 = document.getElementById("rate5");
  outputParagraph5 = document.getElementById("rated5");
  outputDiv5 = document.getElementById("yours5");
  inputElement5 = document.getElementById("number-input5");
  showContinue5 = document.getElementsByClassName("continue5")
  executeButton5.addEventListener("click",input5);

  executeButton6 = document.getElementById("rate6");
  outputParagraph6 = document.getElementById("rated6");
  outputDiv6 = document.getElementById("yours6");
  inputElement6 = document.getElementById("number-input6");
  showContinue6 = document.getElementsByClassName("continue6");

  endOutput = document.getElementById("finalscoreoutputText");
  executeButton6.addEventListener("click",input6);
})

let currentRate1;
let currentRate2;
let currentRate3;
let currentRate4;
let currentRate5;
let currentRate6;
let currentInputText4;
let currentInputText5;

function input () {
let currentInputText = inputElement.value;
let hi = "Hi "
let rating = " thirty";
let message1 = ", welcome to Citytopia! Life here can be easy, just don't do anything crazy. As long as you can keep your rating above";
let message2 = ", you'll probably be comfortable. Ninety or higher and you could be living the life. See you around!";

outputDiv.style.fontFamily = "CMedium";

outputParagraph.innerText = hi + currentInputText + message1 + rating + message2;

let personalThing1 = randomNeighborThing[Math.floor (Math.random()*randomNeighborThing.length)];
outputAction1.innerText = personalThing1;

let personalThing2 = randomCoworkerThing[Math.floor (Math.random()*randomCoworkerThing.length)];
outputAction2.innerText = personalThing2;

let personalThing3 = randomAThing[Math.floor (Math.random()*randomAThing.length)];
outputAction3.innerText = personalThing3;

let personalThing4 = randomSThing[Math.floor (Math.random()*randomSThing.length)];
outputAction4.innerText = personalThing4;

let personalThing5 = randomIThing[Math.floor (Math.random()*randomIThing.length)];
outputAction5.innerText = personalThing5;

let personalThing6 = randomFThing[Math.floor (Math.random()*randomFThing.length)];
outputAction6.innerText = personalThing6;

}

function input1 () {
let currentInputText1 = inputElement1.value;
var theirRating1;

if (currentInputText1 >=90) {
  theirRating1 = Math.floor (Math.random() * 10 + 90); //90-100 if you rate 90-100
} else if (currentInputText1 >=80 && currentInputText1 < 90) {
  theirRating1 = Math.floor (Math.random() * 10 + 80); //80-90 if you rate 80-89
} else if (currentInputText1 >=70 && currentInputText1 < 80) {
  theirRating1 = Math.floor (Math.random() * 10 + 70); //70-80 if you rate 70-79
} else if (currentInputText1 >=60 && currentInputText1 < 70) {
  theirRating1 = Math.floor (Math.random() * 10 + 60); //60-70 if you rate 60-69
} else if (currentInputText1 >=50 && currentInputText1 < 60) {
  theirRating1 = Math.floor (Math.random() * 10 + 50); //50-60 if you rate 50-59
} else if (currentInputText1 >=40 && currentInputText1 < 50) {
  theirRating1 = Math.floor (Math.random() * 10 + 40); //40-50 if you rate 40-49
} else {
  theirRating1 = Math.floor (Math.random() * 30); //0-30 if you rate 0-39
}

  outputParagraph1.innerText = theirRating1;
  currentRate1 = Math.floor ((50 + theirRating1)/2);
  // return currentRate1;
  document.getElementById("continue").style.display = "block";
}

function input2 () {
let currentInputText2 = inputElement2.value;
var theirRating2;

let before = currentRate1;

if (currentInputText2 >=90) {
  theirRating2 = Math.floor (Math.random() * 20 + 80); //80-100 if you rate 90-100
} else if (currentInputText2 >=80 && currentInputText2 < 90) {
  theirRating2 = Math.floor (Math.random() * 10 + 70); //70-80 if you rate 80-89
} else if (currentInputText2 >=70 && currentInputText2 < 80) {
  theirRating2 = Math.floor (Math.random() * 10 + 60); //60-70 if you rate 70-79
} else if (currentInputText2 >=60 && currentInputText2 < 70) {
  theirRating2 = Math.floor (Math.random() * 10 + 50); //50-60 if you rate 60-69
} else if (currentInputText2 >=50 && currentInputText2 < 60) {
  theirRating2 = Math.floor (Math.random() * 10 + 40); //40-50 if you rate 50-59
} else if (currentInputText2 >=40 && currentInputText2 < 50) {
  theirRating2 = Math.floor (Math.random() * 10 + 30); //30-40 if you rate 40-49
} else {
  theirRating2 = Math.floor (Math.random() * 20); //0-20 if you rate 0-39
}

  outputParagraph2.innerText = theirRating2;

  randomEvent1 = Math.floor (Math.random()*50);

  alert("NOTIFICATION: Someone saw your social media and gave you a rating of " + randomEvent1 +".");

  currentRate2 = Math.floor ((before*2 + randomEvent1 + theirRating2)/4);
  document.getElementById("continue2").style.display = "block";

  if (currentRate2<30) {
    alert("Your rating is dropping! You have an average of " +currentRate2+ ". Consider changing up your strategy");
  }
  else if (currentRate2>90) {
    alert("You're doing great! Your rating average is " + currentRate2);
  }
  else {
  }
  console.log(currentRate2);
}

function input3 () {
let currentInputText3 = inputElement3.value;
var theirRating3;

let before = currentRate2;

if (currentInputText3 >=70) {
  theirRating3 = Math.floor (Math.random() * 30 + 40); //40-70 if you rate 70-100
} else if (currentInputText3 >=40 && currentInputText3 < 70) {
  theirRating3 = Math.floor (Math.random() * 20 + 20); //20-40 if you rate 40-69
} else {
  theirRating3 = Math.floor (Math.random() * 20); //0-20 if you rate 0-39
}

  outputParagraph3.innerText = theirRating3;
  currentRate3 = Math.floor ((before*4 + theirRating3)/5);
  document.getElementById("continue3").style.display = "block";
  console.log(currentRate3);
}

function input31 () {
  alert("In the next few levels, keep in mind that rating a low-rated individual highly and rating a high-rated individual poorly can cause unexpected events to occur...");
}

function input4 () {
let currentInputText4 = inputElement4.value;
var theirRating4;

let before = currentRate3;

one=Math.floor (Math.random()*30);
two=Math.floor (Math.random()*30);
three=Math.floor (Math.random()*30);

if (currentInputText4 >=55) {
  theirRating4 = Math.floor (Math.random() * 25 + 75); //75-100 if you rate 55-100
  alert("A group of passerbys were unsettled by the interaction and gave you ratings of "+ one+", "+two+", and "+three);
  outputParagraph4.innerText = theirRating4;
  currentRate4 = Math.floor (((before*5+one+two+three) + theirRating4)/9);
} else if (currentInputText4 >=40 && currentInputText4 < 55) {
  theirRating4 = Math.floor (Math.random() * 30 + 50); //50-80 if you rate 40-54
  outputParagraph4.innerText = theirRating4;
  currentRate4 = Math.floor ((before*5 + theirRating4)/6);
}
  else {
  theirRating4 = Math.floor (Math.random() * 10+30); // 30-40 if you rate 0-39
  outputParagraph4.innerText = theirRating4;
  currentRate4 = Math.floor ((before*5 + theirRating4)/6);
}

  document.getElementById("continue4").style.display = "block";
  if (currentRate4<30) {
    alert("Your rating is dropping! You have an average of " +currentRate4+ ". Consider changing up your strategy");
  }
  else if (currentRate4>90) {
    alert("You're doing great! Your rating average is " + currentRate4);
  }
  else {
  }
  console.log(currentRate4);
}

function input5 () {
let currentInputText5 = inputElement5.value;
var theirRating5;

let before = currentRate4;

one=Math.floor (Math.random()*30);
two=Math.floor (Math.random()*30);
three=Math.floor (Math.random()*30);

if (currentInputText5 >=65 && currentInputText4 >=55) {
  theirRating5 = Math.floor (Math.random() * 50); //0-50 if you rate 65-100
  outputParagraph5.innerText = theirRating5;
  currentRate5 = Math.floor ((before*9 + theirRating5)/10);
} else if (currentInputText5 >=65 && currentInputText4 <55) {
  theirRating5 = Math.floor (Math.random() * 50); //0-50 if you rate 65-100
  outputParagraph5.innerText = theirRating5;
  currentRate5 = Math.floor ((before*6 + theirRating5)/7);
} else if (currentInputText5 <65 && currentInputText4 >=55) {
  theirRating5 = Math.floor (Math.random() * 20); //0-20 if you rate 0-64
  outputParagraph5.innerText = theirRating5;
  currentRate5 = Math.floor (((before*9+one+two+three) + theirRating5)/13);
} else {
  theirRating5 = Math.floor (Math.random() * 20); //0-20 if you rate 0-64
  alert("fans got upset and gave you ratings of "+ one+", "+two+", and "+three);
  outputParagraph5.innerText = theirRating5;
  currentRate5 = Math.floor (((before*6+one+two+three) + theirRating5)/10);
}

  document.getElementById("continue5").style.display = "block";
  if (currentRate5<30) {
    alert("Your rating is dropping! You have an average of " +currentRate5+ ". Consider changing up your strategy");
  }
  else if (currentRate5>90) {
    alert("You're doing great! Your rating average is " + currentRate5);
  }
  else {
  }
  console.log(currentRate5);
}

function input6 () {
let currentInputText6 = inputElement6.value;
var theirRating6;

let before = currentRate5;

if (currentInputText6 >=90 && currentInputText5 >=65 && currentInputText4 >=55) {
  theirRating6 = Math.floor (Math.random() * 10 + 90); //90-100 if you rate 90-100
  currentRate6 = Math.floor ((before*10 + theirRating6)/11);
} else if (currentInputText6 >=90 && currentInputText5 <65 && currentInputText4 >=55) {
  theirRating6 = Math.floor (Math.random() * 10 + 90); //90-100 if you rate 90-100
  currentRate6 = Math.floor ((before*13 + theirRating6)/14);
} else if (currentInputText6 >=90 && currentInputText5 >=65 && currentInputText4 <55) {
  theirRating6 = Math.floor (Math.random() * 10 + 90); //90-100 if you rate 90-100
  currentRate6 = Math.floor ((before*7 + theirRating6)/8);
} else if (currentInputText6 >=90 && currentInputText5 <65 && currentInputText4 <55) {
  theirRating6 = Math.floor (Math.random() * 10 + 90); //90-100 if you rate 90-100
  currentRate6 = Math.floor ((before*10 + theirRating6)/11);
}



else if (currentInputText6 >=80 && currentInputText6 < 90 && currentInputText5 >=65 && currentInputText4 >=55) {
  theirRating6 = Math.floor (Math.random() * 10 + 80); //80-90 if you rate 80-89
  currentRate6 = Math.floor ((before*10 + theirRating6)/11);
} else if (currentInputText6 >=80 && currentInputText6 < 90 && currentInputText5 <65 && currentInputText4 >=55) {
  theirRating6 = Math.floor (Math.random() * 10 + 80); //80-90 if you rate 80-89
  currentRate6 = Math.floor ((before*13 + theirRating6)/14);
} else if (currentInputText6 >=80 && currentInputText6 < 90 && currentInputText5 >=65 && currentInputText4 <55) {
  theirRating6 = Math.floor (Math.random() * 10 + 80); //80-90 if you rate 80-89
  currentRate6 = Math.floor ((before*7 + theirRating6)/8);
} else if (currentInputText6 >=80 && currentInputText6 < 90 && currentInputText5 <65 && currentInputText4 <55) {
  theirRating6 = Math.floor (Math.random() * 10 + 80); //80-90 if you rate 80-89
  currentRate6 = Math.floor ((before*10 + theirRating6)/11);
}

else if (currentInputText6 >=70 && currentInputText6 < 80 && currentInputText5 >=65 && currentInputText4 >=55) {
  theirRating6 = Math.floor (Math.random() * 10 + 70); //70-80 if you rate 70-79
  currentRate6 = Math.floor ((before*10 + theirRating6)/11);
} else if (currentInputText6 >=70 && currentInputText6 < 80 && currentInputText5 <65 && currentInputText4 >=55) {
  theirRating6 = Math.floor (Math.random() * 10 + 70); //70-80 if you rate 70-79
  currentRate6 = Math.floor ((before*13 + theirRating6)/14);
} else if (currentInputText6 >=70 && currentInputText6 < 80 && currentInputText5 >=65 && currentInputText4 <55) {
  theirRating6 = Math.floor (Math.random() * 10 + 70); //70-80 if you rate 70-79
  currentRate6 = Math.floor ((before*7 + theirRating6)/8);
} else if (currentInputText6 >=70 && currentInputText6 < 80 && currentInputText5 <65 && currentInputText4 <55) {
  theirRating6 = Math.floor (Math.random() * 10 + 70); //70-80 if you rate 70-79
  currentRate6 = Math.floor ((before*10 + theirRating6)/11);
}

else if (currentInputText6 >=60 && currentInputText6 < 70 && currentInputText5 >=65 && currentInputText4 >=55) {
  theirRating6 = Math.floor (Math.random() * 10 + 60); //60-70 if you rate 60-69
  currentRate6 = Math.floor ((before*10 + theirRating6)/11);
} else if (currentInputText6 >=60 && currentInputText6 < 70 && currentInputText5 <65 && currentInputText4 >=55) {
  theirRating6 = Math.floor (Math.random() * 10 + 60); //60-70 if you rate 60-69
  currentRate6 = Math.floor ((before*13 + theirRating6)/14);
} else if (currentInputText6 >=60 && currentInputText6 < 70 && currentInputText5 >=65 && currentInputText4 <55) {
  theirRating6 = Math.floor (Math.random() * 10 + 60); //60-70 if you rate 60-69
  currentRate6 = Math.floor ((before*7 + theirRating6)/8);
} else if (currentInputText6 >=60 && currentInputText6 < 70 && currentInputText5 <65 && currentInputText4 <55) {
  theirRating6 = Math.floor (Math.random() * 10 + 60); //60-70 if you rate 60-69
  currentRate6 = Math.floor ((before*10 + theirRating6)/11);
}

else if (currentInputText6 >=50 && currentInputText6 < 60 && currentInputText5 >=65 && currentInputText4 >=55) {
  theirRating6 = Math.floor (Math.random() * 10 + 50); //50-60 if you rate 50-59
  currentRate6 = Math.floor ((before*10 + theirRating6)/11);
} else if (currentInputText6 >=50 && currentInputText6 < 60 && currentInputText5 <65 && currentInputText4 >=55) {
  theirRating6 = Math.floor (Math.random() * 10 + 50); //50-60 if you rate 50-59
  currentRate6 = Math.floor ((before*13 + theirRating6)/14);
} else if (currentInputText6 >=50 && currentInputText6 < 60 && currentInputText5 >=65 && currentInputText4 <55) {
  theirRating6 = Math.floor (Math.random() * 10 + 50); //50-60 if you rate 50-59
  currentRate6 = Math.floor ((before*7 + theirRating6)/8);
} else if (currentInputText6 >=50 && currentInputText6 < 60 && currentInputText5 <65 && currentInputText4 <55) {
  theirRating6 = Math.floor (Math.random() * 10 + 50); //50-60 if you rate 50-59
  currentRate6 = Math.floor ((before*10 + theirRating6)/11);
}

else if (currentInputText6 >=40 && currentInputText6 < 50 && currentInputText5 >=65 && currentInputText4 >=55) {
  theirRating6 = Math.floor (Math.random() * 10 + 40); //40-50 if you rate 40-49
  currentRate6 = Math.floor ((before*10 + theirRating6)/11);
} else if (currentInputText6 >=40 && currentInputText6 < 50 && currentInputText5 <65 && currentInputText4 >=55) {
  theirRating6 = Math.floor (Math.random() * 10 + 40); //40-50 if you rate 40-49
  currentRate6 = Math.floor ((before*13 + theirRating6)/14);
} else if (currentInputText6 >=40 && currentInputText6 < 50 && currentInputText5 >=65 && currentInputText4 <55) {
  theirRating6 = Math.floor (Math.random() * 10 + 40); //40-50 if you rate 40-49
  currentRate6 = Math.floor ((before*7 + theirRating6)/8);
} else if (currentInputText6 >=40 && currentInputText6 < 50 && currentInputText5 <65 && currentInputText4 <55) {
  theirRating6 = Math.floor (Math.random() * 10 + 40); //40-50 if you rate 40-49
  currentRate6 = Math.floor ((before*10 + theirRating6)/11);
}

else if (currentInputText6 <40 && currentInputText5 >=65 && currentInputText4 >=55) {
  theirRating6 = Math.floor (Math.random() * 30); //0-30 if you rate 0-39
  currentRate6 = Math.floor ((before*10 + theirRating6)/11);
} else if (currentInputText6 <40 && currentInputText5 <65 && currentInputText4 >=55) {
  theirRating6 = Math.floor (Math.random() * 30); //0-30 if you rate 0-39
  currentRate6 = Math.floor ((before*13 + theirRating6)/14);
} else if (currentInputText6 <40 && currentInputText5 >=65 && currentInputText4 <55) {
  theirRating6 = Math.floor (Math.random() * 30); //0-30 if you rate 0-39
  currentRate6 = Math.floor ((before*7 + theirRating6)/8);
} else {
  theirRating6 = Math.floor (Math.random() * 30); //0-30 if you rate 0-39
  currentRate6 = Math.floor ((before*10 + theirRating6)/11);
}

  outputParagraph6.innerText = theirRating6;
  document.getElementById("continue6").style.display = "block";
  console.log(currentRate6);

  endOutput.innerText = currentRate6;
}
