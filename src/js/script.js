
jQuery(function ($) { 


    /* --------------------------------------------
    /* ハンバーガーメニュー
    /* -------------------------------------------- */

    /* --------------------------------------------
    /* ハンバーガーメニュー
    /* -------------------------------------------- */

    $(".js-hamburger").on("click", function () {
        if ($(this).hasClass("is-open")) {
            closeDrawerMenu();
        } else {
            $(".js-drawer-menu").fadeIn();
            $(this).addClass("is-open");
            $("body").css("overflow", "hidden");
            $(".js-header").css("background-color", "#075735");
        }
    });

    $(".sp-nav__link, .sp-nav__heading").on("click", function () {
        closeDrawerMenu();
        var targetSection = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(targetSection).offset().top,
        }, 1000);
    });

    function closeDrawerMenu() {
        $(".js-drawer-menu").fadeOut();
        $(".js-hamburger").removeClass("is-open");
        $("body").css("overflow", "auto");
        $(".js-header").css("background-color", "");
    }

    $(window).resize(function () {
        if ($(window).width() > 768) {
            closeDrawerMenu();
        }
    });

    if ($(window).width() > 768) {
        closeDrawerMenu();
    }

    /* --------------------------------------------
    /* トップページのFVスワイパー
    /* -------------------------------------------- */
    var topFvSwiper = new Swiper(".js-top-fv-swiper", {
        loop: true,
        speed: 4000,
        autoplay: {
            delay: 4000
        },
        allowTouchMove: false,
        slidesPerView: "auto",
        spaceBetween: 24,
        breakpoints: {
            768: {
                spaceBetween: 40
            }
        },
        direction: "horizontal",
    });

    /* --------------------------------------------
    /* 導入実績・利用者の声 スワイパー
    /* -------------------------------------------- */
    const voicesSwiper = new Swiper('.js-voices-swiper', {
        loop: true,
        speed: 4000,
        autoplay: {
            delay: 4000,
        },
        allowTouchMove: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 26,
            },
            767: {
                slidesPerView: '1.5',
                spaceBetween: 26,
                centeredSlides: true,
            }
        },
        spaceBetween: 26,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /* --------------------------------------------
    /* アコーディオン
    /* -------------------------------------------- */
    $('.js-tab-trigger').click(function() {
        var id = $(this).attr('id');
        $('.js-tab-trigger').removeClass('is-active');
        $(this).addClass('is-active');
        $('.js-tab-target').removeClass('is-active');
        $('#' + id + '-content').addClass('is-active');
        return false;
    });

    $('.js-accordion-Q').click(function() {
        $(this).toggleClass('is-open').next('.js-accordion-A').slideToggle();
    });

    /* --------------------------------------------
    /* ポップアップ
    /* -------------------------------------------- */
    const popup = document.querySelector('.popup');
    const closeButton = document.querySelector('.js-popup-close');

    window.addEventListener('scroll', function() {
        const halfwayDown = document.body.scrollHeight / 2;
        if (window.scrollY > halfwayDown) {
            popup.style.position = 'fixed';
            popup.style.left = '20px';
            popup.style.bottom = '20px';
            popup.style.display = 'block';
        } else {
            popup.style.display = 'none';
        }
    });

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });


    /* --------------------------------------------
    /* トップへ戻るボタン
    /* -------------------------------------------- */
    const buttonToTop = $('.js-button-to-top'); // トップへ戻るボタンの要素を取得
    const topFvHeight = $('.top-fv').outerHeight(); // .top-fv要素の高さを取得

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > topFvHeight) {
            buttonToTop.fadeIn(); // スクロール位置が.top-fvの高さを超えたらボタンを表示
        } else {
            buttonToTop.fadeOut(); // それ以外の場合はボタンを非表示
        }
    });

    buttonToTop.on('click', function(e) {
        e.preventDefault(); // デフォルトのイベントをキャンセル
        $('html, body').animate({scrollTop: 0}, '300'); // トップにスムーズスクロール
    });


}); //jQueryの閉じタグ（消さない！！）
