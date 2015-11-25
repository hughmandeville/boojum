/*
 * http://developers.soundcloud.com/docs/api/html5-widget
 */
var sc_widget = null;
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

    var sc_iframe = document.querySelector('#soundcloud_player_iframe');
    sc_widget = SC.Widget(sc_iframe);


    $("#sample_1").on("click", function() {
        sc_widget.load("https://soundcloud.com/seth-williams-441568806/district-plege-promo1", {callback: play_audio});
    });
    $("#sample_2").on("click", function() {
        sc_widget.load("https://soundcloud.com/seth-williams-441568806/sethwilliamsmade4eachothercip", {callback: play_audio});
    });
    $("#sample_3").on("click", function() {
        sc_widget.load("https://soundcloud.com/seth-williams-441568806/seth-williams-the-judges-clip", {callback: play_audio});
    });
});


function play_audio() {
    sc_widget.play();
}

function update_image_size() {
    if (needs_resizing == false) {
        return;
    }
    needs_resizing = false;
    $("#main_image").css("height", $(window).height());
}
