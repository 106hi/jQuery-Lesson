(function($){
  $(document).ready(function(){
    $("#elem").hover(function(){
      $("#result").html(parseInt($("#result").html()) + 1);
    });
  });
})(jQuery);