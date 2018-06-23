
document.addEventListener("DOMContentLoaded", function(event) { 
  var text = document.getElementById('score');
  text.innerHTML = '<img src="loading.gif" />';
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.score == null) {
      var text = document.getElementById('score');
      text.innerHTML = "<div class='col-sm-6' align='center'><img src='loading.gif' /></div>";
    }
    else {
    var final_score;
    final_score = 3.495029 - 9.310174 * request.score + 8.620465 * request.score * request.score;
    final_score = final_score.toFixed(1);
    var text = document.getElementById('score');
    if (final_score < 5.0)  {
      text.innerHTML = "<div class='col-xs-4' style='padding-top: 15px;'><span class='alert alert-success'>" + final_score + "/10</span></div>";
      //text.insertAdjacentHTML ('afterend',"<div class='col-sm-3'><span class='alert alert-success'>" + final_score + "/10</span></div>");
      text.innerHTML += "<div class='col-xs-8'> is the rating of this page given by our PI </div>"
      }
    else {
      text.innerHTML = "<div class='col-xs-4' style='padding-top: 15px;'><span class='alert alert-danger'>" + final_score + "/10</span></div>";
      //text.insertAdjacentHTML ('afterend',"<div class='col-sm-3'><span class='alert alert-success'>" + final_score + "/10</span></div>");
      text.innerHTML += "<div class='col-xs-8'> is the rating of this page given by our PI </div>"
      }
    }
    console.log(request);
  });

  chrome.tabs.query({'active': true,'currentWindow':true},function(tab){
  chrome.tabs.sendMessage(tab[0].id,"stuff", function(response){
    console.log(response)
    if (response == null) {
      var text = document.getElementById('score');
      text.innerHTML = "<div class='col-sm-6' align='center'><img src='loading.gif' /></div>";
    }
    else {
    var final_score;
    final_score = 3.495029 - 9.310174 * response + 8.620465 * response * response;
    final_score = final_score.toFixed(1);
    var text = document.getElementById('score');
    if (final_score < 5.0)  {
      text.innerHTML = "<div class='col-xs-4' style='padding-top: 15px;'><span class='alert alert-success'>" + final_score + "/10</span></div>";
      //text.insertAdjacentHTML ('afterend',"<div class='col-sm-3'><span class='alert alert-success'>" + final_score + "/10</span></div>");
      text.innerHTML += "<div class='col-xs-8'> is the rating of this page given by our PI </div>"
      }
    else {
      text.innerHTML = "<div class='col-xs-4' style='padding-top: 15px;'><span class='alert alert-danger'>" + final_score + "/10</span></div>";
      //text.insertAdjacentHTML ('afterend',"<div class='col-sm-3'><span class='alert alert-success'>" + final_score + "/10</span></div>");
      text.innerHTML += "<div class='col-xs-8'> is the rating of this page given by our PI </div>"
      }
    }
    //console.log(request);
  });
});
