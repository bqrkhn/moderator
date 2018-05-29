//Get url of the tab where extention is clicked.
var link = "";
chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
  console.log(tabs[0].url);
  link = tabs[0].url;
});

//listner which recives message from polarising index calculator and updates html
//works dynamically to update the inner html while the page and extention are both loading (extention has to be open when score is recieved
//otherwise clicking on extention after score is recived results in result not being displayed).
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.score != null){
      var text = document.getElementById('score');
      text.innerHTML = request.score;
      console.log(request);
    }
  });

//sends message to recieve score, helps in combating above problem.
  chrome.tabs.query({'active': true,'currentWindow':true},function(tab){
  chrome.tabs.sendMessage(tab[0].id,{from_test: "givemescore"}, function(response){
    var text = document.getElementById('score');
    text.innerHTML = response;
    console.log(request);
  });
});

var scholarscore = "";
//Get Score of scholar using ajax
document.addEventListener('DOMContentLoaded', function() {
  let form = document.getElementById('form');
  console.log("working?");
    form.addEventListener('submit', function(e){
        e.preventDefault();
        if (document.getElementById('r1').checked) {
          rate_value = -1 //document.getElementById('r1').value;
        }
        if (document.getElementById('r2').checked) {
          rate_value = 0 //document.getElementById('r2').value;
        }
        if (document.getElementById('r3').checked) {
          rate_value = 1 //document.getElementById('r3').value;
        }
        console.log(rate_value);

        $.ajax({
          url: 'https://35.185.133.86/insert.php',
          data: {
            'url':  link ,
            'id' : 'scholar',
            'scholar_score' : rate_value,
          },
          type: 'POST',
          success: function (response) {
            scholarscore = response;
            console.log(scholarscore);
            var text = document.getElementById('scholar');
            text.innerHTML = scholarscore;
          },
          error: function (error) {
              console.log(error);
          },
          dataType: "text",
          });
    })
}, false);


