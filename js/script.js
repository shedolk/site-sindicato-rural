let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchform.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () =>{
    if(window.scrolly > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};


var swiper = new Swiper(".home-slider",{
    loop:true,
    grabcursor:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider",{
    loop:true,
    grabcursor:true,
    spaceBetween: 20,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        640:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:3,
        },
        1024:{
            slidesPerView:4,
        },
    },
});

var swiper = new Swiper(".review-slider",{
    loop:true,
    grabcursor:true,
    spaceBetween: 20,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".blogs-slider",{
    loop:true,
    grabcursor:true,
    spaceBetween: 10,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".clients-slider",{
    loop:true,
    grabcursor:true,
    spaceBetween: 20,
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        1024:{
            slidesPerView: 4,
        },
    },
});