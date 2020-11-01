class Paper{
    constructor(x,y,r){
        var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x, this.y,this.r/2, options)
        this.image=loadImage("paper.png")
        World.add(world,this.body)
    }
    display(){

        var paperPos 

        paperPos = this.body.position

        push()
        translate(paperPos.x,paperPos.y)
        rectMode(CENTER)       
        strokeWeight(4)
        stroke("red")
        fill("white")
        image(this.image,0,0,50,50)
        ellipse(0,0,this.r,this.r);
        pop()
    }
}