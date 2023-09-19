(function($){
  $(document).ready(function(){
    $("#element").hide();
    $("#btn").click(function(){
      $("#element").fadeIn();
    });
  });
})(jQuery);