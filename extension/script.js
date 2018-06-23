var link = location.href;

url(link);

var polarising_score;

function url(link) {
    console.log("AJAX Start");
    var data = {js_link: link}
    $.ajax({
        dataType: "text",
        type: "POST",
        url : "https://35.234.58.64/check.php",
        data: {
          'url' : link,
        },
        success : function(response){
          if(response=="0") {
			    console.log("in here 0");
            $.ajax({
              url: 'https://35.234.58.64:5000/postmethod',
              data: JSON.stringify(data),
              type: 'POST',
              success: function (response) {
                    console.log("AJAX Success. SCORE =>");
      			        console.log(response);
                    console.log(response.score); //T  his works
              			polarising_score = response.score;
              			chrome.runtime.sendMessage({score: response.score}, function(response) {});
                    $.ajax({
                        url: 'https://35.234.58.64/insert.php',
                        data: {
                          'url' : link,
                          'score' : response.score,
                          'magnitude' : response.magnitude,
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
              },
              error: function (error) {
                  console.log("AJAX Error. Error =>");
                  console.log(error);
              },
              dataType: "json",
              contentType: 'application/json;charset=UTF-8',
          });
        }

        else if(response=="1") {
          console.log("in here 1");
          $.ajax({
            url: 'https://35.234.58.64:5000/postmethod',
            data: JSON.stringify(data),
            type: 'POST',
            success: function (response) {
                  console.log("AJAX Success. SCORE =>");
                  console.log(response);
                  console.log(response.score); //T  his works
                  polarising_score = response.score;
                  chrome.runtime.sendMessage({score: response.score}, function(response) {});

            },
            error: function (error) {
                console.log("AJAX Error. Error =>");
                console.log(error);
            },
            dataType: "json",
            contentType: 'application/json;charset=UTF-8',
          });         
        }

        else {
            console.log("else");
            console.log(response);
            var result = JSON.parse(response);
            console.log(result.score);
            polarising_score = result.score;
            chrome.runtime.sendMessage({score: result.score}, function(result) {});
        }
      }
      })
}

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
			sendResponse(polarising_score);
			});
