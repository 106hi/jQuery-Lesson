(function($){
  $(document).ready(function(){
    $("#elem").focus(function(){
      $("#result").html(parseInt($("#result").html()) + 1);
    });
  });
})(jQuery);