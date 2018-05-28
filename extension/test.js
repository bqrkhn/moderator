var link = "";
chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
  console.log(tabs[0].url);
  link = tabs[0].url;
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var text = document.getElementById('score');
    text.innerHTML = request.score;
    console.log(request);
  });

  chrome.tabs.query({'active': true,'currentWindow':true},function(tab){
  chrome.tabs.sendMessage(tab[0].id,"stuff", function(response){
    var text = document.getElementById('score');
    text.innerHTML = response;
    console.log(request);
  });
});

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
            console.log(response);
          },
          error: function (error) {
              console.log(error);
          },
          dataType: "text",
          });
    })
}, false);