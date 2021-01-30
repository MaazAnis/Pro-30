class Block extends BaseClass  {
  constructor(x, y, width, height){
   super(x,y,50,50)

   this.Visibility = 255
  }

  display() {
  console.log(this.body.speed)
  if(this.body.speed < 8) {
    super.display()
  }
  else{
   World.remove(world,this.body)
   push()
   this.Visibility = this.Visibility-5
   tint(255,this.Visibility)
   rect(this.body.position.x, this.body.position.y, 50, 50)
   pop()
  }
}

};
