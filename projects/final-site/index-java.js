//Make
$(window).scroll(function() {
  if ($(window).scrollTop() >= 50) {
    $('.nav').css('background', '#B9E2F0');
    $('.nav').css('box-shadow', '0 4px 12px -8px');
  } else {
    $('.nav').css('background', 'transparent');
    $('.nav').css('box-shadow', '0 0 0 0');
  }
});


//scroll to top for bottom button
const scroll = document.getElementById('graveyard-scroll-button')

scroll.addEventListener('click', () => {
  window.scrollTo(0, 0);
})



//bounce icons when the page loads
$(function(){
  var str = '#len'; //increment by 1 up to 1-nelemnts
  $(document).ready(function(){
    var i, stop;
    i = 1;
    stop = 4; //num elements
    setInterval(function(){
      if (i > stop){
        return;
      }
      $('#len'+(i++)).toggleClass('bounce');
    }, 500)
  });
});
