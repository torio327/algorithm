var bubbleTwo = function (list) {
    var _a;
    for (var i = list.length - 1; i > -1; i--) {
        for (var j = list.length - 1; j > list.length - 1 - i; j = j - 1) {
            console.log(j);
            if (list[j] < list[j - 1]) {
                _a = [list[j], list[j - 1]], list[j - 1] = _a[0], list[j] = _a[1];
            }
        }
    }
    return list;
};
module.exports = {
    bubbleTwo: bubbleTwo
};
