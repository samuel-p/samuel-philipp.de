// $(document).ready(function () {
// 	$(document).foundation();
// });
$(function () {
	$('#maximage').maximage();
	$('#maximage').children().on('click', function(){
		// Retrive our URL (set in data-href attribute on img tags)
		var url = $(this).data('href');

		// If our URL is set, open a new window with that URL
		//    You can certainly use window.location here too
		if(url.length > 0){
			window.open(
				url, // <- This is what we set with the data-href attribute
				'_blank' // <- This is what makes it open in a new window.
			);
		}
	});

});
