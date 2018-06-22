function send(id){
var val = $('#'+id).find(":selected").text();
$.ajax({
  type: "POST",
  url: "https://localhost/moderator/send.php",
  data: { id: id, value:val},
  success : function(response){
	console.log(response);
  }
})
}