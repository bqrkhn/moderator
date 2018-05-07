
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
