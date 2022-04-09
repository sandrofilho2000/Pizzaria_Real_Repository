$(function(){
    $(".owl-carousel.wrapper_categories").owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        items: 2,
        dots: true,
        responsiveClass:true,
        infinity: false,
        centerMode: false,
        responsive:{
            
            550:{
                items: 3,
                loop:false
            },
            750:{
                items:4,
                loop:false
            },
            1200:{
                items:6,
                loop:false
            }

        }
    }) 

})