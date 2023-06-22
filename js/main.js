$(function (){

    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        draggable: false,
        infinity: true,
        waitForAnimate: false,

    })
    $('.team__slider-prev').on('click', function(e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function(e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        draggable: false,
        infinity: true,
        waitForAnimate: false,
        dots: true,
        appendDots: $('.testimonials__dots'),

    })

    $('.testimonials__arrow-left').on('click', function(e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__arrow-right').on('click', function(e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })
    
    $('.program__lesson-item-link').on('click', function(e) {
        e.preventDefault()
        $(this).toggleClass('program__lesson-item-link--active')
        $(this).children('.program__lesson-paragraph').slideToggle()
    })

})

