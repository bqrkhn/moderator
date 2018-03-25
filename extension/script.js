var link = location.href;

url(link);

function url(link) {
    console.log("AJAX Start");
    var data = {js_link: link}
    $.ajax({
        url: 'https://35.185.133.86:5000/postmethod',
        data: JSON.stringify(data),
        type: 'POST',
        success: function (response) {
            console.log("AJAX Success. SCORE =>");
            console.log(response.score); //T  his works
            chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
              if (request.method == "getSelection")
                sendResponse({data: response.score.toString()});
              else
                sendResponse({}); // snub them.
            });
        },
        error: function (error) {
            console.log("AJAX Error. Error =>");
            console.log(error);
        },
        dataType: "json",
        contentType: 'application/json;charset=UTF-8',
    });

}
