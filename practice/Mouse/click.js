(function($){
  $(document).ready(function(){
    $("#elem").mouseover(function(){
      $("#result").html(parseInt($("#result").html()) + 1);
    });
  });
})(jQuery);