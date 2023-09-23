(function($){
  $(function(){
    function log(text) {
      $('#log').append($('<li />').text(text));
    }
    // ここにイベント名を書く
    $('#button').on('click', function (event) {
      $('#log').empty();
      log('currentTarget =' + event.currentTarget);
      log('target        =' + event.target);
      log('pageX         =' + event.pageX);
      log('pageY         =' + event.pageY);
      log('altKey        =' + event.altKey);
    })
  });
})(jQuery);