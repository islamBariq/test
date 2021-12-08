//initial owl carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      margin: 10,
      loop: false,
      autoWidth: true,
      items: 2
    })

  });
  // handle select car onClick
  $('body').on('click', '.myCar', function (e) {
    //remove selected car 
    $('.myCar').removeClass('selected')
    //select clicked car
    $(e.target).closest('.myCar').addClass('selected')
  })
  //handle select location onClick
  $('body').on('click', '.myLocation', function (e) {
    //remove selected car 
    $('.myLocation').removeClass('selected')
    //select clicked car
    $(e.target).closest('.myLocation').addClass('selected')
  })
