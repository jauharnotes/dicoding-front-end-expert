/*
// tidak mengimplementasikan dependency injection
class Engine {
    constructor() {
      this.status = 'inactive';
    }
    
    activate() {
      this.status = 'active';
    }
  }
   
  class Car {
    constructor() {
      this.engine = new Engine();
    }
    
    start() {
      this.engine.activate();
      
      console.log(`status mesin: ${this.engine.status}`);
    }
  }
   
  const car = new Car();
  car.start(); // status mesin: active
  */


//  dengan dependency injection
class Engine {
    constructor() {
      this.status = 'inactive';
    }
    
    activate() {
      this.status = 'active';
    }
  }
  
class Car {
    constructor(engine) {
      this.engine = engine;
    }
    
    start() {
      this.engine.activate();
      
      console.log(`status mesin: ${this.engine.status}`);
    }
  }
   
  const engine = new Engine();
  const car = new Car(engine);
  car.start(); // status mesin: active