var needs_resizing = true;

$(function() {
    // If browser doesn't support console log (like IE) set to empty function, so don't get errors.
    if ( ! window.console ) {
        console = { log: function(){} };
    }
    update_image_size();

    // Update image size at max every 100ms
    setInterval(update_image_size, 100);
    $(window).resize(function() {
        needs_resizing = true;
    });

});


function update_image_size() {
    if (needs_resizing == false) {
        return;
    }
    needs_resizing = false;
    $("#main_image").css("height", $(window).height());
}
