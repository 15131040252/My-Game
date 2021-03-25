class Player
{
    constructor()
    {
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = 0;
    }

    readCount()
    {
       var playerCountref = database.ref("playercount")
       playerCountref.on("value",  function(data)
       {
           playerCountsketch = data.val();
       })
    }
    writeCount(count)
    {
       var playerWriteref = database.ref("/");
       playerWriteref.update({"playercount" : count});
    }
   
     //"allPlayers"   
      //player1
         // name  : 
         //distance : 

    writePlayerinfo()
    {
      var playerindex = "allPlayers/player" + this.index;
      database.ref(playerindex).set({name : this.name , distance : this.distance});

    }

   // allplayersketch = [[Hitansh, 100], [Ram, 80],]
    
   static readPlayerinfo()
   {
       var playerinfoREF = database.ref("allPlayers");
       playerinfoREF.on("value" , function(data)
       {
           allPlayersketch = data.val();
       });
   }

   readCarsEnd()
   {
      var carsendRead = database.ref("CarsatEnd");
      carsendRead.on("value" , function(data)
      {
          this.rank = data.val();
      });
   }

   static writeCarsEnd(rank)
   {
       var carsendWrite = database.ref("/");
       carsendWrite.update({"CarsatEnd" : rank});
   }

}