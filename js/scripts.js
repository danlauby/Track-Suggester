$(function() {
$('form#questions').submit(function(e) {
    var design = $('input[name="design"]:checked').val();
    var largeCompany = $('input[name="large-company"]:checked').val();
    var organizeInfo = $('input[name="organize-info"]:checked').val();
    var startup = $('input[name="startup"]:checked').val();
    var websites = $('input[name="websites"]:checked').val();
    if (design === 'true' || websites === 'true' || startup === 'true') {
      $('.design-track').toggle();
    } else if (largeCompany === 'true' || organizeInfo === 'true' || websites === 'true' && design === 'false') {
      $('.php-track').toggle();
    } else if (largeCompany === 'true' && organizeInfo === 'true' && design === 'false' || startup === 'false') {
      $('.c-sharp-track').toggle();
    }
    e.preventDefault();
  });
});
