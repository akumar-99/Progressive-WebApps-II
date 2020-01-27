// class Car {
//     engine: string;
//     constructor(engine:string){
//         this.engine = engine
//     }
    
//     disp():void {
//         console.log("Engine is : " + this.engine)
//     }
// }
 
// let  C1 = new Car("Honda");
// C1.disp();

class Car {
    engine: string;
    constructor(engine:string){
        this.engine = engine
    }
}

class Engine extends Car {
    disp():void {
        console.log("Engine is : " + this.engine)
    }
}
 
let  C1 = new Engine("Honda");
C1.disp();