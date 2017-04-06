//Teel jQuery to give up the dollar sign 
$.noConflict();

//jQuery 3.x-style ready event and locally scoped $
jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

var currentUser = $('#un').val();
var vaildUser = "jdoe2";
var currentPassword = $('#pass').val();
var vaildPassword = "HAWK2017";

console.log(currentUser, vaildUser);
console.log(currentPassword, vaildPassword);


 $('#form').on('submit', function(event) {
  alert("in loop");
 	event.preventDefault();

});

});