$(function() {
$('form#questions').submit(function(e) {
    var design = $('input[name="design"]:checked').val();
    var largeCompany = $('input[name="large-company"]:checked').val();
    var organizeInfo = $('input[name="organize-info"]:checked').val();
    var startup = $('input[name="startup"]:checked').val();
    var websites = $('input[name="websites"]:checked').val();

    if (!design && !largeCompany && !organizeInfo && !startup && !websites) {
        alert("Please answer all questions");
      } else if (design === 'true' && largeCompany === 'true' && organizeInfo === 'true' && startup === 'true' && websites === 'true' || design === 'false' && largeCompany === 'false' && organizeInfo === 'false' && startup === 'false' && websites === 'false') {
        $('.noMatch').append('<h1>Sorry, I can\'t help you there!</h1>');
      } else {
        if (design === 'true' || websites === 'true' || startup === 'true') {
          $('.design-track').slideToggle();
        } else if (organizeInfo === 'true' || websites === 'true' && design === 'false') {
          $('.php-track').slideToggle();
        } else if (largeCompany === 'true') {
          $('.c-sharp-track').slideToggle();
      } else {
        $('.noMatch').append('<h2>I think you could go with any track!</h2>');
        }
    }
    e.preventDefault();
  });
});
