##Comms Hacking:

### RULES:
The purpose of this module is for the player to "hack" a terminal. They will solve a puzzle or answer questions or enter a key sequence. If they are correct this function will pass true so the game knows to transition.

The player will see a picture of the character standing in front of a computer (or some variant) and an open window looking like a terminal of some sort that is expecting input.

The character will input keystrokes in response to prompts on screen

The game will respond to input based on context

Possible prompt types:

Color code bar:
  - A sequence (string?) of 5 color squares and 5 blank squares under them. Underneath that are 4 color blocks (Red, Blue, Green, and Yellow) with numbers under them (1 - 4).
    SAMPLE INPUT: a sequence of digits
    SAMPLE OUTPUT: the corresponding color block of the digit pressed appears in each empty block.

Question:
  - A question with three possible answer choices under it.
    What is the password for Level 10?
    1) Cheesewiz; 2) Banana; 3) QWERTY
    SAMPLE INPUT: 1
    SAMPLE OUTPUT: SCREEN TURNS RED AND FLASHES A WARNING

Alphanumeric Sequence:
  - A 3 x 3 grid of alphanumeric characters
    SAMPLE INPUT: (A click on a grid char or keyboard input of the character)
    SAMPLE OUTPUT: SCREEN TURNS GREEN AND FADES INTO NEXT GAME LEVEL

###IMPLEMENTATION SPECS

* Clear screen to terminal screen

* Make Terminal object {status, name, building location Number, building location room Number, room location X, room location Y, type, question array, answer array, success, failure}
  - Status (checked first when player enters a room with this terminal) "Unlocked" or "Locked" for a door, "Unsolved" or "Solved" for the other puzzles, "Alarm" if the alarm is triggered, "Deactivated" if it's turned off, and "Destroyed" if it's been damaged.
  - Questions array contains the color sequence, OR a question and possible answers, OR the digit sequence to be written to the keypad
  - Answer array contains the correct color sequence in letters, OR the correct answer, OR the correct digit sequence
  - Success contains the result if you succeed: 'Open' toggles the Status to Unlocked, 'Solved' to toggle a terminal to solved, '[sentence]' is a sequence of text that you get if you answer the questions correctly.
  - Failure contains what happens if you don't answer right: 'Nothing' means nothing happens, 'Alarm-5' means you get 5 tries before the status changes to Alarm, 'Locked' means the status changes to Locked

* Prompt user for any answer ("What is the answer?")
  - EXAMPLE INPUT: 43
  - EXAMPLE OUTPUT: Correct!

* Prompt a color sequence question based on the terminal prompt type from the object.
  - EXAMPLE PROMPT: R  G  B  Y  B
  - EXAMPLE INPUT: R G B B B
  - EXAMPLE OUTPUT: INCORRECT!
  <!-- - (follow Failure protocol) -->

* Prompt a text question and the answer numbers based on the terminal prompt type from the object.
  - EXAMPLE PROMPT: What is the entry code written in the Programming Office?
    - 1) Cheesewiz
    - 2) Banana
    - 3) QWERTY
  - EXAMPLE INPUT: 1
  - EXAMPLE OUTPUT: CORRECT!
  <!-- - (follow Success protocol) -->

* Prompt a keypad question based on the terminal prompt type from the object.
  - EXAMPLE PROMPT: 1 2 3 / 4 5 6 / 7 8 9
  - EXAMPLE INPUT: 2345
  - EXAMPLE OUTPUT: INCORRECT!
  <!-- - (follow Failure protocol) -->

* Enable check for correct answers

* create verifyAnswer method to check the answer
  - usage: myPrompt.verifyAnswer(x) where myPrompt is the terminal object and x is an array of answers.

* Display question in HTML panel (but still prompt)

* Display possible answers in HTML panel

* Alert actual Success or Failure result

* Check for clicks on keypad for doorcode answer

* Check for KB input to get answer for question <--

* Check for clicks on color bar for color question answer

* Add DIV for Talking to Person

* Convert Question code to handle it.

* Create looping mechansim to go through entire conversation tree with person.

* Work out entry and exit conditions

* Refactor code

###Needs:

* Trap for KB input
* Respond to keys as typed
* Lock in result (submit)
* Respond to result
* Looping mechanism while waiting for input?
  - routine calls itself while waiting for input...
