$(document).ready(function(){
  $("#hide").click(function(){
	  $("h2").fadeOut();
	});
});
  
$(document).ready(function(){
  $("#show").click(function(){
	  $("h2").fadeIn();
	});
});
  
$(document).ready(function(){
  $("#remove").click(function(){
	  $("#show").hide();
	  $("#hide").hide();
	  $("#remove").hide();
	});
});
