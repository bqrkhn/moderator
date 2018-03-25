
$( document ).ready(function() {
  console.log("before");
  setTimeout(function(){
    chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT},
    function(tab) {
      chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"},
      function(response){
        console.log(response);
        var text = document.getElementById('score');
        text.innerHTML = response.data;
      });
    });
  }, 10000);
  console.log("after");
});
