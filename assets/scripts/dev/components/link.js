// Init object
let link = {};

// Init functions
link.functions = {};

link.functions.start = () => {

    // Get all link preload attribute
    let preloadLink = $('link[rel="preload"]');

    // Change attribute value
    $.each(preloadLink, (index, value) => {
        preloadLink.eq(index).attr('rel', 'stylesheet');
    });

}