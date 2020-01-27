var complexNo = /** @class */ (function () {
    function complexNo(real, img) {
        this.real = real;
        this.img = img;
    }
    complexNo.prototype.getNo = function () {
        console.log("This no. is ", this.real, "+", this.img + "i");
    };
    complexNo.prototype.setNo = function (real, img) {
        this.real = real;
        this.img = img;
    };
    complexNo.prototype.multiply = function (C1, C2) {
        console.log("Product is ", C1.real * C2.real - C1.img * C2.img, "+", C1.real * C2.img + C1.img * C2.real, "i");
    };
    return complexNo;
}());
var C1 = new complexNo(2, 1);
var C2 = new complexNo(3, 4);
C1.getNo();
C2.getNo();
var C3 = new complexNo(0, 0);
C3.multiply(C1, C2);
