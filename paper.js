class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:4

        }
        this.body=Bodies.circle(x,y,r/2, options);

        World.add(world,this.body)
        this.radius=r;
    }
    display(){
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
}

//options ---> properties of the body