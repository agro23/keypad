// Business Logic

function ComputerTerminal (status, name, buildingLocationNumber, roomNumber, locationX, locationY, type, questionArray, answerArray, success, failure) {
  this.status = status;
  this.name = name;
  this.buildingLocationNumber = buildingLocationNumber;
  this.roomNumber = roomNumber;
  this.locationX = locationX;
  this.locationY = locationY;
  this.type = type;
  this.questionArray = questionArray;
  this.answerArray = answerArray;
  this.success = success;
  this.failure = failure;
}

ComputerTerminal.prototype.verifyAnswer = function (answer) { // pass in the answer as array or string
  var compare = 0;
  for (var i=0; i < answer.length; i++) {
    if (answer[i] === this.answerArray[i]) { compare ++;}
  }
  if (compare === this.answerArray.length) { return true; } else { return false;}
  // return compare;
  // if(this.answerArray === answer) {return true; } else { return false; }
};

function Denizen(name, pic, greet, questions, answer1, answer2, answer3, items, level) {
  this.name = name;
  this.pic = pic;
  this.greet = greet;
  this.questions = questions; // array
  this.answer1 = answer1;
  this.answer2 = answer2; //array of future answers
  this.answer3 = answer3; // "Tell me what happened here?", ["", "", "", "", ""]
  this.items = items;
  this.level = level; // if level is 5 then that's the CEO. You catch him and leave.
}

function testAnswer(myPrompt, x){
  // if  (myPrompt.verifyAnswer(x)) { alert("It's true!"); }
  if  (myPrompt.verifyAnswer(x)) { return true; } else { return false;}
}


function getAnswer(myPrompt){
  var combo = "";
  var x = "";
  // alert("My question type is: " + myPrompt);
  if (myPrompt.type ==="colors") {
    for (var i = 0; i < myPrompt.questionArray.length; i++){
      combo += myPrompt.questionArray[i] + "=";
    }
    combo = combo.slice(0, -1);
    x = prompt(combo); // this is prompting the user ********
    $("#row1").html("<h3>" + combo + "</h3>");
    alert("Drumroll: ");
    if  (myPrompt.verifyAnswer(x)) { alert("It's true!"); } // ***********************


  } else if (myPrompt.type ==="questions") {
    for (var i = 0; i < myPrompt.questionArray.length; i++){
      combo += myPrompt.questionArray[i] + "\n";
    }
    x = prompt(combo);
  } else if (myPrompt.type ==="keypad") {
    alert("KEYPAD!");
    for (var i = 0; i < (myPrompt.questionArray.length); i+=3){
      combo += myPrompt.questionArray[i] + " : ";
      combo += myPrompt.questionArray[i + 1] + " : ";
      combo += myPrompt.questionArray[i + 2] + "\n";
    }
    x = prompt(combo);
  } else return "Destroyed!";
  return x;
}

function checkAnswer(answer, myAnswer){
  if (myAnswer.type === "colors") {
    alert(myAnswer.type);   // works!! **********************************
    alert("Answer = " + answer);
    answer=answer.split("");
    alert("Answer is NOW = " + answer);
    alert("Expecting: ") +  myAnswer.answerArray;
    alert("myAnswer is :") + myAnswer;
    if (answer != myAnswer.answerArray){
      alert("That is NOT correct!");
    }
    alert("COLORS!");
  } else if (myAnswer.type ==="questions") {
    alert("QUESTIONS!");
  } else if (myAnswer.type ==="keypad") {
    alert("KEYPAD!");
  } else return "Destroyed!";
  // return x;
  return;
}


// User Interface Logic

function drawKeypad(){
  for (var i = 1; i < 10; i++) {
    // myI = "<h2>" + " " + i + " " + "</h2>" + "<br>";
    myI = "<h2>" + " " + i + " " + "</h2>";
    $("#" + i).append(myI);
  }
  // $("#row3").show();
}

function showQuery(someTerminal){
  var combo = "";
  var combo1 = "";
  if (someTerminal.type ==="colors") {
    for (var i = 0; i < someTerminal.questionArray.length; i++){
      // combo += someTerminal.questionArray[i] + "=";
      combo += someTerminal.questionArray[i];
    }
    // combo = combo.slice(0, -1);

    for (var i = 1; i < someTerminal.questionArray.length + 1; i++){
      if(someTerminal.questionArray[i-1] === "R") {
        $("#show"+i).css("background-color", "red");
      } else if (someTerminal.questionArray[i-1] === "G") {
        $("#show"+i).css("background-color", "green");
      } else if (someTerminal.questionArray[i-1] === "B") {
        $("#show"+i).css("background-color", "blue");
      } else {
        $("#show"+i).css("background-color", "yellow");
      }
    }

    // x = prompt(combo); // this is prompting the user ********
    // x = "none";
    x = combo;
    // $("#colorboxes").append("<h2>" + combo + "</h2>");
    // $("#show").append("<h2>" + combo + "</h2>");
    $("#colorbox").css( "display", "block" );


    // alert("Drumroll: ");
    // if  (someTerminal.verifyAnswer(x)) { alert("It's true!"); }  // This verifies the answer!
  } else if (someTerminal.type ==="questions") {
    alert("questions");
    // $("#questions").show();
    for (var i = 0; i < someTerminal.questionArray.length; i++){
      combo += someTerminal.questionArray[i] + "\n";
      combo1 += someTerminal.questionArray[i] + "<br><br>";
    }
    // x = prompt(combo);
    x = "none";
    // $("#questions").show(); // do I need this?

    $("#ask").append("<h2>" + combo1 + "</h2>");
    $("#question").css( "display", "block" );

  } else if (someTerminal.type ==="keypad") {
    alert("KEYPAD!");
    for (var i = 0; i < (someTerminal.questionArray.length); i+=3){
      combo += someTerminal.questionArray[i] + " : ";
      combo1 += someTerminal.questionArray[i];
      combo += someTerminal.questionArray[i + 1] + " : ";
      combo1 += someTerminal.questionArray[i + 1];
      combo += someTerminal.questionArray[i + 2] + "\n";
      combo1 += someTerminal.questionArray[i + 2];
    }
    // x = prompt(combo);
    // $("#"+i).append("<h2>" + i  + "</h2>");
    // $("#keypad").append("<h2>" + combo1  + "</h2>");
    x = "none";
    drawKeypad();
    $("#keypad").css( "display", "block");
  } else return "Destroyed!";
  return x;
}

function challenge(someTerminal){
  if (someTerminal.type ==="colors") {
    var myFormQ =
    '<form id="colors" class="form-group terminal row">' +
      '<div class="col-md-10">' +
        '<input id="colorAnswers" type="text" name="colorAnswers" value="" class="form-control" placeholder="#" required>' +
      '</div>' +
      '<div class="col-md-2">' +
        '<button class="btn btn-primary" type="submit" name="button">Submit</button>' +
      '</div>' +
    '</form>';
      $("#formLine").html(myFormQ);
      // $("#questions").show();
      $("#tformLine").css( "display", "block" );
      alert("Got here!");
  } else if (someTerminal.type ==="questions") {
    var myFormQ =
    '<form id="questions" class="form-group terminal row">' +
      '<div class="col-md-10">' +
        '<input id="answers" type="text" name="answers" value="" class="form-control" placeholder="#" required>' +
      '</div>' +
      '<div class="col-md-2">' +
        '<button class="btn btn-primary" type="submit" name="button">Submit</button>' +
      '</div>' +
    '</form>';
      $("#answer").html(myFormQ);
      // $("#questions").show();
      $("#answer").css( "display", "block" );
  } else if (someTerminal.type ==="keypad") {
    // (check for keys) and wait! (set interval and every ten seconds prompt them!)
    // if they click on a key display the key they chose
    // if they press a key display the key in the answer window
    var myFormK =
    '<form id="keys" class="form-group terminal row">' +
      '<div class="col-md-10 keyA">' +
        '<input id="keyAnswers" type="text" name="keyAnswers" value="" class="form-control" placeholder="#" required>' +
      '</div>' +
      '<div class="col-md-2 keyA">' +
        '<button class="btn btn-primary" type="submit" name="button">Submit</button>' +
      '</div>' +
    '</form>';
      $("#entry").append(myFormK);
  }
}

// function talkToFolks (personObject, theirPic, greet, askThem){
// (myName, myPic, myGreet, myQuestions, myAnswer1, myAnswer2, myAnswer3, myItems, myLevel)
function talkToFolks (personObject){

  function whichKey(myKey){
    var newString = "";
    if (myKey == 49) {
      var tempQ = personObject.answer1;
      for (var i = 0; i < tempQ.length; i++) {
        newString = tempQ[i];
        if (newString === "X") {
          var temp = tempQ[i] + tempQ[i +1] + tempQ[i +2];
          if (temp === "XXX") {
            newString =  tempQ.substring(0, i) + personObject.name + tempQ.substring(i+3, tempQ.length);
            i = tempQ.length;
          }
        }
      }
      $("#li1").css("color", "rgb(239, 242, 247)");
      $("#theyReply").html("<p>" +  newString + "</p>");
    }
    if (myKey === 50) {
        $("#theyAsk").html(personObject.answer2[0]);
        newString = "<ol>";
        for (var i = 1; i < 6; i++){
          newString += "<li id='li" + i + "'>" + personObject.answer2[i] + "</li>";
        }
        newString += "<\ol>";
        $("#li2").css("color", "rgb(239, 242, 247)");
        $("#theyReply").html("<p>" +  newString + "</p>");

    // ["Help you do what?", "Deactivate Robots?", "Tell me where the CEO is?", "Give me a terminal code?", "Tell me what level I'm on?", "Give me a door access key?",
    // ["No.", "Of course. Use code Blue Red Blue Green Yellow on the terminal", "Get out of here!",
    // ["No.", "Of course not!", "Why would I tell you that?", "I don't know, I just work here.", "Sure. He's on level 5!",
    // ["No way!", "I don't have that kind of thing!", "Why would you want that? Are you a spy?", "Pound sand, Earther!", "Sure. It's 22343."],
    // ["Read a map, idiot.", "I don't have time for simple questions.", "Are you serious?", "Yes. It's level NNN", "Go away! I'm working!"],
    // ["Get real!", "Sure. Here's a Yellow.", "Sure. Here's a Blue.", "Sure. Here's a Red.", "No way!", "I'm going to have to tell the boss!"]

    }

    if (myKey === 51) {alert("answer 3");}
  }


  // alert("Got here!");
  $(".container").css( "display", "none" );
  $(".decorateMe").css( "display", "block" );
  $("#picture").html( "<img src=" + personObject.pic + " alt='Their Picture' height: '100'>");
  $("#narration").html( "<p>You walk up and speak to " + personObject.name + ".</p>");
  $("#theyAsk").html("<p>" +  personObject.greet + "</p>");
  // $("#youAnswer").html("<ol><li>" +  askThem[0] + "</li><li>" +  askThem[1] + "</li><li>" +  askThem[2] + "</li></ol>");
  $("#youAnswer").html("<ol><li id='li1'>" +  personObject.questions[0] + "</li><li id='li2'>" +  personObject.questions[1] + "</li><li id='li3'>" +  personObject.questions[2] + "</li></ol>");

  $(function() {
     $(window).keypress(function(e) {
         var key = e.which;
        //  alert("key = " + key);
        whichKey(key);
     });
  });
// alert("Hit the end of the function, right?");
}




$(document).ready(function() {
  var dudes = [];
  myTerminal = new ComputerTerminal("Locked", "Terminal", 1, 1, 10, 10, "colors", ["R","G","B","Y","B"], ["R","G","B","Y","B"], "OPEN", "ALARM-5");
  myQuestionTerminal = new ComputerTerminal("Locked", "Terminal", 1, 1, 10, 10, "questions", ["What is your favorite color?", "1. Red", "2. Blue", "3. Purple"], ["3"], "OPEN", "ALARM-5");
  myKeypadTerminal = new ComputerTerminal("Locked", "Terminal", 1, 1, 10, 10, "keypad", [1,2,3,4,5,6,7,8,9], ["3"], "OPEN", "ALARM-5");

  function makeNewDude(myName, myPic, myGreet, myQuestions, myAnswer1, myAnswer2, myAnswer3, myItems, myLevel) {
    dudes.push(new Denizen(myName, myPic, myGreet, myQuestions, myAnswer1, myAnswer2, myAnswer3, myItems, myLevel));
  }

  // makeNewDude("Lykez Munnee", "img/drone.jpg", "What do you want?", ["Who are you?", "Can you help me?", "What happened here?!"], "My name is xxx. I'm nobody. I just work here.", ["Help you do what?",
  // "Deactivate Robots?", "No.", "Of course. Use code Blue Red Blue Green Yellow on the terminal", "Get out of here!"],
  // ["Tell me where the CEO is", "No.", "Of course not!", "Why would I tell you that?", "I don't know, I just work here.", "Sure. He's on level 5!"],
  // ["Give me a terminal code?", "No way!", "I don't have that kind of thing!", "Why would you want that? Are you a spy?", "Pound sand, Earther!", "Sure. It's 22343."],
  // ["Tell me what level I'm on?","Read a map, idiot.", "I don't have time for simple questions.", "Are you serious?", "Yes. It's level NNN", "Go away! I'm working!"],
  // ["Give me a door access key?","Get real!", "Sure. Here's a Yellow.", "Sure. Here's a Blue.", "Sure. Here's a Red.", "No way!", "I'm going to have to tell the boss!"], ["","", "", "", ""]);

  makeNewDude("Lykez Munnee", "img/drone.jpg", "What do you want?", ["Who are you?", "Can you help me?", "What happened here?!"], "My name is XXX. I'm nobody. I just work here.",
  ["Help you do what?",
  "Deactivate Robots?", "Tell me where the CEO is?", "Give me a terminal code?", "Tell me what level I'm on?", "Give me a door access key?",
  "No.", "Of course. Use code Blue Red Blue Green Yellow on the terminal", "Get out of here!",
  "No.", "Of course not!", "Why would I tell you that?", "I don't know, I just work here.", "Sure. He's on level 5!",
  "No way!", "I don't have that kind of thing!", "Why would you want that? Are you a spy?", "Pound sand, Earther!", "Sure. It's 22343.",
  "Read a map, idiot.", "I don't have time for simple questions.", "Are you serious?", "Yes. It's level NNN", "Go away! I'm working!",
  "Get real!", "Sure. Here's a Yellow.", "Sure. Here's a Blue.", "Sure. Here's a Red.", "No way!", "I'm going to have to tell the boss!"], ["","", "", "", ""]);

  alert(dudes[0].name);

  // ["Help you do what?",
  // ["Deactivate Robots?", "No.", "Of course. Use code Blue Red Blue Green Yellow on the terminal", "Get out of here!"],
  // "Tell me where the CEO is",
  // ["No.", "Of course not!", "Why would I tell you that?", "I don't know, I just work here.", "Sure. He's on level 5!"],
  // "Give me a terminal code?",
  // ["No way!", "I don't have that kind of thing!", "Why would you want that? Are you a spy?", "Pound sand, Earther!", "Sure. It's 22343."],
  // "Tell me what level I'm on?",
  // ["Read a map, idiot.", "I don't have time for simple questions.", "Are you serious?", "Yes. It's level NNN", "Go away! I'm working!"],
  // "Give me a door access key?",
  // ["Get real!", "Sure. Here's a Yellow.", "Sure. Here's a Blue.", "Sure. Here's a Red.", "No way!", "I'm going to have to tell the boss!"]
  // ]

  // var test = "";

  // var myKindOfTerminal = myTerminal ;
  // var myKindOfTerminal = myQuestionTerminal ;
  var myKindOfTerminal = myKeypadTerminal;
  alert("My terminal type= ")+myKindOfTerminal.type;

  showQuery(myKindOfTerminal);
  challenge(myKindOfTerminal);
  talkToFolks(dudes[0]);

  // drawKeypad();

  $(document).submit(function(e) {
    e.preventDefault();
    var myAnswer = "";
    if ($("#colorAnswers").val()) { alert ($("#colorAnswers").val()); } else if ($("#keyAnswers").val()) { alert ($("#keyAnswers").val()); } else if ($("#answers").val()){ alert($("#answers").val()); } else { alert("No answer!"); }
    // talkToFolks("a drone", "img/drone.jpg", "What do you want?", ["Who are you?", "Can you help me?", "What happened here?"]); // will pass an object at some point
    // alert ("Here's my answer: " + $("#answers").val());
    // if the answer is equal to what's in the object's answer array then exit then results change to terminal and return control to the next level up?
    // clear the form;
    alert("Moving right along...");
  });

});
