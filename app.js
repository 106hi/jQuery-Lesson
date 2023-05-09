// $(function(){でもいい
// $(document).ready(function(){
  // $('body').html('<h1>Hello jQuery!!<?h1>');
// });

// $(function(){
  // $('.box1').css({
    // 'background-color':'#0000ff',
    // 'height':'100px'
  // });
// });

// アニメーション
// $(function(){
  // $('.box1').slideDown(1500, function(){
    // $('.box1').css({'background-color':'#0000ff',
    // 'height':'100px',
    // 'width':'200px'
    // }).slideUp(1500);
  // });
// });

// マウスオーバー、マウスアウト
// $(function(){
  // $('.box1').mouseover(function(){
    // $('.box1').addClass('box1-ext');
  // });
  // $('.box1').mouseout(function(){
    // $('.box1').removeClass('box1-ext');
  // });
// });

// マウスクリック
$(function(){
  $('.box1').on('click',function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});