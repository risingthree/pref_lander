$(window).on('load', function() {
  $.get("https://d10ctw78w8s687.cloudfront.net/index.html", function() {
    $('.investor-info').removeClass('d-none');
  });
});