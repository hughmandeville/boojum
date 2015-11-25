var needs_resizing = true;

$(function() {
    // If browser doesn't support console log (like IE) set to empty function, so don't get errors.
    if ( ! window.console ) {
        console = { log: function(){} };
    }
    update_image_size();

    setInterval(update_image_size, 100);
    
    /* XXX: update to only resize every 100ms */
    $(window).resize(function() {
        needs_resizing = true;
    });
});



function update_image_size() {
    if (needs_resizing == false) {
        return;
    }
    $("#main_image").css("height", $(window).height());
    needs_resizing = false;
}
