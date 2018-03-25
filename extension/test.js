
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var text = document.getElementById('score');
    text.innerHTML = request.score;
    console.log(request);
  });
