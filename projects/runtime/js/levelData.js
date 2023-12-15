var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY},
          { type: "sawblade", x: 600, y: groundY},
          { type: "enemy", x: 750, y:groundY - 50},
          { type: "sawblade", x: 900, y: groundY},
          { type: "reward", x:1000, y:groundY - 120},
          { type: "enemy", x: 1150, y:groundY - 50},
          { type: "marker", x: 1400, y:groundY - 50},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY},
          { type: "enemy", x: 500, y: groundY - 50},
          { type: "sawblade", x: 600, y: groundY},
          { type: "reward", x: 790, y: groundY - 50},
          { type: "sawblade", x: 900, y: groundY},
          { type: "marker", x: 2000, y: groundY - 50},
        ],
      },
      {
        name: "JUMP",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY},
          {type: "enemy", x: 500, y: groundY - 50},
          { type: "sawblade", x: 600, y: groundY},
          { type: "enemy", x: 790, y: groundY - 50},
          { type: "sawblade", x: 900, y: groundY},
          {type: "enemy", x: 980, y:groundY - 50},
          { type: "reward", x: 1200, y:groundY - 100},
          { type: "marker", x: 1300, y: groundY - 50},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
