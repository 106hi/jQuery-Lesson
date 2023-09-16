(function($){
  $(document).ready(function(){
    $("#elem").click(function(){
      $("#result").html(parseInt($("#result").html()) + 1);
    });
  });
})(jQuery);