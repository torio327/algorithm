var selection = function (list) {
    var _a;
    for (var i = 0; i < list.length; i++) {
        var min = i;
        for (var j = i + 1; j < list.length; j++) {
            if (list[min] > list[j]) {
                min = j;
            }
        }
        _a = [list[min], list[i]], list[i] = _a[0], list[min] = _a[1];
    }
    return list;
};
module.exports = {
    selection: selection
};
