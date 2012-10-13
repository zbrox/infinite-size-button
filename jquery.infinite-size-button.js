(function($) {
  $.fn.infinite_size = function(opts) {
    var options = $.extend({},
        {
          padding_top: 20,
          padding_bottom: 20,
          padding_left: 20,
          padding_right: 20
        },
        opts || {}
    );

    var counter = 0;
    var $this = $(this);
    var clone = $this.clone();

    var create = function() {
      counter += 1;
      
      clone.attr({
        id: 'infinite-size-' + counter
      }).appendTo('body');
      
      clone.css({
        position: 'absolute',
        width: $this.outerWidth(),
        height: $this.outerHeight(),
        opacity: 0,
        'padding-top': options.padding_top,
        'paddingBottom': options.padding_bottom,
        'paddingRight': options.padding_right,
        'paddingLeft': options.padding_left,
        zIndex: 999999
      });
    };

    var position = function() {
      clone.css({
        top: $this.offset().top - options.padding_top,
        left: $this.offset().left - options.padding_left
      });
    };

    return this.each(function(){
      create();
      position();
      $(window).resize(position).scroll(position);
    });
  };
})(jQuery);