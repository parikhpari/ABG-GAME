class Chain{
    constructor(bodyA,bodyB){
    //declared options for the chain object
    var options={
        bodyA: bodyA,
        bodyB: bodyB,
        length: 10,
        stiffness: 0.08
    }
    //to create a general chain from constraint class of matter.
    this.chain=Constraint.create(options);
    //to add it to the main world
    World.add(world,this.chain);
    }

    display(){
    //namespacing
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position;
        //to push changes from this point
        push();
        //to give it stroke weight
        strokeWeight(10);
        //to draw a line between bodyA and bodyB
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        //to pop changes from that certain point to this point
        pop();
    }
}