(function($){
  $(document).ready(function() {
    // セレクタ
    $selected = $("[data-name='brian']");
    // マッチした要素にスタイルを付与する
    $selected.each(function(index) {
      $(this).addClass("bingo");
    });
    $(".count").text($selected.length);
  });
})(jQuery);