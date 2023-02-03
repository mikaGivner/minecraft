//bible:
//0-sky
//1-dirt
//2-rocks
// 3-trunk
//4-tree
// 5-grass

//tools:
//Axe - for cutting trees
//Pickaxe - for mining rocks
//Shovel - for digging dirt

let gameBoard = document.querySelector(".gameBoard");
let axe = document.querySelector(".tool.axe");
let pickaxe = document.querySelector(".tool.pickaxe");
let shovel = document.querySelector(".tool.shovel");
let rockImg = document.querySelector(".rockImg");
let dirtImg = document.querySelector(".dirtImg");
let trunkImg = document.querySelector(".trunkImg");
let threeImg = document.querySelector(".threeImg");
let main = document.querySelector(".main");
let landingPage = document.querySelector(".landingPage");
let startBtn = document.querySelector("#startBtn");
startBtn.innerText = "Click For Start";
main.style.display = "none";
landingPage.style.display = "flex";
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
let changeTile = 0;
let rockAmount = 0;
let dirtAmount = 0;
let trunkAmount = 0;
let threeAmount = 0;
let whichTool = 0;
// localStorage.setItem("whichTool", 0);
// localStorage.getItem("whichTool");

startBtn.addEventListener("click", function () {
  main.style.display = "flex";
  landingPage.style.display = "none";
});

let tileImg = [
  [rockImg, `${rockAmount}`],
  [dirtImg, `${dirtAmount}`],
  [trunkImg, `${trunkAmount}`],
  [threeImg, `${threeAmount}`],
];

tileImg.forEach((whichTile, index) => {
  whichTile[0].addEventListener("click", function () {
    whichTool = 0;
    // if (Number(whichTile[1]) > 0) changeTile = index++;
    if (index === 0 && rockAmount > 0) changeTile = 1;
    else if (index === 1 && dirtAmount > 0) changeTile = 2;
    else if (index === 2 && trunkAmount > 0) changeTile = 3;
    else if (index === 3 && threeAmount > 0) changeTile = 4;
  });
});

let whatDraw = [[0], [1], [2], [3], [4], [5]];

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
  if (whichTool === 0) {
    if (e.target.className === "sky") {
      if (changeTile === 1 && rockAmount > 0) {
        e.target.setAttribute("class", "rocks");
        rockAmount--;
        rockImg.innerText = `${rockAmount.toString()}`;
      } else if (changeTile === 2 && dirtAmount > 0) {
        e.target.setAttribute("class", "dirt");
        dirtAmount--;
        dirtImg.innerText = `${dirtAmount.toString()}`;
      } else if (changeTile === 3 && trunkAmount > 0) {
        e.target.setAttribute("class", "trunk");
        trunkAmount--;
        trunkImg.innerText = `${trunkAmount.toString()}`;
      } else if (changeTile === 4 && threeAmount > 0) {
        e.target.setAttribute("class", "tree");
        threeAmount--;
        threeImg.innerText = `${threeAmount.toString()}`;
      }
    }
  }

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

let kindsOfTools = [
  [axe, 1],
  [pickaxe, 2],
  [shovel, 3],
];
kindsOfTools.forEach((thisTool) => {
  thisTool[0].addEventListener("click", function () {
    whichTool = thisTool[1];
  });
});
