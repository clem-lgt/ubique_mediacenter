
// Lancement Slick carousel
$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 300,
  cssEase: 'linear'
});

var delay;

$(document).ready(function() {
// fermeture spash
  $('#splash span').on('click',function(){
    $('#splash').addClass('fadeout');
    delay = window.setTimeout(function() {
      step2();
    }, 3000);
  });

  $('.carousel').on('swipe', function(event, slick, direction){
    window.clearTimeout(delay);
    delay = window.setTimeout(function() {
      step2();
    }, 3000);
});

function step2() {
  $('#renderers').addClass('player-haut');
  $('#servers').addClass('server-haut');
}

// click/tap sur server Plex Media Server: RPI 3
  $('#listeservers ul li:first-child').on('click',function(){
    $('#listeservers').addClass('hidden'); // la classe hidden est celle de Bootstrap
    $('#servers #plex1niv1').removeClass('hidden').addClass('visible');
  });

  // click/tap sur songs
  $('#plex1niv1 #plex1songs').on('click',function(){
    $('#plex1niv1').addClass('hidden');
    $('#servers #plex1niv2').removeClass('hidden').addClass('visible');
  });

  // click/tap sur Ikeda
  $('#plex1niv2 #songikeda').on('click',function(){
    $(this).addClass('isplaying');
    $('#renderers ul li').append('<img src="ikeda.jpg"/>Data: Microhelix — Ryoji Ikeda');
    $('#renderers ul li button').html('pause');
  });
});

// $(document).on('click', '.bouton-ok', function() {
//   var delay = setTimeout(function() {
//     console.log('coucou');
//   }, 3000);
// });
