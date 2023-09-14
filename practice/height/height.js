(function($){
  $(document).ready(function(){
    $("#element").width("100px");
    var result = $("#element").width();
    $("#result").html(result); //結果出力用
  });
})(jQuery);