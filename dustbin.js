class Dustbin{
    constructor(x,y,width,height){
      this.body= Bodies.rectangle(x,y,width,height,{isStatic:true});
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      this.image = loadImage("dustbingreen.png")
      World.add(world,this.body);      
    }

    display(){
      var pos = this.body.position

        strokeWeight(4)
        stroke("green")
        fill("white")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height);
        image(this.image, 535, 530,150,150);
    }
}