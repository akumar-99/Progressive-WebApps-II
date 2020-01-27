function array_duplicate(arra) {
    var object = {};
    var result = [];
    arra.forEach(function duplicate(item) {
        if (!object[item]) {
            object[item] = 0;
        }
        object[item] += 1;
    });
    for (var i in object) {
        if (object[i] > 1) {
            result.push(i);
        }
    }
    console.log(result);
}
var arr1 = Array(1, 2, 1, 2, 3, 4, 3);
array_duplicate(arr1);
