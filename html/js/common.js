$(function() {

    'use strict';

    //-------------------------------
    //Меню на мобильных устройствах
    //-------------------------------

    $('.nav').click(function(e) {
        var w = $(window).width();
        if (w < 992 && $(this).hasClass('show') == false) {
            e.preventDefault();
            $(this).addClass('show');
        }
    }).swipe( {
        swipeRight: function() {
            $(this).addClass('show');
        },
        swipeLeft: function() {
            $(this).removeClass('show');
        }
    });

    //Выключение при клике по странице
    $(document).click(function(e) {
        if (!$('.nav').has(e.target).length) {
            $('.nav').removeClass('show');
        }
        e.stopPropagation();
    });

    //Удаление класса по ресайзу
    $(window).resize(function() {
        var w = $(window).width();
        if (w > 768 && $('.nav').hasClass('show')) {
            $('.nav').removeClass('show');
        }
    });

    //------------------------------------
    //Выравнивание блоков по высоте
    //------------------------------------

    $(".categories__item-title").equalHeight();
    $(".categories__item-undertitle").equalHeight();
    $(".categories__item-text").equalHeight();
    $(".members__item-title").equalHeight();
    $(".result__filter-item span").equalHeight();

});
