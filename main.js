const boxes = document.querySelectorAll('[data-box]');
const X_BOX = 'x';
const O_BOX = 'o';
let circleTurn;


boxes.forEach(box => {
    box.addEventListener('click', boxClick);
});

function boxClick(e) {
    const box = e.target;
    const currentTurn = circleTurn ? O_BOX : X_BOX;
    
    placeMark(box, currentTurn);
};

function placeMark(box, currentTurn) {
    box.classList.add(currentTurn);
    console.log(box.classList);
};
