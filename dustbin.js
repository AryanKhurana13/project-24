class Dustbin{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.bottom=Bodies.rectangle(x,y,200,20, options)
        this.left=Bodies.rectangle(x-100, y-90,20, 200, options)
        this.right=Bodies.rectangle(x+100, y-90,20,200,options)
        World.add(world,this.bottom)
        World.add(world,this.left)
        World.add(world,this.right)
        
    }
    display(){
        rectMode(CENTER)
        rect(this.bottom.position.x, this.bottom.position.y, 200,20)
        rect(this.left.position.x, this.left.position.y, 20,200)
        rect(this.right.position.x, this.right.position.y, 20,200)
    }
}
