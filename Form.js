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
  this.text2=createElement('h3')  
  this.text3=createElement('h3')  
  this.button1=createButton('206')
  this.button2=createButton('142')
  this.button3=createButton('126')
  this.button4=createButton('154')  
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
  displayText(){
    this.text2.html("You Have Clicked The Right Option")
    this.text2.position(displayWidth/2 + 200, displayHeight/2);
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
      this.text2.html("You Have Clicked The Right Option")
      this.text2.position(displayWidth/2 + 200, displayHeight/2);
     
      counter=counter+1
    });
    this.text2.html("")
    this.text2.position(displayWidth/2 + 200, displayHeight/2); 
    
    
    
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
displayButton2(){
  this.button1.position(displayWidth/2+200,displayHeight/2-650);
  this.button1.width=5000
  this.button1.height=5000
  this.button2.position(displayWidth/2 + 200, displayHeight/2-630);
  this.button3.position(displayWidth/2 + 200, displayHeight/2-610);
  this.button4.position(displayWidth/2 + 200, displayHeight/2-580);
  this.button3.mousePressed(()=>{
    
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.text3.html("You Have Clicked The Right Option")
    this.text3.position(displayWidth/2 + 200, displayHeight/2-580);
   
    counter=counter+1
  })

this.text3.html("")
this.text3.position(displayWidth/2 + 200, displayHeight/2-580);
this.button1.mousePressed(()=>{
  this.button1.hide();
  this.button2.hide();
  this.button3.hide();
  this.button4.hide();
  this.text.html("You Have Clicked The Wrong Option. Wait Till The Next Question Appears")
this.text.position(displayWidth/2 + 200, displayHeight/2-580);
});
this.button2.mousePressed(()=>{
  this.button1.hide();
  this.button2.hide();
  this.button3.hide();
  this.button4.hide();
  this.text.html("You Have Clicked The Wrong Option. Wait Till The Next Question Appears")
this.text.position(displayWidth/2 + 200, displayHeight/2-580);
});
this.button4.mousePressed(()=>{
  this.button1.hide();
  this.button2.hide();
  this.button3.hide();
  this.button4.hide();
  this.text.html("You Have Clicked The Wrong Option. Wait Till The Next Question Appears")
this.text.position(displayWidth/2 + 200, displayHeight/2-580);
});
} 
}