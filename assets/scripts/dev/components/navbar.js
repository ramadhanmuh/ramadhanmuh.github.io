// Init object
let navbar = {};

// Init child
navbar = {
    button: {}
};

// Init functions
navbar.functions = {};

navbar.functions.hoverHandler = (element) => {
    element.addClass('text-primary');
}

navbar.functions.mouseLeaveHandler = (element) => {
    element.removeClass('text-primary');
}

navbar.functions.initChild = () => {
    navbar.button = $('nav').find('button');
}

navbar.functions.initEvent = () => {
    navbar.button.hover(function () {
        navbar.functions.hoverHandler($(this));
    });

    navbar.button.mouseleave(function () {
        navbar.functions.mouseLeaveHandler($(this));
    });
}

navbar.functions.start = () => {
    navbar.functions.initChild();
    navbar.functions.initEvent();
}