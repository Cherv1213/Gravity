"use strict"
const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
   iconMenu.addEventListener("click", function (e){
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}
/*-------------------------------------------------------------------------------------------------*/
new Swiper('.work-slider',{
   spaceBetween:100,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    grabCursor:true,
    loop: true,
    slidesPerView: 1,
    breakpoints :{
    }
});
/*-------------------------------------------------------------------------------------------------*/
new Swiper('.video-slider',{
   navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev'
   },
   keyboard: {
      enable: true,
      onlyInViewport: true,
   },
   simulateTouch:false,
   grabCursor:true,
   loop: true,
   slidesPerView: 1,
   spaceBetween: 30,
   speed: 500,
   breakpoints:{
      767.8:{
         slidesPerView: 1.3,
      },
   }
});

/*-----------------------tabs--------------------------------------------------------------------------*/
const headerItem = document.querySelectorAll('.discover__item');
const mainContent = document.querySelectorAll('.discover__content');

for (let item of headerItem) {

   item.addEventListener('click', function(){

      for(let element of mainContent){
         element.classList.add('hide')
      }

      const content = document.querySelector('#' + item.dataset.tab);
      content.classList.remove('hide')
   })
};

/*-------------------------------------------------------------------------------------------------*/
new Swiper('.testimonials__swiper',{
   navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev'
   },
   keyboard: {
      enable: true,
      onlyInViewport: true,
   },
   simulateTouch:true,
   grabCursor:true,
   
   slidesPerView: 1,
   spaceBetween: 100,
   speed: 500,
   breakpoints:{
   }
});

