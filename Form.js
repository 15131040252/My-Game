class Form
{
   constructor()
   {
      this.input = createInput("Please type your Name");
      this.button = createButton("Play !");
      this.greeting = createElement('h2');
      this.reset = createButton("Replay")
   }

   
   disappear()
   {
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
   }


   display()
   {
      var title = createElement('h1');
      title.html("Multiplayer Car Racing Game");
      
      title.position(displayWidth/2-30 , 50);
      this.input.position(displayWidth/2-30 , displayHeight/2-100);
      this.button.position(displayWidth/2+30 , displayHeight/2-50);
      this.reset.position(displayWidth-150 , 50);

      this.button.mousePressed(() =>
      {
          this.input.hide();
          this.button.hide();
          this.greeting.hide();
          
          playerobj.name = this.input.value();
          playerCountsketch += 1;
          playerobj.index = playerCountsketch;
          playerobj.writePlayerinfo();
          playerobj.writeCount(playerCountsketch)
          
          this.greeting.html("Welcome to the Multiplayer Car Racing Game" + playerobj.name);
          this.greeting.position(displayWidth/2-50 , displayHeight/2);
      }) 
      this.reset.mousePressed(() =>
      {
         playerobj.writeCount(0);
         gameobj.writeGamestate(0);
         database.ref('/').update({"allPlayers":null , "CarsatEnd" : 0})
      })
   }
}