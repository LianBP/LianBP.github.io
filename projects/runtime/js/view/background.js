var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        var cirSize = 2.5; // var circle size.
        var lineSize = cirSize * 3 / 4; //var shiny size.

        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var planet1;
        var planet;
        var backPlanets = [];
        var pool = {
            saturno: "img/PlanetSat.jpg",
            mars: "img/Mars.jpeg",
            ice: "img/IcePlan.jpeg",
            tree: "img/tree.png"
        }
        
      
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
           
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'20, 7, 48');//20, 7, 48
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
           //Bellow the star loops so it appears in front of them. 
           

           // Making stars for the background
            for (var stars = 0; stars<150 ;stars++){
                var circle = draw.circle(cirSize, "white", "white", 2);
                circle.x = canvasWidth * Math.random();
                circle.y = canvasHeight * Math.random();
                background.addChild(circle);

                var shinyUp = draw.line(circle.x, circle.y, circle.x, circle.y + (circle.radius * -2), "white", lineSize);
                var shinyDown = draw.line(circle.x, circle.y, circle.x, circle.y + (circle.radius * 2), "white", lineSize);
                var shinyLeft = draw.line(circle.x, circle.y, circle.x + (circle.radius * -2), circle.y , "white", lineSize);
                var shinyRight = draw.line(circle.x, circle.y, circle.x + (circle.radius * 2), circle.y , "white", lineSize);
                
                background.addChild(shinyUp);
                background.addChild(shinyDown);
                background.addChild(shinyLeft);
                background.addChild(shinyRight);
            }
            //Make the moon.
            var moon = draw.bitmap("img/moon.png");
            moon.x = 1000;
            moon.y = 80;
            moon.scaleX = .4;
            moon.scaleY = .4;
            background.addChild(moon);
            //Will eventually get bigger the more u travel.
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var xx2 in pool) {
                var planetHeight = Math.random() * 290;
                var size = Math.random() / 2;
                planet = draw.bitmap(pool[String(xx2)]);
                planet.scaleX = size;
                planet.scaleY = size;
                planet.x = 200 * (Math.random() * 10);
                planet.y = groundY - planetHeight;
                background.addChild(planet);
                backPlanets.push(planet);
                console.log(pool.a1)
            }

            // TODO 3: Part 1 - Add a tree
            //Make saturn
            planet1 = draw.bitmap("img/PlanetSat.jpg");
            planet1.x = canvasWidth;
            planet1.y = groundY - 400;
            planet1.scaleX = .2;
            planet1.scaleY = .2;
            background.addChild(planet1);
            
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            planet1.x = planet1.x - 1.4;
            if (planet1.x < -220) {
            planet1.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < backPlanets.length; i++) {
                var planeta = backPlanets[i];
                planeta.x -= 2;
                if (planeta.x < 0){
                    planeta.x = canvasWidth;
                }
            }
            
        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
