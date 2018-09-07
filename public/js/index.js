var quote;
$(document).ready(function(){
  $.ajaxSetup({cache: false});
  
  getQuote();
  
   $("#logging-button").on("click", function(){
    logIn();
    $(this).css('background', 'rgba(152, 94, 109, 1)');
  });
  
  function getQuote() {
    $.getJSON("https://quotesondesign.com/wp-json/posts? filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      $("#quote").html(a[0].content + "<p>— " + a[0].title + "</p>")
      quote = encodeURIComponent($("#quote").text());
      });
    }
    
  function logIn(){  
    window.open("../form-logging/form.html");
  }
});
 