$(document).ready(function() {
	$("#btn").click(function() {
		$.ajax({
			url: "server.php",
			method: "GET",
			success: function(response) {
				$("#data").html(response);
			}
		});
	});
});
