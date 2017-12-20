$(document).ready(function(){
  $('.table_chekbox input').change(function(){
    $('.go-next').removeClass('disable');
    if($(".table_chekbox input:checked").length == 0) {
      $(".go-next").addClass("disable");
    }
  });
  $('.go-next').click(function(){
    if($(this).hasClass('disable')){
      return false;
    } else {
    $('.first-block-form').toggle("medium");
    $('.second-block-form').toggle("medium");
    $('html, body').animate({scrollTop: $(".main-content-wrap").offset().top},500);
    return false;
    }
  });
  $('.go-back').click(function(){
    $('.first-block-form').toggle("medium");
    $('.second-block-form').toggle("medium");
    $('html, body').animate({scrollTop: $(".main-content-wrap").offset().top},500);;
    return false;
  });
  $('#menu-switch').click(function(){
    $('.page-header .top-menu').toggle('slow');
  });
});
