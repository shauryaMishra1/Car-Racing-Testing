class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
    this.option1=createButton('110')
    this.option2=createButton('102')
    this.option3=createButton('186')
    this.option4=createButton('235')
  this.text=createElement('h3')  
  }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
  2
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
    }
  displayButton(){
    this.option1.position(displayWidth/2 + 100, displayHeight/2-60);
    this.option1.width=5000
    this.option1.height=5000
    this.option2.position(displayWidth/2 + 100, displayHeight/2-40);
    this.option3.position(displayWidth/2 + 100, displayHeight/2-20);
    this.option4.position(displayWidth/2 + 100, displayHeight/2);
    this.option2.mousePressed(()=>{
      
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      
     counter=counter+1
    });
    this.option1.mousePressed(()=>{
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.text.html("You Have Clicked The Wrong Option. Wait Till The Next Question Appears")
    this.text.position(displayWidth/2 + 200, displayHeight/2);
  });
  this.option3.mousePressed(()=>{
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.text.html("You Have Clicked The Wrong Option. Wait Till The Next Question Appears")
  this.text.position(displayWidth/2 + 200, displayHeight/2);
});
this.option4.mousePressed(()=>{
  this.option1.hide();
  this.option2.hide();
  this.option3.hide();
  this.option4.hide();
  this.text.html("You Have Clicked The Wrong Option. Wait Till The Next Question Appears")
this.text.position(displayWidth/2 + 200, displayHeight/2);
});
}
  }