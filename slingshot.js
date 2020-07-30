class Slingshot {
constructor(bodyA , pointB){
var options = {
    bodyA : bodyA,
    pointB : pointB,
    stiffness:0.4,
    length : 20
}
this.sling = Constraint.create(options);
this.pointB = pointB;
World.add (world, this.sling);

}
display(){
    if(this.sling.bodyA){
    push()
    if(this.sling.bodyA.position.x < 180){

    

    stroke("brown");
strokeWeight(7);
line(this.sling.bodyA.position.x - 20 , this.sling.bodyA.position.y , this.pointB.x - 10 , this.pointB.y);
line(this.sling.bodyA.position.x - 20 , this.sling.bodyA.position.y , this.pointB.x + 20 , this.pointB.y);
    }
    else{
        stroke("brown");
        strokeWeight(5);
        line(this.sling.bodyA.position.x + 20 , this.sling.bodyA.position.y , this.pointB.x - 10 , this.pointB.y);
        line(this.sling.bodyA.position.x + 20 , this.sling.bodyA.position.y , this.pointB.x + 20 , this.pointB.y);
    }
pop()
}
}
fly(){
    this.sling.bodyA = null;


}
}