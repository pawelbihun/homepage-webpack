import '../scss/game.scss';

const CIRCLE = '<i class="far fa-circle"></i>';
const CROSS = '<i class="fas fa-times"></i>';

const board = document.querySelectorAll(".board__field");
let round = 1;

const boardShadow = ["", "", "", "", "", "", "", "", ""];

// game logic
board.forEach((field) =>
  field.addEventListener("click", (event) => {
    
    const name = event.target.className;

    if(name != "far fa-circle" && name !="fas fa-times"){
      const target = `.${name.substring(13)}`;
      // targetShadow == field number
      const targetShadow = name.substring(name.length - 1);
      if (isFieldEmpty(targetShadow)) {
        let player = round % 2;
        if (player === 0) {
          addSymbol(target, CROSS);
          addToBoardShadow(targetShadow, "x");
        } else {
          addSymbol(target, CIRCLE);
          addToBoardShadow(targetShadow, "o");
        }
        checkWinner();
        round++;

        changePlayer(round);
      } 
    } else {
        alert(`To pole jest już zajęte.\nSpróbuj inne.`);
        //console.log(`To pole jest już zajęte.\nSpróbuj inne.`);
      }

  })
);
// dokończyć

function checkWinner() {
  if (
    (boardShadow[0] === "x" && boardShadow[1] === "x" && boardShadow[2] === "x") ||
    (boardShadow[3] === "x" && boardShadow[4] === "x" && boardShadow[5] === "x" ||   boardShadow[6] === "x" && boardShadow[7] === "x" && boardShadow[8] === "x" ||
    boardShadow[0] === "x" && boardShadow[3] === "x" && boardShadow[6] === "x" ||
    boardShadow[1] === "x" && boardShadow[4] === "x" && boardShadow[7] === "x" ||
    boardShadow[2] === "x" && boardShadow[5] === "x" && boardShadow[8] === "x" ||
    boardShadow[0] === "x" && boardShadow[4] === "x" && boardShadow[8] === "x" ||
    boardShadow[2] === "x" && boardShadow[4] === "x" && boardShadow[6] === "x")
  ) {
    console.log(`X wygrał!`);
    addSymbol(`.game__winner`, `Wygrał gracz  ${CROSS}  !!!`);
    fieldBlocker();
  } 
  else if (
    (boardShadow[0] === "o" && boardShadow[1] === "o" && boardShadow[2] === "o") ||
    (boardShadow[3] === "o" && boardShadow[4] === "o" && boardShadow[5] === "o" ||                  boardShadow[6] === "o" && boardShadow[7] === "o" && boardShadow[8] === "o" ||
     boardShadow[0] === "o" && boardShadow[3] === "o" && boardShadow[6] === "o" ||
     boardShadow[1] === "o" && boardShadow[4] === "o" && boardShadow[7] === "o" ||
     boardShadow[2] === "o" && boardShadow[5] === "o" && boardShadow[8] === "o" ||
     boardShadow[0] === "o" && boardShadow[4] === "o" && boardShadow[8] === "o" ||
     boardShadow[2] === "o" && boardShadow[4] === "o" && boardShadow[6] === "o")
  ) {
    console.log(`O wygrał!`);
    addSymbol(`.game__winner`, `Wygrał gracz  ${CIRCLE}  !!!`);
    fieldBlocker();
  } 
}

function addToBoardShadow(targetShadow, player) {
  boardShadow[targetShadow] = player;
}

function isFieldEmpty(element) {
  if(boardShadow[element] == "x" || boardShadow[element] == "o"){
    return false;
  }
  return true;
}

function addSymbol(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

function changePlayer(roundNumber) {
  const info = document.querySelector(".player");
  let player = roundNumber % 2;
  if (player === 0) {
    info.innerHTML = `Aktuany gracz: ${CROSS}`;
  } else {
    info.innerHTML = `Aktuany gracz: ${CIRCLE}`;
  }
}

function fieldBlocker(){
  for(let i = 0; i < boardShadow.length; i++){
    if(isFieldEmpty(i)){
      boardShadow[i] = "o";
    }
  }
  console.log(boardShadow);
}