const readlineSync = require("readline-sync");
const Game = require("./game.js");
const Board = require("./board.js");
class Player {
  constructor(sym, name) {
    this.name = name;
    this.sym = sym;
    this.win;
  }
  // move() {}
  // getsym() {
  //   return this.sym;
  // }
}

// let test = new HumanPlayer("X", "Xplayer");

// let playerName = test.getPlayerName();
// let playerSym = test.getPlayerSym();
module.exports = Player;
