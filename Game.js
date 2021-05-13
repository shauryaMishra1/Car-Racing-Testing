class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      car1 = createSprite(50,200);
      car1.addImage("car1",car1img);
      car2 = createSprite(250,200);
      car2.addImage("car2",car2img);
      car3 = createSprite(450,200);
      car3.addImage("car3",car3img);
      car4 = createSprite(650,200);
      car4.addImage("car4",car4img);
      cars = [car1, car2, car3, car4];
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      //if(allPlayers !== undefined){
       // background(rgb(198,135,103));
        image(track, 0,-displayHeight*4,displayWidth/2, displayHeight*5);
        drawSprites();
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 5 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
  
          if (index === player.index){
            cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
            textSize(100)
            fill("black")
            text("Q. 17*6",displayWidth/2+200,displayHeight/2+200)
            text("Q. 14*9",displayWidth/2+200,displayHeight/2-700)
            if(keyIsDown(UP_ARROW)&& cars[index-1].y==displayHeight/2-700 ){
              gameState=2
             }
          }
          //textSize(15);
          
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        form.displayButton()
        }
        
      //}
  
      if(keyIsDown(UP_ARROW) && player.index !== null&& counter>=1){
        
        console.log(player.distance)
        player.distance +=10
        player.update();
      }
     
      if(player.distance > 3860){
        gameState = 3;
      }
     
      
    }
  stop(){
    textSize(15);
          
          text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
  }

  
    end(){
      console.log("Game Ended");
    }
  }