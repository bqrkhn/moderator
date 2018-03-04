var link = location.href;
url(link);

function url(link) {

  // use "link" variable to get the link here 

  $.ajax({
     url: "https://boilerpipe-web.appspot.com/extract?url="+link+"/&output=text",
     dataType: 'text',
     success: function(data) {
            // use "data" variable to get the plain text
          }
     });

}
