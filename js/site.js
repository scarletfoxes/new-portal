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
    if (currentUser==="jdoe2" &&  currentPassword==="HAWK2017") {
      var newURL = window.location.href + "main-page";
      $('#form')[0].reset();
      window.location.href = (newURL);
    }
    else{
      if (!showError) {
        $('#list').append($('<li></li>', { class: error,  text : 'Username/password combination not found'}));
        showError=true;
      }
    }
  });

  $('#logout').click(function(event){
    alert('You have been succesfully logged out.');
    $('#form')[0].reset();
    window.location = "../logout/index.html";
    event.preventDefault();
  });

//buttons to show courses on class-schedule page
  $('.fall2016-table').hide();
  $('.spring2017-table').hide();
  $('.fall2017-table').hide();
  $( "#back").hide();

  $('#f16').click(function(){
    $( ".fall2016-table").show();
    $('.table-header').show();
    $('.spring2017-table').hide();
    $('.fall2017-table').hide();
    $( ".term").hide();
    $( "#back").show();
  });

  $('#s17').click(function(){
    $( ".spring2017-table").show();
    $('.table-header').show();
    $('.fall2016-table').hide();
    $('.fall2017-table').hide();
    $( ".term").hide();
    $( "#back").show();
  });

  $('#f17').click(function(){
    $('.fall2016-table').hide();
    $('.spring2017-table').hide();
    $('.fall2017-table').show();
    $('.table-header').show();
    $( ".term").hide();
    $( "#back").show();
  });

  $('#back').click(function(){
    $( ".term").show();
    $( "#back").hide();
    $('.fall2016-table').hide();
    $('.spring2017-table').hide();
    $('.fall2017-table').hide();
  });

//buttons to show courses on lookup page
  $( ".fall16menu").hide();
  $( ".spring17menu").hide();
  $( ".fall17menu").hide();
  $( ".back-lu").hide();
  $( ".course-lists > ul").hide();

  $('#f16-lu').click(function(){
    $( ".fall16menu").show();
    $( ".term-menu").hide();
    $( ".back-lu").show();
  });
  $('#s17-lu').click(function(){
    $( ".spring17menu").show();
    $( ".term-menu").hide();
    $( ".back-lu").show();
  });
  $('#f17-lu').click(function(){
    $( ".fall17menu").show();
    $( ".term-menu").hide();
    $('.np').remove();
    $( ".back-lu").show();
  });

  $('.chem-list').click(function(){
    $( ".course-lists > ul").hide();
    $('.table-header').show();
    $( ".chem").show();
  });
  $('.eg-list').click(function(){
    $( ".course-lists > ul").hide();
    $('.table-header').show();
    $( ".eg").show();
  });
  $('.hum-list').click(function(){
    $( ".course-lists > ul").hide();
    $('.table-header').show();
    $( ".hum").show();
  });
  $('.itm-list').click(function(){
    $( ".course-lists > ul").hide();
    $('.table-header').show();
    $( ".itm").show();
  });
  $('.math-list').click(function(){
    $( ".course-lists > ul").hide();
    $('.table-header').show();
    $( ".math").show();
  });
  $('.psyc-list').click(function(){
    $( ".course-lists > ul").hide();
    $('.table-header').show();
    $( ".psyc").show();
  });

  $('.back-lu').click(function(){
    $( ".term-menu").show();
    $( ".lookup-menus > ul").hide();
    $('.course-lists > ul').hide();
    $( ".back-lu").hide();
  });

//buttons for add page
  $( ".lookup-menus > ul").hide();
  $( ".back-lu").hide();
  $( ".course-lists > ul").hide();
  $('.id-add > input').prop('checked', false);

 $('#s18-lu').click(function(){
        $('.nopin').after("<p class='np error'>Registration for this term has been denied. Please see your adviser for details</p>");
  });

 $('.id-add > input').change(function(){
        if ($(this).prop('checked')){
        $('.course').after("<li><button class='add-button'>Add</button></li>");
        }
  });

 $('.add-button').click(function(){
    $('.add-course').appendTo(".fall2017-table");
 });
});
