hexo.extend.tag.register('dynimg', function (args) {
    var light = args[0];
    var dark = args[1];
    var alt = args[2] || "";
    var cls = args[3] || "dynamic-img";
    return ' <picture class="' + cls + '"> <source srcset="' +
        dark +
        '" media="(prefers-color-scheme: dark)"> <img alt="' +
        alt + '" src="' +
        light +
        '"></picture>'
});