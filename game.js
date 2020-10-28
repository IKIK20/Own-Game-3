class Game{
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
    }

    play(){
        form.hide()
        console.log("we are in play state")

        Player.getInfo()
        if(player.index===1){
          line(950,10,950,790);  
        }
        else{
          line(550,10,550,790);
        }
      
    }

    rules(){
        form.hide()
        textSize(30)
        textAlign(CENTER)
        fill(0,0,0)
        text("RULES",650,50)
        fill(76,0,153)
        text("Read the following rules to understand how to play the game",650,100)
        text("You have 30 seconds to read the rules after which the game will automatically start.",650,150)
        textAlign(LEFT)
        fill(0,102,51)
        text("1. As soon as the game starts, a stopwatch will also start.",30,250)
        text("2. Your main objective is to solve the given riddles before your opponent and escape the room!",30,300)
        text("3. You will have a total of 5 questions and so will your opponent.",30,350)
        text("4. To answer the question you will need to type the answer in the text box.",30,400)
        text("5. You will be given 2 Hints per question and using it will add 30 seconds to your clock. ", 30,450)
        text("6. Giving a wrong answer will add 1 Minute to your stopwatch.",30,500)
        textAlign(CENTER)
        fill(102,0,21)
        text(" REMEMBER- You need to try to answer the questions as quick as possible",650,600)
        text("ALL THE BEST :)",650,650)

        // console.log("time is :"+ getSecondsToday())
        if(getSecondsToday()===endTimer){
          gameState=2
          console.log("gameState changed")
        }

    }

}