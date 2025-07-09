# rock-paper-scissor-game
🪨 Rock Paper Scissors Game (JavaScript + DOM)
A browser-based Rock, Paper, Scissors game built using JavaScript, showcasing core concepts like DOM manipulation, event handling, and dynamic UI updates. The game includes a start screen, a play area, and a reset feature for replayability.

🔍 Overview
This interactive game allows a user to play Rock, Paper, Scissors against the computer. The game logic is written in JavaScript and dynamically updates the UI using DOM methods. Event listeners are used to capture user input and trigger gameplay.

🎯 Features
✅ Start screen and reset button

✅ Dynamic gameplay and score tracking

✅ Random computer choice generation

✅ DOM-based real-time updates

✅ Responsive messages based on game result

🧠 Concepts Demonstrated
Concept	How It's Used
DOM Selection	document.querySelector(), getElementById() to target UI elements
Event Handling	.addEventListener("click", ...) on buttons and game choices
Game Logic	Functions like playgame(), genCompChoice(), and showwinner()
Conditionals	if/else statements to determine outcomes (win/lose/draw)
Randomization	Math.random() to simulate computer’s move

📁 Code Breakdown
✅ Initial Setup
js
Copy
Edit
let userscore = 0;
let compscore = 0;
Used to track the scores of the player and the computer.

✅ Screen Control
js
Copy
Edit
startBtn.addEventListener("click", () => { ... });
resetBtn.addEventListener("click", () => { ... });
Used to switch between the start screen and game screen, and to reset the game.

✅ Game Logic
js
Copy
Edit
const playgame = (userChoice) => { ... };
Compares the user's choice with a randomly generated computer choice, determines the winner, and updates scores and messages.

✅ DOM Updates
js
Copy
Edit
userscorePara.innerText = userscore;
msg.innerText = `You win! Your ${userChoice} beats ${compchoice}`;
Dynamically updates HTML elements to reflect the game state.

🎮 How to Play
Click "Start" to begin the game.

Choose Rock, Paper, or Scissors.

The computer randomly selects its move.

The result is displayed, and scores are updated.

Click "Reset" to play again.

📦 Project Structure
plaintext
Copy
Edit
rock-paper-scissors/
├── rps.html
├── rps.css
└── rps.js
🚀 Run Locally
bash
Copy
Edit
git clone https://github.com/Suhani312006/rock-paper-scissor-game.git
cd rock-paper-scissors
open rps.html
Include screenshots or a GIF of the game in action.

📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
This project is for learning and demonstration purposes, focused on JavaScript fundamentals such as:

DOM manipulation

Event handling

Function-based modular code

