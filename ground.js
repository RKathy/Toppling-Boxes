class Ground{
    constructor(x,y,cwidth,cheight){
        var groundOptions={
            isStatic:true
        }
        this.ground=Bodies.rectangle(x,y,cwidth,cheight,groundOptions);
        World.add(world,this.ground);
        this.width=cwidth;
        this.height=cheight;
        
    }   
    display(){
        rectMode(CENTER);
        var position=this.ground.position;
        rect(position.x,position.y,this.width,this.height);
    }
}
