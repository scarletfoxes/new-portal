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
  alert(currentUser);
 	event.preventDefault();
   if (currentUser=vaildUser) {
  alert("in if");
    if (currentPassword=vaildPassword) {
      alert("in if if");
      var newURL = window.location.href + "main-page";
   window.location.href = (newURL);
      } 
   else if (currentUser!=vaildUser){
     alert("hi");
    alert("Username/password combination not found");
   }  
}
else if (currentPassword!=vaildPassword){
  alert("Username not found")
}

});

});