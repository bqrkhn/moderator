
document.addEventListener("DOMContentLoaded", function(event) { 
  var text = document.getElementById('score');
  text.innerHTML = "<div class='col-sm-6' align='center'><img src='loading.gif' /></div>";
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.score == null) {
      var text = document.getElementById('score');
      text.innerHTML = "<div class='col-sm-6' align='center'><img src='loading.gif' /></div>";
    }
    else {
    var final_score;
    var scholar_score;
    final_score = 3.495029 - 9.310174 * request.score + 8.620465 * request.score * request.score;
    final_score = final_score.toFixed(1);
    scholar_score = 0.199300699 - 17.80769231 * request.s_score - 8.216783217 * request.s_score * request.s_score;
    if (request.s_score >= 0)
      scholar_score = 0;
    scholar_score = scholar_score.toFixed(0);
    var text = document.getElementById('score');
    var stext = document.getElementById('scholar');
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
    if (scholar_score < 5.0) {
        stext.innerHTML = "<div class='col-xs-4' style='padding-top: 15px;'><span class='alert alert-success'>" + scholar_score + "/10</span></div>";
        stext.innerHTML += "<div class='col-xs-8'> Scholar consider this polarising </div>"
      }
    else {
        stext.innerHTML = "<div class='col-xs-4' style='padding-top: 15px;'><span class='alert alert-danger'>" + scholar_score + "/10</span></div>";
        stext.innerHTML += "<div class='col-xs-8'> Scholar consider this polarising </div>"
      }
    }
    console.log(request);
  });

  chrome.tabs.query({'active': true,'currentWindow':true},function(tab){
  chrome.tabs.sendMessage(tab[0].id,"stuff", function(response){
    console.log(response)
    if (response.score == null) {
      var text = document.getElementById('score');
      text.innerHTML = "<div class='col-sm-6' align='center'><img src='loading.gif' /></div>";
    }
    else {
    var final_score;
    var scholar_score;
    final_score = 3.495029 - 9.310174 * response.score + 8.620465 * response.score * response.score;
    final_score = final_score.toFixed(1);
    scholar_score = 0.199300699 - 17.80769231 * response.s_score - 8.216783217 * response.s_score * response.s_score;
    if (response.s_score >= 0)
      scholar_score = 0;
    scholar_score = scholar_score.toFixed(0);
    var stext = document.getElementById('scholar');
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
    if (scholar_score < 5.0) {
      stext.innerHTML = "<div class='col-xs-4' style='padding-top: 15px;'><span class='alert alert-success'>" + scholar_score + "/10</span></div>";
      stext.innerHTML += "<div class='col-xs-8'> Scholar consider this polarising </div>"
     }
    else {
      stext.innerHTML = "<div class='col-xs-4' style='padding-top: 15px;'><span class='alert alert-danger'>" + scholar_score + "/10</span></div>";
      stext.innerHTML += "<div class='col-xs-8'> Scholar consider this polarising </div>"
     }
    }
    //console.log(request);
  });
});
