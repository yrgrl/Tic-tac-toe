let xTurn = true;
let count = 0;
let winningPattern = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

let btnRef = document.querySelectorAll('.board__cell');
let msgRef = document.querySelector('.popup__message');
let newgameBtn = document.querySelector('.game-restart-btn');
let restartBtn = document.querySelector('.popup__restart-btn');

const disableButtons = () => {
  btnRef.forEach((element) => {
    element.disabled = true;
  });
};

const enableButtons = () => {
  btnRef.forEach((element) => {
    element.disabled = false;
    element.innerText = '';
  });
};

const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
  document.querySelector('.popup').classList.add('show');
};

const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
  document.querySelector('.popup').classList.add('show');
};

newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
  document.querySelector('.popup').classList.remove('show');
});

restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
  document.querySelector('.popup').classList.remove('show');
});

const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0] - 1].innerText,
      btnRef[i[1] - 1].innerText,
      btnRef[i[2] - 1].innerText,
    ];
    if (element1 != "" && element1 == element2 && element2 == element3) {
      winFunction(element1);
    }
  }
};

btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      element.innerText = "X";
    } else {
      element.innerText = "O";
    }
    element.disabled = true;
    xTurn = !xTurn;
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    winChecker();
  });
});

window.onload = enableButtons;