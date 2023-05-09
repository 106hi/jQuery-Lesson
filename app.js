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

$(function(){
  $('.box1').slideDown(1500, function(){
    $('.box1').css({'background-color':'#0000ff',
    'height':'100px',
    'width':'200px'
    }).slideUp(1500);
  });
});