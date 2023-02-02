//bible:
//0-sky
//1-dirt
//2-rocks
// 3-trunk
//4-tree
// 5-grass

//tools:
//Axe - for cutting trees גרזן
//Pickaxe - for mining rocks מכוש
//Shovel - for digging dirt את חפירה

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
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
let whichTool = 0;
let axe = document.querySelector(".tool.axe");
let pickaxe = document.querySelector(".tool.pickaxe");
let shovel = document.querySelector(".tool.shovel");
let rockAmount = 0;
let rockImg = document.querySelector(".rockImg");
let dirtAmount = 0;
let dirtImg = document.querySelector(".dirtImg");
let trunkAmount = 0;
let trunkImg = document.querySelector(".trunkImg");
let threeAmount = 0;
let threeImg = document.querySelector(".threeImg");

for (let i = 1; i < 17; i++) {
  for (let j = 1; j < 22; j++) {
    let newSquare = document.createElement("div");
    gameBoard.appendChild(newSquare);
    newSquare.style.gridRow = `${i}/${i++}`;
    newSquare.style.gridColumn = `${j}/${j++}`;

    i--;
    j--;
    if (myPicture[i][j] === 0) newSquare.classList.add("sky");
    else if (myPicture[i][j] === 1) newSquare.classList.add("dirt");
    else if (myPicture[i][j] === 2) newSquare.classList.add("rocks");
    else if (myPicture[i][j] === 3) newSquare.classList.add("trunk");
    else if (myPicture[i][j] === 5) newSquare.classList.add("grassDirt");
    else newSquare.classList.add("tree");
  }
}

gameBoard.addEventListener("click", function (e) {
  if (
    (whichTool === 1 && e.target.className === "trunk") ||
    (whichTool === 1 && e.target.className === "tree")
  ) {
    if (e.target.className !== "gameBoard") {
      if (e.target.className === "trunk") {
        trunkAmount++;
        trunkImg.innerText = `${trunkAmount.toString()}`;
      } else {
        threeAmount++;
        threeImg.innerText = `${threeAmount.toString()}`;
      }
      e.target.setAttribute("class", "sky");
    }
  } else if (whichTool === 2 && e.target.className === "rocks") {
    if (e.target.className !== "gameBoard") {
      e.target.setAttribute("class", "sky");
      rockAmount++;
      rockImg.innerText = `${rockAmount.toString()}`;
    }
  } else if (
    (whichTool === 3 && e.target.className === "dirt") ||
    (whichTool === 3 && e.target.className === "grassDirt")
  ) {
    if (e.target.className !== "gameBoard") {
      e.target.setAttribute("class", "sky");
      dirtAmount++;
      dirtImg.innerText = `${dirtAmount.toString()}`;
    }
  }
});

axe.addEventListener("click", function () {
  whichTool = 1;
  console.log(whichTool);
});
pickaxe.addEventListener("click", function () {
  whichTool = 2;
  console.log(whichTool);
});
shovel.addEventListener("click", function () {
  whichTool = 3;
  console.log(whichTool);
});
