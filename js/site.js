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

 $('#form').on('submit', function (event) {
 	event.preventDefault();
 if (currentUser=vaildUser) {
		if (currentPassword=vaildPassword) {
			var newURL = window.location.href + "main-page";
 	 window.location.href = (newURL);
   		}	
   else{
  	alert("Username/password combination not found");
   }	
}
else{
	alert("Username not found")
}
});

$('.forgot').on('click', function (event) {
 	 window.location.href = "https://ots.iit.edu/help-and-support";
});
});