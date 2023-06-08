const boxes = document.querySelectorAll("[data-box]");
const X_BOX = "x";
const O_BOX = "o";
let circleTurn;
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


// When Player Clicks on a Box
boxes.forEach((box) => {
  box.addEventListener("click", boxClick);
});

function boxClick(e) {
  const box = e.target;
  const currentTurn = circleTurn ? O_BOX : X_BOX;

  placeMark(box, currentTurn);

  if (checkWinner(currentTurn)) {
    console.log("winner");
  };

  changeMoves();
};

// Function to Place Either 'X' or 'O'
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
