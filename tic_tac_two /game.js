const readlineSync = require("readline-sync");
const Board = require("./board.js");
const Player = require("./player.js");
class Game {
  constructor() {
    this.player1;
    this.player2;
    this.board = new Board();
    this.currentPlayer;
  }

  showBoard() {
    this.board.display();
  }

  start() {
    let name1 = readlineSync.question("May I have your name? ");
    let sym1 = readlineSync.question("Pick a letter ");
    let name2 = readlineSync.question("May I have your name? ");
    let sym2 = readlineSync.question("Pick a letter ");
    this.player1 = new Player(sym1, name1);
    this.player2 = new Player(sym2, name2);
    this.currentPlayer = this.player1;
    game.showBoard();
    game.inputMove();
  }
  ////ask current player for a coordinate
  inputMove() {
    let input = readlineSync.question(
      `Make a move ${this.currentPlayer.name} `
    );
    if (!input) {
      game.inputMove();
      console.log("input not error");
      // input = readlineSync.question(`Make a move ${this.currentPlayer.name} `);
    } else if (input === "Make America Great Again") {
      GameOver();
    }
    game.showBoard();
    if (this.board.isValidMove(input, this.currentPlayer.sym)) {
      this.board.assignMove(input, this.currentPlayer.sym);
    } else {
      game.inputMove();
    }
    //Checks winning conditions
    if (this.board.findWinner()) {
      game.GameOver();
    }

    game.switchPlayer(this.currentPlayer);
  }

  switchPlayer() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
      game.inputMove();
    } else {
      this.currentPlayer = this.player1;
      game.inputMove();
    }
  }
  GameOver() {
    if (this.board.isGameOver()) {
      console.log(`Thank you for playing.
      <<<<<Gratz ${this.currentPlayer.name} >>>>>
         you can close the command line now....
         ....................nothing more to see here..
         im serious, its done, thats it.....
          Three days work right here...derp`);
      // this.currentPlayer.win++;
      // console.log(
      //   `${this.player1.name} has: ${this.player1.win} wins. /n ${
      //     this.player2.name
      //   } has: ${this.player2.win} `
      // );
      // game.start();
    }
  }
}

let game = new Game();
game.start();

module.exports = Game;
