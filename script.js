//bible:
//0-sky
//1-land
//2-stone
// 3-trunk
//4-tree

let gameBoard = document.querySelector(".gameBoard");
let myPicture = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0],
  [0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0],
  [0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 4, 4, 4, 4, 0],
  [0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 3, 3, 0, 0],
  [0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 3, 3, 0, 0],
  [0, 2, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 3, 3, 0, 0],
  [0, 2, 2, 0, 3, 3, 0, 0, 0, 0, 2, 0, 3, 3, 0, 2, 2, 0, 3, 3, 0, 0],
  [0, 2, 2, 2, 3, 3, 0, 0, 0, 2, 2, 0, 3, 3, 0, 2, 2, 0, 3, 3, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

for (let i = 1; i < 17; i++) {
  for (let j = 1; j < 22; j++) {
    let newSquare = document.createElement("div");
    gameBoard.appendChild(newSquare);
    newSquare.style.gridRow = `${i}/${i++}`;
    newSquare.style.gridColumn = `${j}/${j++}`;

    i--;
    j--;
    if (myPicture[i][j] === 0) newSquare.classList.add("sky");
    else if (myPicture[i][j] === 1) newSquare.classList.add("land");
    else if (myPicture[i][j] === 2) newSquare.classList.add("stone");
    else if (myPicture[i][j] === 3) newSquare.classList.add("trunk");
    else newSquare.classList.add("tree");
  }
}

gameBoard.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.setAttribute("class", "sky");
});
