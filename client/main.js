'use strict';

$(function(){


  var area = [];


  $('#answer').on('click', function() {

    var array = $('#input').val();
    var spArr = array.split(' ').forEach(function(e){
      var spNum = e.substring(1, e.length-1).split(',');
      area.push(parseInt(spNum[0])*parseInt(spNum[1]));
    })
    boxArea();
    $('#total')
    return false;
  });
  function boxArea() {
    area.forEach(function(e) {
      console.log(e);
      var $evenBox = $('<div>');
      var $oddBox = $('<div>');
      if (e % 2 === 0) {
        $evenBox.css({'background-color': 'blue', 'height':'70px','width': '70px', 'font-size': '15px'}).text('Even Area: ' + e)
        $('#even').append($evenBox);
      } else {
        // $('#odds').append('Area: ' + e + ' <br/>').css({'background-color': 'red', 'height':'200px','width', '200px'});
        $oddBox.css({'background-color': 'red', 'height':'70px','width': '70px', 'font-size': '15px'}).text('Odd Area: ' + e)
        $('#odd').append($oddBox);
      }
    });
  }
});
