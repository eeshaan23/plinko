class Bird extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.body = Bodies.circle(x,y, 10, options)
      World.add(world, this.body)
    }
  
    display() {
      
      super.display();
    }
  }
  