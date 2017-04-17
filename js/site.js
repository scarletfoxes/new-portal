//Teel jQuery to give up the dollar sign
$.noConflict();

//jQuery 3.x-style ready event and locally scoped $
jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

//js to test username and password 
var error = 'error';
var showError = false;
window.currentUser = "";
window.currentPassword = "";

$('#un').on('keyup focus blur', function(){
    window.currentUser = $(this).val();
});

$('#pass').on('keyup focus blur', function(){
    window.currentPassword = $(this).val();
});

 $('#form').on('submit', function(event) {
 	event.preventDefault();
   if (currentUser=="jdoe2" &&  currentPassword=="HAWK2017") {
    var newURL = window.location.href + "main-page";
    $('#form')[0].reset();
    window.location.href = (newURL);
      }
   else{
      if (!showError) {
         $('#list').append($('<li></li>', { class: error, text : 'Username/password combination not found'}));
         showError=true;
      }
}

});


$('.logout').click(function(event){
   $('#form')[0].reset();
   window.location.href = "../../index.html";
});

//drop down menu
// if ($('html').hasClass('nojs')) {
//   $('#courses').append($('<li></li>', { class: nojs, text : 'Page must enable JaveScript to use feature'
//   }));
// }

$('.fall2016').hide();
$('.spring2017').hide();
$('.fall2017').hide();
$( "#back").hide();

$('#f16').click(function(){
  $( ".fall2016").show();
  $( ".term").hide();
  $( "#back").show();
});

$('#s17').click(function(){
  $( ".spring2017").show();
  $( ".term").hide();
  $( "#back").show();
});

$('#f17').click(function(){
  $( ".fall2017").show();
  $( ".term").hide();
  $( "#back").show();
});

$('#back').click(function(){
  $( ".term").show();
  $( "#back").hide();
  $( "table").hide();
});

});
