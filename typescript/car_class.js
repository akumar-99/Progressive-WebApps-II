// class Car {
//     engine: string;
//     constructor(engine:string){
//         this.engine = engine
//     }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     disp():void {
//         console.log("Engine is : " + this.engine)
//     }
// }
// let  C1 = new Car("Honda");
// C1.disp();
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    return Car;
}());
var Engine = /** @class */ (function (_super) {
    __extends(Engine, _super);
    function Engine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Engine.prototype.disp = function () {
        console.log("Engine is : " + this.engine);
    };
    return Engine;
}(Car));
var C1 = new Engine("Honda");
C1.disp();
