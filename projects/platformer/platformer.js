$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

     for (let i = 100; i < canvas.width; i += 100) {
       createPlatform(i, canvas.height, -1, -canvas.height);
     }
     for (let i = 100; i < canvas.height; i += 100) {
       createPlatform(canvas.width, i, -canvas.width, -1);
    }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

      createPlatform(10, 700, 1450, 50);//floor
      createPlatform(650, 475, 300, 25);//initial step
      createPlatform(300, 375, 300, 25);//initial step2
      createPlatform(1200, 200, 30, 500);//wall
      createPlatform(1225, 575, 100, 25);//Final step
      createPlatform(1300, 455, 100, 25);//Final step2
      createPlatform(1225, 335, 100, 25);
      createPlatform(700, 275, 100, 25);//Mini#1
      createPlatform(1025, 200, 50, 25);//Mini#2
      createPlatform(120, 275, 100, 25);//Mini#3
      createPlatform(1100, 600, 100, 25);//Mini#4


    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
      createCollectable("max", 1150, 520, 10, 0)//groundSteve
      createCollectable("steve", 125, 240, 10, 0)//miniGroundSteve
      createCollectable("kennedi", 1250, 520, 10, 0)//caveSteve
      

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

      createCannon("left", 200, 2000) //Challenge for the second point
      createCannon("top", 900, 3000) //First dodgeable
      createCannon("top", 1400, 4000) //Reset

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
