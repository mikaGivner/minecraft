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
let grassImg = document.querySelector(".grassImg");
let main = document.querySelector(".main");
let landingPage = document.querySelector(".landingPage");
let startBtn = document.querySelector("#startBtn");
let presentTool = document.querySelector(".presentTool");
startBtn.innerText = "Click For Start";
main.style.display = "none";
landingPage.style.display = "flex";
let myPicture = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 6, 6, 6, 0, 0, 7, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0, 7, 0, 4, 4, 4, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0],
  [0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0],
  [0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 4, 4, 0, 0, 0, 4, 4, 4, 4, 0],
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
function populateStorage() {
  localStorage.setItem("rockAmount", rockAmount);
}
let something = localStorage.getItem("rockAmount");
let grassAmount = 0;
let trunkAmount = 0;
let threeAmount = 0;
let whichTool = 0;
let arr = [
  ["sky"],
  ["dirt"],
  ["rocks"],
  ["trunk"],
  ["tree"],
  ["grassDirt"],
  ["shine"],
  ["cloud"],
];
let possibleToChange = [
  [1, rockAmount, "rocks", rockImg],
  [2, dirtAmount, "dirt", dirtImg],
  [3, trunkAmount, "trunk", trunkImg],
  [4, threeAmount, "tree", threeImg],
  [5, grassAmount, "grassDirt", grassImg],
];
startBtn.addEventListener("click", function () {
  main.style.display = "flex";
  landingPage.style.display = "none";
});

let whatDraw = [[0], [1], [2], [3], [4], [5]];

for (let i = 1; i < 17; i++) {
  for (let j = 1; j < 22; j++) {
    // localStorage.setItem("whichTool", "newSquare");
    // newSquare = document.createElement("div");
    let newSquare = document.createElement("div");
    gameBoard.appendChild(newSquare);
    newSquare.style.gridRow = `${i}/${i++}`;
    newSquare.style.gridColumn = `${j}/${j++}`;

    i--;
    j--;
    newSquare.classList.add(arr[myPicture[i][j]]);
  }
}
//localStorage.getItem("newSquare");
possibleToChange.forEach((whichTile) => {
  whichTile[3].addEventListener("click", () => {
    whichTool = 0;
    presentTool.innerText = `your tool is: `;

    if (Number(`${whichTile[3].innerText}`) > 0) changeTile = whichTile[0];
  });

  // gameBoard.addEventListener("click", function (e) {
  //   if (whichTool === 0) {
  //     if (e.target.className === "sky") {
  //       if (
  //         changeTile === whichTile[0] &&
  //         Number(`${whichTile[3].innerText}`) > 0
  //       ) {
  //         e.target.setAttribute("class", whichTile[2]);
  //         whichTile[1]--;
  //         whichTile[3].innerText = `${whichTile[1].toString()}`;
  //       }
  //     }
  //   } else if (
  //     (whichTool === 1 && e.target.className === "trunk") ||
  //     (whichTool === 1 && e.target.className === "tree")
  //   ) {
  //     if (e.target.className !== "gameBoard") {
  //       if (e.target.className === "trunk") {
  //         trunkAmount++;
  //         trunkImg.innerText = `${trunkAmount.toString()}`;
  //       } else {
  //         threeAmount++;
  //         threeImg.innerText = `${threeAmount.toString()}`;
  //       }
  //       e.target.setAttribute("class", "sky");
  //     }
  //   } else if (whichTool === 2 && e.target.className === "rocks") {
  //     if (e.target.className !== "gameBoard") {
  //       e.target.setAttribute("class", "sky");
  //       rockAmount++;
  //       rockImg.innerText = `${rockAmount.toString()}`;
  //     }
  //   } else if (whichTool === 3 && e.target.className === "dirt") {
  //     if (e.target.className !== "gameBoard") {
  //       e.target.setAttribute("class", "sky");
  //       dirtAmount++;
  //       dirtImg.innerText = `${dirtAmount.toString()}`;
  //     }
  //   } else if (whichTool === 3 && e.target.className === "grassDirt") {
  //     if (e.target.className !== "gameBoard") {
  //       e.target.setAttribute("class", "sky");
  //       grassAmount++;
  //       grassImg.innerText = `${grassAmount.toString()}`;
  //     }
  //   }
  // });
});
gameBoard.addEventListener("click", function (e) {
  if (whichTool === 0) {
    if (e.target.className === "sky") {
      //  possibleToChange.forEach( (addTile) => {
      //             if (changeTile === addTile[0] && Number(`${addTile[3].innerText}`) > 0) {
      //               e.target.setAttribute("class", addTile[2]);
      //               addTile[1]--;
      //               addTile[3].innerText = `${addTile[1].toString()}`;
      //             }
      //           }
      //       );
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
      } else if (changeTile === 5 && grassAmount > 0) {
        e.target.setAttribute("class", "grassDirt");
        grassAmount--;
        grassImg.innerText = `${grassAmount.toString()}`;
      }
    }
  } else if (
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
  } else if (whichTool === 3 && e.target.className === "dirt") {
    if (e.target.className !== "gameBoard") {
      e.target.setAttribute("class", "sky");
      dirtAmount++;
      dirtImg.innerText = `${dirtAmount.toString()}`;
    }
  } else if (whichTool === 3 && e.target.className === "grassDirt") {
    if (e.target.className !== "gameBoard") {
      e.target.setAttribute("class", "sky");
      grassAmount++;
      grassImg.innerText = `${grassAmount.toString()}`;
    }
  }
});

//////////////////////////////

let kindsOfTools = [
  [axe, 1, "axe"],
  [pickaxe, 2, "pickaxe"],
  [shovel, 3, "shovel"],
];
kindsOfTools.forEach((thisTool) => {
  thisTool[0].addEventListener("click", function () {
    whichTool = thisTool[1];
    presentTool.innerText = `your tool is: ${thisTool[2]}`;
  });
});
