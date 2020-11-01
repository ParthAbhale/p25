class Ground{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,800,20,{isStatic:true})
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position

        rectMode(CENTER)
        rect(pos.x,pos.y,800,20)
    }
}