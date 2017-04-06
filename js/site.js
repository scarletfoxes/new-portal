//Teel jQuery to give up the dollar sign 
$.noConflict();

//jQuery 3.x-style ready event and locally scoped $
jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

// var currentUser = $('#un').val();
// var vaildUser = "jdoe2";
// var currentPassword = $('#pass').val();
// var vaildPassword = "HAWK2017";

$('#un').on('keyup focus blur', function(){
    window.currentUser = $(this).val();
console.log(currentUser);
});

$('#pass').on('keyup focus blur', function(){
    window.currentPassword = $(this).val();
console.log(currentPassword);
});

 $('#form').on('submit', function(event) {
 	event.preventDefault();
   if (currentUser=="jdoe2") {
  alert("in if");
    if (currentPassword=="HAWK2017") {
      alert("in if if");
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

});