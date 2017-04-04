//Teel jQuery to give up the dollar sign 
$.noConflict();

//jQuery 3.x-style ready event and locally scoped $
jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

var currentValue = $(this).val();
var vaildUser = $(this).attr("jdoe2");
var vaildPassword = $(this).attr("HAWK2017")

// function validateform(){

// if (user==null || user==""){
//   alert("Username can't be blank");
//   return false;
// }else if(user!="jdoe2"){
// 	alert("Username not found");
// 	return false
// }
// if(password!="HAWK2017"){
//   alert("Password/username combination not found");
//   return false;
//   }
// }

$('#un').addEventListener($('#submit'), function (event) {
  if (currentValue.match(vaildUser)) {
  	$('#pass').addEventListener($('#submit'), function (event) {
  		if (currentValue.match(vaildPassword)) {
   	 window.location.href = "/main-page";
   		}
    else{
    	$('#pass').innerHTML("Username/password combination not found");}
    }
	});
  } else {
  	$('#un').setCustomValidity("Username not found");
  }
});
    // $('#un').on('keyup focus blur', function(){
    // var currentValue = $(this).val();
    // var vaildPattern = $(this).attr('pattern');
    // console.log(currentValue, vaildPattern);
    // if(currentValue.match(vaildPattern)){
    //  $('#pass').on('keyup focus blur', function(){
    // var currentValue = $(this).val();
    // var vaildPattern = $(this).attr('pattern');
    // console.log(currentValue, vaildPattern);
    // if(currentValue.match(vaildPattern)){
    //   window.location.href = "/main-page";
    // }
    // }
});