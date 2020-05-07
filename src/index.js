import "./assets/scss/main.scss";


window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    let sidebar = require('./js/sidebar'),
        tags = require('./js/tags'),
        modal = require('./js/modal');


    sidebar();
    tags();
    modal();
});