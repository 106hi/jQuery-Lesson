(function($){
  $(document).ready(function(){
    var params = {
      "background-color": "#c00",
      "height": "250px",
      "width": "400px"
    }
    $("#element").css(params);

    var result1 = $("#element").height();
    $("#result1").html(result1);
    var result2 = $("#element").width();
    $("#result2").html(result2); //結果出力用
    var result3 = $("#element").css("background-color");
    $("#result3").html(result3);
  });
})(jQuery);