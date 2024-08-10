var list = [5, 9, 3, 1, 2, 8, 4, 7, 6];
var sorting = function (list) {
    var _a;
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list.length + 1; j++) {
            if (list[j] > list[j + 1]) {
                _a = [list[j + 1], list[j]], list[j] = _a[0], list[j + 1] = _a[1];
            }
        }
    }
    return list;
};
var bubbleSort = function () {
};
module.exports = {
    sorting: sorting
};
