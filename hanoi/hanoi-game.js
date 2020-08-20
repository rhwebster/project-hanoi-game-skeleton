class HanoiGame {
  constructor(towers = [[3, 2, 1], [], []]) {
    this.towers = towers;
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    /*
    true -> endTowerIdx is empty tower

    false -> start tower and end tower are the same tower
          -> startTowerIdx is empty tower
          -> first argument indicates empty tower
          -> second argument indicates a tower that doesn't exist
          -> first argument indicates a tower that doesn't exist
    */

    const startTower = this.towers[startTowerIdx];
    const endTower = this.towers[endTowerIdx];
    console.log(this.towers)
    console.log(startTower);
    console.log(endTower);
    console.log(startTower[startTower.length - 1]);
    console.log(lastTower[lastTower.length - 1]);


    if (endTower === undefined || startTower === undefined || startTower.length === 0) {
      //endTower exists and is not the same as startTower
      return false;
    } else if (startTower === endTower) {
      return false;
    } else if (endTower.length === 0) {
      return true;
    } else {
      return (startTower[startTower.length - 1] < lastTower[lastTower.length - 1]);
    }
  }

  move(startTowerIdx, endTowerIdx) {}

  isWon() {}

  // the below methods are complete and do not need to be modified
  print() {
    // will print our board nicely to our user
    console.log(JSON.stringify(this.towers));
  }

  promptMove(reader, callback) {
    this.print();
    reader.question("Enter a starting tower: ", (start) => {
      const startTowerIdx = parseInt(start);
      reader.question("Enter an ending tower: ", (end) => {
        const endTowerIdx = parseInt(end);
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  run(reader, callback) {
    // we will prompt our user to provide a start and stop index using
    // a readline interface
    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
      // if the move is invalid we tell the user
      if (!this.move(startTowerIdx, endTowerIdx)) {
        console.log("Invalid move!");
      }

      if (!this.isWon()) {
        // Continue to play!
        this.run(reader, callback);
      } else {
        this.print();
        console.log("You win!");
        callback();
      }
    });
  }
}

let newGame = new HanoiGame();
newGame.isValidMove(0,1);
module.exports = HanoiGame;
