$(document).ready(function (){
  function appendTable(value) {
    $('tbody').append('<td>' + value + '</td>');
  }

  $('#form').submit(function(){
    var formInfo = $(this).serializeArray();
    $('tbody').append('<tr>');
    formInfo.forEach(function(value, index) {
      appendTable(value.value);
    });
    $('tbody').append('</tr>');
    return false;
  });

})
