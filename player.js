class Player {
    constructor(){
      this.index = null;
      this.level=0
      this.name = null;
      this.time=0
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "Players/Player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        level:this.level,
        time:this.time
      });
    }

    static getInfo(){
      var playerRef = database.ref('Players');
      playerRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
    
  }
  