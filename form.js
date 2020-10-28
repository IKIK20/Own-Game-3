class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.reset = createButton('Reset');
    }

    display(){
        textSize(35)
        this.title.html("TBD")
        this.title.position(600,50)

        this.input.position(570,300)
        this.input.size(150,30)
        this.button.position(600,400)
        this.button.size(100,50)
        this.reset.position(550,740)
        this.reset.size(200,50)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(650,400);
          });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        });
    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
        this.title.hide()
    }

}


