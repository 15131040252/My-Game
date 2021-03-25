class Game
{
   constructor(){}
   
   readGamestate()
   {
     var gameStateref = database.ref("gamestate");
     gameStateref.on("value" ,function(data)
     {
        gameStatesketch = data.val();
     })
   }

   writeGamestate(gstate)
   {
      var writeGamestateref = database.ref("/");
      writeGamestateref.update({"gamestate" : gstate});
   }

   async start()
   {
      if(gameStatesketch === 0)
      {
         playerobj = new Player();
         var playercountref = await database.ref("playercount").once("value");
         if(playercountref.exists())
         {
            playerCountsketch = playercountref.val();
            playerobj.readCount();
         }
         
         formobj = new Form();
         formobj.display();

      }

         car1 = createSprite(100 , 200, 10 , 10);
         car1.addImage("car1", car1_img);
         car1.scale = 0.3;
         car2 = createSprite(200 , 200 , 10 , 10);
         car2.addImage("car2" , car2_img);
         car2.scale = 0.2
         car3 = createSprite(300 , 200 , 10 , 10);
         car3.addImage(car3_img);
         car3.scale = 0.25
         car4 = createSprite(400 , 200 , 10 , 10);
         car4.addImage(car4_img);
         car4.scale = 0.3
         
         cars = [car1 , car2 , car3 , car4]

   }
   
   //We will shift them to allplayers ?
   //Which function in plyer class does this shifting of playerinfo ?

   play()
   {
      formobj.disappear();
      Player.readPlayerinfo();
      playerobj.readCarsEnd();

      if(allPlayersketch !== undefined)
      {
         
         background("#c68767");
         imageMode(CENTER);
         image(track , displayWidth/2 ,displayHeight/2 , displayWidth-60 , displayHeight);
         console.log(displayWidth);
         console.log(displayHeight);
         var carIndex = 0;
         var x = displayWidth/2+50;
         var y = -40;

        //allplayers = [[Hitansh,20], [Ram, 150], [Gopal, 300], [Meena, 150]]
      
        for(var plr in allPlayersketch)
        {
          carIndex += 1 ;
          x += 50;
          y += 80;
          //y = displayHeight - allPlayersketch[plr].distance

          cars[carIndex - 1].x = x
          cars[carIndex - 1].y = y
          
          if(carIndex === playerobj.index) 
          {
            stroke(10);
            fill("red");
            ellipse(x , y , 60 , 60);
            camera.position.x = displayWidth/2;
            camera.position.y = cars[carIndex - 1].y;
          }
          
          if(playerobj.distance>3860)
          {
             gameStatesketch = 2;
             playerobj.rank += 1;
             Player.writeCarsEnd(playerobj.rank);
          }
        }
      }

         if(keyDown(UP_ARROW) && playerobj.index !== null)
         {
            playerobj.distance += 10;
            playerobj.writePlayerinfo();
         }

         drawSprites();
   }

   end()
   {
      console.log("Game Ended");
      console.log(playerobj.rank);
   }
}