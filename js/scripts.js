$(function() {

  var design = $('input[name="design"]:checked').val();
  var largeCompany = $('input[name="large-company"]:checked').val();
  var organizeInfo = $('input[name="organize-info"]:checked').val();
  var startup = $('input[name="startup"]:checked').val();
  var websites = $('input[name="websites"]:checked').val();
  $('form#questions').submit(function(e) {
    if (design === 'true' || largeCompany === 'false' && organizeInfo ==='false') {
      $('.design-track').toggle();
    } else if (largeCompany === 'true' || design === 'false' && startup === 'false') {
      $('.c-sharp-track').toggle();
    } else if (organizeInfo === 'true' || largeCompany == 'true' && design === 'false') {
      $('php-track').toggle();
    }
    e.preventDefault();
  });
});
