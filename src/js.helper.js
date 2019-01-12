const Helper = function () {
};

Helper.prototype.getQueryParam = function (name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

Helper.prototype.setOption = function (optionTitle, options, defaultOptions) {
    return options[optionTitle] === undefined ? defaultOptions[optionTitle] : options[optionTitle];
}

Helper.prototype.clone = function (object) {
    return Array.isArray(object) ? Object.assign([], object) : Object.assign({}, object);
}

Helper.prototype.sortByDate = function (object, desc, keyTitle) {
    var clone = this.clone(object);

    var desc = (desc === undefined) ? false : desc;
    var keyTitle = (keyTitle === undefined) ? 'date' : keyTitle;

    return clone.sort(function (a, b) {
        var first = (desc) ? b : a;
        var second = (desc) ? a : b;

        return new Date(first.date) - new Date(second.date);
    });
}