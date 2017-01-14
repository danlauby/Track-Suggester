$(function() {
$('form#questions').submit(function(e) {
    var design = $('input[name="design"]:checked').val();
    var largeCompany = $('input[name="large-company"]:checked').val();
    var organizeInfo = $('input[name="organize-info"]:checked').val();
    var startup = $('input[name="startup"]:checked').val();
    var websites = $('input[name="websites"]:checked').val();
    if (design === 'true' || websites === 'true' || startup === 'true') {
      $('.design-track').slideToggle();
    } else if (organizeInfo === 'true' || websites === 'true' && design === 'false') {
      $('.php-track').slideToggle();
    } else if (largeCompany === 'true') {
      $('.c-sharp-track').slideToggle();
    } else {
      $('.noMatch').append('<h2>I think you could go with any track!</h2>');
    }
    e.preventDefault();
  });
});
