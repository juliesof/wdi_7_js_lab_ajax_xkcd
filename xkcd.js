$(document).ready(function() {

  $.ajax({
    url: 'http://xkcd-unofficial-api.herokuapp.com/xkcd',
    data: {year: 2006},
  })
  .done(function(data) {
    data.forEach(function(comic){
      var $newSection = $('<section>');
      var url = comic.img;
      $newSection.append($('<h2>').text(comic.title));
      $newSection.append($('<img src=' + url + '>'));
      $('.comics').append($newSection);
    });
  });
});




