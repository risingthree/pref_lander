$( "#contact-us-form" ).submit(function( event ) {
  event.preventDefault();

  var fname = $('#fname').val(),
  lname = $('#lname').val(),
  email = $('#email').val(),
  ctry = $('#ctry').val(),
  comments = $('#comments').val(),
  $form = $(this),
  url = $form.attr("action"),
  data = {
    email: email,
    ctry: ctry,
    fname: fname,
    lname: lname,
    comments: comments || ''
  };

  $.ajax({
    type: "POST",
    url: url,
    data: data,
    dataType: 'json'
  });

  $('#myModal').modal('hide');
  alert('Thank you for your inquiry.  We will contact you shortly!');
});