const progressCircle = document.querySelector(".mpho1 .autoplay-progress svg");
const progressCircle2 = document.querySelector(".mpho3 .autoplay-progress svg");

$('.menu_list .d1 > li').mouseover(function(){
    let sub_h=$(this).find('.sub').height();
    $('.menu_list .sub').css('display','none');
    $(this).find('.sub').css('display','block');
    $('.menu_list').stop().animate({
        height:60+sub_h
    });
    $('.list_bg').css({
        height:sub_h
    }).stop().slideDown();
}).mouseout(function(){
    $('.menu_list').stop().animate({
        height:60
    },function(){
        $('.menu_list .sub').css('display','none');
    });
    $('.list_bg').stop().slideUp();
});






let f80=new Swiper('.F80',{
    loop:true,
    effect: "fade",
    // centeredSlides:true,
    autoplay:{
        delay: 5000,
        disableOnInteraction: false
    },
    navigation:{
        nextEl:'.btn-next'
    },
    pagination:{
        el:'.pager',
        dynamicBullets: true,
        clickable:true,
    },
    on:{
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
        }
    }
});
let finfo=new Swiper('.specif',{
    loop:true,
    slidesPerView:1,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        opacity:0,
        translate: ["-20%", 0, -1],
      },
      next: {
        opacity:0,
    
        translate: ["100%", 0, 0],
      },
    },
});

let fCars=new Swiper('.Fslide',{
    spaceBetween:400,
    loop:true,
    centeredSlides:true,
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        scale:1,
        slideShadows: false,
    },
    thumbs:{
        swiper:finfo,
    },
});


//fCars.controller.control=finfo;

let scude=new Swiper('.scNews',{
    loop:true,
    effect: "fade",
    // centeredSlides:true,
    autoplay:{
        delay: 5000,
        disableOnInteraction: false
    },
    navigation:{
        nextEl:'.btn-next'
    },
    pagination:{
        el:'.pager',
        dynamicBullets: true,
        clickable:true,
    },
    on:{
        autoplayTimeLeft(s, time, progress) {
            progressCircle2.style.setProperty("--progress", 1 - progress);
        }
    }
});
let news=new Swiper('.newspho',{
    loop:true,
    effect:"creative",

    autoplay:{
        delay: 4000,
        disableOnInteraction: false
    },
    creativeEffect:{
        prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
    },
});

let articles=new Swiper('.newsinfo',{
    loop:true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        opacity:0,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
})

news.controller.control=articles;
let old=new Swiper('.oldCars',{
    loop:true,
    effect:"fade",
    autoplay:{
        delay: 5000,
        disableOnInteraction: false
    },
})
let FF=new Swiper('.fCollect',{
    loop:true,
    effect:"fade",
    autoplay:{
        delay: 6000,
        disableOnInteraction: false
    },
})
let fcs=new Swiper('.FSH',{
    loop:true,
    effect:"fade",
    autoplay:{
        delay: 6500,
        disableOnInteraction: false
    },
})