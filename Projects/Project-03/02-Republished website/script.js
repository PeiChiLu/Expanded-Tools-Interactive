
$('.boxframe').click(function(event){
  console.log('click');

  var .boxframe = $(event.currentTarget)
  // open door
  boxframe.find('.scale').toggleClass('zoom');
  
  /*
  // move the overlay
  $('.popover').css('top', doorFrame.offset().top - 60 + "px").css('left', doorFrame.offset().left - 70 + "px").toggleClass('open');

});*/
