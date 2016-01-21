$(document).ready(function() {
  $.ajax({
    url: 'http://jsonip.com',
    method: 'GET',
  }).done(function(response) {
    console.log(response);
    $("#ipaddress").append("<h5>"+response.ip+"</h5>");
  })

});

$(document).ready(function() {
  $.ajax({
    url: 'https://freegeoip.net/json/128.177.172.220',
    method: 'GET',
    // dataType: 'JSON'
  }).done(function(response) {
    console.log(response);
    $("#longitude").append("<h5>"+response.longitude+"</h5>");
    $("#latitude").append("<h5>"+response.latitude+"</h5>")
  })

});
