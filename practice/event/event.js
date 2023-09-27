(function($){
  $(function(){
    function logEvent(event) {
      $('#log').prepend($('<li />').text(event.type + 'が発生しました'));
    }
    $(document).on('click', '#button:not(.active)', function(event){
      logEvent(event);
      $(event.target).addClass('active');
    });
    $(document).on('click', '#button.active', function(event){
      logEvent(event);
      $(event.target).removeClass('active');
    });
  });
})(jQuery);