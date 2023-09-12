(function($){
  $(document).ready(function(){
    var contents = $("div:first").html();
    $("#hello").toggleClass("on");
    $("#world").toggleClass("on");
  });
})(jQuery);