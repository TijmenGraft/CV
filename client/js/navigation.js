$(document).ready(function() {
	$('.navigation-div').on('click', function(e) {
		e.preventDefault();
		$.ajax({
			async: true,
			url: "/category/content",
			type: "post",
			dataType: "html",
			cache: true,
			data: {
				token: "testtoken"
			}
		}).done(function(data) {
			console.log('success');
		})
	});
});