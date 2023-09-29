(function($){
  $(function(){
    function logEvent(event) {
      $('#log').prepend($('<li />').text(event.type + 'が発生しました'));
    }
    $('#button').on('mouseenter', function(event){
      $('#button').addClass('active');
      logEvent(event);
    });
    $('#button').on('mouseleave', function(event){
      $('#button').removeClass('active');
      logEvent(event);
    });
  });
})(jQuery);