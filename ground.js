class Ground{
    constructor(x,y, w,h){
        this.width=w
        this.height=h
        var options={
            isStatic:true
        }
        this.bottom=Bodies.rectangle(x,y, w, h, options)
        
        World.add(world,this.bottom)

        
    }
    display(){
        rectMode(CENTER)
        rect(this.bottom.position.x, this.bottom.position.y, this.width, this.height)
    }
}
