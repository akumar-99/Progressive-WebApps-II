var cube = {
    side: null,
    calculate: function (side) { return (side * side * side); }
};
var ccube = {};
ccube.color = "red";
ccube.calculate = function (side) { return (side * side * side); };
console.log(ccube.calculate(5.5));
console.log(ccube.color);
