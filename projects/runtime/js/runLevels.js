var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    function createSawObject(x, y){
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      var obstacleImage = draw.bitmap("img/sawblade.png");
      obstacleImage.x = -25;
      obstacleImage.y = -25;
      game.addGameItem(sawBladeHitZone);
      sawBladeHitZone.addChild(obstacleImage);
    } 
    function createEnemy(x, y){
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);
      enemy.addChild(redSquare);
      enemy.velocityX = -4;
      enemy.rotationalVelocity = -3;
      enemy.onPlayerCollision = function(){
        game.changeIntegrity(-30);
      }
      enemy.onProjectileCollision = function(){
        game.increaseScore(100);
        enemy.shrink();
      }
    }
    function createReward(x, y){
      var reward = game.createGameItem("reward", 25);
      var greenSquare = draw.rect(50, 50, "green");
      greenSquare.x = -25;
      greenSquare.y = -25;
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);
      reward.addChild(greenSquare);
      reward.velocityX = -4;
      reward.rotationalVelocity = -3;
      reward.onPlayerCollision = function(){
        game.changeIntegrity(200);
        reward.shrink()
      }
      reward.onProjectileCollision = function(){
        reward.flyTo(reward.x, 0);
      }
    }
    function createMarker(){
      var marker = game.createGameItem("marker", 25);
      var blueSquare = draw.rect(50, 50, "blue");
      blueSquare.x = -25;
      blueSquare.y = -25;
      marker.x = x;
      marker.y = y;
      game.addGameItem(marker);
      marker.addChild(greenSquare);
    
    }
    
    //Make Marker
      //createMarker(200, groundY - 50);

    //Make rewards
    createReward(2000, groundY - 50);

    //Make objects
    createSawObject(1000, 460);
    createSawObject(700, 360);
    createSawObject(1300, 400);

    //Make enemys
    createEnemy(900, groundY - 50);
    createEnemy(1200, groundY - 50);

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}