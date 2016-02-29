// (c) 2015 Lei Wu



$(function() {


  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll > 43){
      // alert('123');
      $('header').addClass('fixed-header');
      $('.height-holder').show();
    }else{
      $('header').removeClass('fixed-header');
      $('.height-holder').hide();
    }
    // alert(scroll);
    if(scroll > $('.skill').offset().top-200){
      progressAnimation();

    }
  });


  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 60
          }, 1000);
          return false;
        }
    }
  });

  function progressAnimation(){
      $('.skill-progress-bar').each(function(){
        var w = $(this).data('percent')+'%';
        $(this).animate({
          width: w
        }, 500, function() {
        });
      });
      
  }




    // alert(123);
    // $('.sec1').velocity({
    //     properties: { opacity: 1 },
    //     options: { duration: 2000 }
    // });
});

