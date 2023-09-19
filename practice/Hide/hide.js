(function($){
  $(document).ready(function(){
    $("#element").hide();
    $("#btn").click(function(){
      $("#element").slideDown(300);
    });
  });
})(jQuery);