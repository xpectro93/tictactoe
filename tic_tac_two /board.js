//winning combos
//00,01,02
//10,11,12
//20,21,22
//00,10,20
//01,11,21
//02,12,22

//////GRID
//00,01,02
//10,11,12
//20,21,22

//////////////////////////////////////
const Game = require("./game.js");
class Board {
  constructor() {
    this.grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  }
  display() {
    console.clear();
    console.table(this.grid);
  }
  isTie() {
    for (var i = 0; i < grid[0].length; i++) {
      for (var j = 0; j < grid.length; j++) {
        if (!this.grid) {
        }
      }
    }
  }
  isGameOver() {
    return true;
  }
  findWinner() {
    //winning combos

    //vertical

    if (
      //00,10,20
      (this.grid[0][0] === this.grid[1][0] &&
        this.grid[1][0] === this.grid[2][0]) ||
      //10,11,21
      (this.grid[1][0] === this.grid[1][1] &&
        this.grid[1][1] === this.grid[2][1]) ||
      //02,12,22
      (this.grid[0][2] === this.grid[1][2] &&
        this.grid[1][2] === this.grid[2][2]) ||
      //Horizontal
      //00,01,02
      (this.grid[0][0] === this.grid[0][1] &&
        this.grid[0][1] === this.grid[0][2]) ||
      //10,11,12
      (this.grid[1][0] === this.grid[1][1] &&
        this.grid[1][1] === this.grid[1][2]) ||
      //20,21,22
      (this.grid[2][0] === this.grid[2][1] &&
        this.grid[2][1] === this.grid[2][2]) ||
      //cross
      //00,11,22
      (this.grid[0][0] === this.grid[1][1] &&
        this.grid[1][1] === this.grid[2][2]) ||
      //02,11,20
      (this.grid[0][2] === this.grid[1][1] &&
        this.grid[1][1] === this.grid[2][0])
    ) {
      return true;
    }
    //////GRID
    //00,01,02
    //10,11,12
    //20,21,22
  }
  isTie() {}
  // validMove(aMove) {
  //   if (aMove === typeof "integer" &&) {
  //   }
  // }

  assignMove(num, sym) {
    let ex = num.split(",");
    let row = +ex[0];
    let col = +ex[1];

    this.grid[row][col] = sym;

    console.clear();
    console.table(this.grid);
  }
  isValidMove(num, sym) {
    let ex = num.split(",");
    let row = +ex[0];
    let col = +ex[1];
    // console.log(num, sym, typeof this.grid[row][col] === "number");
    return typeof this.grid[row][col] === "number"; //{
    //   return true;
    //   // return this.grid.assignMove(num, sym);
    // } else {
    //   return false;
    // }
  }
}

// let fruits = [["banna", "afsfda"], "orange"];
// fruits[0][0] = "kiwi";
module.exports = Board;

//QUestions
//How to end Game
//how to reset Game
//way to inplement tie
//whats the meaning of life??
