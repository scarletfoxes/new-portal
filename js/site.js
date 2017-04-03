//Teel jQuery to give up the dollar sign 
$.noConflict();

//jQuery 3.x-style ready event and locally scoped $
jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

    $('#un').on('keyup focus blur', function(){
    var currentValue = $(this).val();
    var vaildPattern = $(this).attr('pattern');
    console.log(currentValue, vaildPattern);
    if(currentValue.match(vaildPattern)){
     $('#pass').on('keyup focus blur', function(){
    var currentValue = $(this).val();
    var vaildPattern = $(this).attr('pattern');
    console.log(currentValue, vaildPattern);
    if(currentValue.match(vaildPattern)){
      window.location.href = "/main-page";
    }
    }
  });