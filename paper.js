class Paper{

constructor(x,y,width,height){

    var option={
        isSatic:false,
        restitution:0.3,
        density:1.2,
        friction:0.5
    }

   this.body=Bodies.rectangle(x,y,width,height,option);
   this.width=120;
   this.height=120
   this.x=300;
   this.y=540;
   this.image= loadImage("sprites/paper.png")
   World.add(world,this.body)
}

display(){

//var pos=this.body.position;
fill("white")
imageMode (CENTER);
image(this.image,300,540,this.width,this.height);
    
}

















}