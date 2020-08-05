$(document).ready(function() {
	$('.burger-menu').click(function(event) {
    $('.mobile-nav , .burger-menu').toggleClass('active');
  });
	$('#btn2, #btn3').on('click',function() {
		alert('Button with out function');
	});
	$('#submit').on('click', function(event){
		event.preventDefault();
	});
});