

// #main_visual
//const mv_txt_list = new Swiper(".mv_txt_list", {
/* direction: vertical,
slidesPerView: 4,
speed: 3000,
effect: "fade",
fadeEffect: {
    crossFade: true
}, */
//});



//const mv_img_list = new Swiper(".mv_img_list", {
/* autoplay: {
    delay: 5000,
    disableOnInteraction: false,
},
speed: 3000, */
//}); 



/* mv_txt_list.controller.control = mv_img_list;
mv_img_list.controller.control = mv_txt_list; */

$(document).ready(function () {

    // #main_visual
    const mv_txt_list = new Swiper(".mv_txt_list", {
        //direction: "vertical",
        //slidesPerView: 4,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: false,
                translate: ["0", 0, -800],
                rotate: [0, 0, 0],
            },
            next: {
                shadow: false,
                translate: ["0", 0, -800],
                rotate: [0, 0, 0],
            },
        },
    });


    const mv_img_list = new Swiper(".mv_img_list", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 3000,
    });


    mv_txt_list.controller.control = mv_img_list;
    mv_img_list.controller.control = mv_txt_list;

    const theme = new Swiper(".theme", {
        slidesPerView: 3,
        spaceBetween: 70,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});