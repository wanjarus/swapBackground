(function($) {
    $.fn.swapBackground = function(options) {
        var opts = options;
        return this.each(function() {
            var defaults = {
                srcSm: $(this).data("sm"),
                srcLg: $(this).data("lg"),
                mediaQuery: 1023
            };
            var options = $.extend({}, defaults, opts);

            var $this = $(this);
            var srcSm = options.srcSm;
            var srcLg = options.srcLg;
            var mediaQuery = options.mediaQuery;

            function swapImages() {
                if (window.matchMedia("(max-width: " + mediaQuery + "px)").matches) {
                    $this.css('background-image', 'url(' + srcSm + ')');
                } else {
                    $this.css('background-image', 'url(' + srcLg + ')');
                }
            }
            swapImages();
            $(window).resize(function() {
                swapImages();
            });
        });
    }
}(jQuery));