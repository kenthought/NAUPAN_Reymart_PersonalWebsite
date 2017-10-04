var modal = document.getElementById('myModal');
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function(){
	modal.style.display = "block";
	var newSrc = this.src;
	modalImg.attr('src', newSrc);
	captionText.innerHTML = this.alt;
});
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
	modal.style.display = "none";
}

$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
	// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
				}, 800, function(){
					// Add hash (#) to URL when done scrolling (default click behavior)
						window.location.hash = hash;
					});
		}
	});
});