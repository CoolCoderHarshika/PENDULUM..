class chain
{
    constructor(bodyA,pointB)
    {
        var option={bodyA:bodyA,
                    pointB:pointB}
            this.object=Constraint.create(option)
            World.add(world,this.object)
    }

    display()
    {
        line(this.object.bodyA.position.x,this.object.bodyA.position.y,this.object.pointB.x,this.object.pointB.y)



    }










}