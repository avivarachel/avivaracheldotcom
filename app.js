<script>
   $(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 70;
			 if ($(window).scrollTop() > navHeight) {
				 $('.screen1').addClass('fixed');
			 }
			 else {
				 $('.screen1').removeClass('fixed');
			 }
		});
	});
</script>