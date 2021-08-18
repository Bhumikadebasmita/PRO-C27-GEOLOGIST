class Rubber{

    constructor(x,y,r){
    
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1,
        }
    
        this.body = Bodies.circle(x,y,r,options);
        
        this.radius = r;
    
        World.add(world, this.body);
    
    }
    
    display(){
    
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("black");
        fill("black");
        ellipse(0,0,this.radius,this.radius);
        pop();
    
    
    }
    
    }