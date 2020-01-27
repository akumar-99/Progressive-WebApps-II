class complexNo{
    real:number;
    img:number;
    constructor(real:number, img:number){
        this.real = real;
        this.img = img;
    }
    

    getNo():void {
        console.log("This no. is ", this.real, "+", this.img+ "i");
    }
    
    setNo(real:number, img:number):void{
        this.real = real;
        this.img = img;
    }

    multiply(C1:complexNo, C2:complexNo):void{
        console.log("Product is ", C1.real*C2.real - C1.img*C2.img, "+", C1.real*C2.img + C1.img*C2.real, "i") ;

    }
}

let C1 = new complexNo(2,1);
let C2 = new complexNo(3,4);
C1.getNo();
C2.getNo();
let C3 = new complexNo(0,0);
C3.multiply(C1, C2);
