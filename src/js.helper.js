const Helper = function () {
};

Helper.prototype.setOption = function (optionTitle, options, defaultOptions) {
    return options[optionTitle] === undefined ? defaultOptions[optionTitle] : options[optionTitle];
}