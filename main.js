const boxes = document.querySelectorAll("[data-box]");
const resultAlert = document.querySelector("[data-result-alert]");
const resultMessage = document.getElementById("resultMessage");
const X_BOX = "x";
const O_BOX = "o";
let circleTurn;
const restartButton = document.getElementById("restartButton");
const winningMethods = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Call to Start the Game
startGame();

// Call for the Player To Use the Restart Button
restartButton.addEventListener("click", startGame);

// Function to Start and Restart the Game
function startGame() {
  boxes.forEach(box => {
    box.classList.remove(X_BOX);
    box.classList.remove(O_BOX);
    
    box.removeEventListener("click", boxClick);
    box.addEventListener("click", boxClick, { once: true });
  });

  resultMessage.classList.remove("show");
};

// Function for When a Player Clicks on a Box
function boxClick(e) {
  const box = e.target;
  const currentTurn = circleTurn ? O_BOX : X_BOX;

  placeMark(box, currentTurn);

  if (checkWinner(currentTurn)) {
    endGame(false);
  } else if (endsDraw()) {
    endGame(true);
  } else {
    changeMoves();
  };
};

// Function to End Game and Reveals Winner or Draw Message
function endGame(draw) {
  if (draw) {
    resultAlert.innerHTML = `Draw!`;
  } else {
    resultAlert.innerHTML = `${circleTurn ? "O" : "X"} Wins!`;
  };
  resultMessage.classList.add(`show`);
};

// Function To Check if Every Box Has a Class to End in Draw
function endsDraw() {
  return [...boxes].every((box) => {
    return box.classList.contains(X_BOX) || box.classList.contains(O_BOX);
  });
};

// Function to Place 'X' for First Move
function placeMark(box, currentTurn) {
  box.classList.add(currentTurn);
  console.log(box.classList);
};

// Function to Change Moves Between 'X' and 'O'
function changeMoves() {
  if (boxClick === true) {
    circleTurn = true;
  } else {
    circleTurn = !circleTurn;
  };
};

// Function to Check For a Winner
function checkWinner(currentTurn) {
  return winningMethods.some((method) => {
    return method.every((index) => {
      return boxes[index].classList.contains(currentTurn);
    });
  });
};
