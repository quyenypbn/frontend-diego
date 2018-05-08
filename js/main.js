

$(document).ready(function() {
  $('.click').click(function(){
    $(this).next('.search-none').slideToggle("fast");
  });
 $('.same-slide-header').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    items:1,
    autoplay:true,
    autoplayTimeout:2000,
  });
 $('.button-tab li a').click(function(e){
     e.preventDefault();
    $(this).parent().parent().children('li').removeClass('orange');
    $(this).parent().addClass('orange');

 });

 $('.slide-two-logo').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    items:1,
    autoplay:true,
    autoplayTimeout:2000,
  });

   $('.slide-blog').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
     responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
    }
  });

  
  $('.face').append('<i class="fal fa-sort-down"></i>')
  $('.face').click(function(){
    $(this).next().slideToggle(250);
  });

    var owl2 = $('.slide-logo');
    owl2.owlCarousel({
      margin:0,
      nav: true,
      loop: true,
      dots:false,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
    }
  });

     $('.slide-chi-tiet-san-pham').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        nav:true,
        // autoplay:true,
        autoplayTimeout:2000,
         responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            1000: {
              items: 3
            }
        }
  });


});

// ===================== blog =======================
$(document).ready(function() {
  $('.blog-menu-children').append('<i class="fal fa-plus"></i>');
  $('.blog-sub-menu li').append('<i class="fas fa-chevron-right"></i>');

  $('.blog-menu-children>i').click(function(){
    if($(this).hasClass('fa-plus')){
      $(this).parent().children('.blog-sub-menu').slideDown();
      $(this).removeClass('fa-plus');
      $(this).addClass('fa-minus');
    }
    else{
      $(this).parent().children('.blog-sub-menu').slideUp();
      $(this).removeClass('fa-minus');
      $(this).addClass('fa-plus');
    }
  });

});

//==================================== featured
$(document).ready(function(){
  $('.grid-style').click(function(){
    $('.col-md-9-3').removeClass('list-block');
  });

   $('.list-style').click(function(){
    $('.col-md-9-3').addClass('list-block');
  });

   $('.category-top  button').click(function(){
    $(this).parent().children('button').removeClass('i-orange');
    $(this).addClass('i-orange');
  });
  


});

// ==================================== cart  ======================
$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    loop: true,
    dots:false,
    responsiveRefreshRate : 200,
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots:false,
    nav:true,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});


// //================================================================================room img
$(document).ready(function() {
  if($(window).width()>=992){
    $('.menu .menu-item-has-children').hover(function(){
      $(this).children('.sub-menu').slideToggle( "fast");
    });
      $('.menu').scrollToFixed();

  }

  if($(window).width()<992){
      $('.right').scrollToFixed();
    $('.right').append('<i class="fas fa-bars"></i>');
    $('.fa-bars').addClass('bar');
    $('.bar').click(function(){
      $('.menu').slideToggle('fast');
    });
    $('.menu-item-has-children').append('<i class="far fa-plus-square"></i>')
    $('.menu-item-has-children>i').click(function(){
      if($(this).hasClass('fa-plus-square')){
      $(this).parent().children('.sub-menu').slideDown();
      $(this).removeClass('fa-plus-square');
      $(this).addClass('fa-minus-square');
      }
      else{
        $(this).parent().children('.sub-menu').slideUp();
        $(this).removeClass('fa-minus-square');
        $(this).addClass('fa-plus-square');
      }
    });
  }
}); 
