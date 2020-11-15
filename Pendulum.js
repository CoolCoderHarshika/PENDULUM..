class pendulum
{
    constructor(x,y)
    {
        var options={'isStatic':false,
    'restitution':0.7,
    'density':1.2,
    'friction':1.0}
        this.body= Bodies.circle(x,y,25,options)
            World.add(world,this.body)
           // this.width=70
            //this.height=70
    }
   
    display()
    {
        ellipseMode(RADIUS)
        fill("red")
        ellipse(this.body.position.x,this.body.position.y,25,25)

    }   
}
