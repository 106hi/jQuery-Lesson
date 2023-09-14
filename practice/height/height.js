(function($){
  $(document).ready(function(){
    $("#element").height("270px");
    $("#element").width("100px");

    var result1 = $("#element").height();
    $("#result1").html(result1);
    var result2 = $("#element").width();
    $("#result2").html(result2); //結果出力用
    var result3 = $("#element").css("background-color");
    $("#result3").html(result3);
  });
})(jQuery);