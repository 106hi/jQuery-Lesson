(function($){
  $(document).ready(function(){
    $("#elem").keypress(function(){
      $("#result").html(parseInt($("#result").html()) + 1);
    });
  });
})(jQuery);