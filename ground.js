class Ground{
    constructor(){
        var option={
            isStatic:true
        }


         this.body=Bodies.rectangle(200,380,400,30,option)
         World.add(world,this.body)


    }
    display(){
var pos=this.body.position
fill("yellow")
    rectMode(CENTER)
rect(pos.x,pos.y,400,30)

    }
}