
jQuery(function ($) { 
    /* --------------------------------------------
    /* トップページのFVスワイパー
    /* -------------------------------------------- */
    var topFvSwiper = new Swiper(".js-top-fv-swiper", {
        loop: true,
        speed: 4000,
        // スライド完了までの時間
        autoplay: {
            delay: 4000 // 次のスライドまでの遅延時間
        },

        allowTouchMove: false,
        // ユーザーのタッチ操作を無効にするかどうか
        slidesPerView: "auto",
        spaceBetween: 24,
        breakpoints: {
            768: {
            spaceBetween: 40
            }
        },
        direction: "horizontal",
    });


    //--------------------------------------------
    /* 導入実績・利用者の声 スワイパー
    /* -------------------------------------------- */

    const voicesSwiper = new Swiper('.js-voices-swiper', {
        // Optional parameters
        loop: true,
                speed: 4000, // スライド完了までの時間
        autoplay: {
            delay: 4000, // 次のスライドまでの遅延時間
        },
        allowTouchMove: false, // ユーザーのタッチ操作を無効にするかどうか
        centeredSlides: true, // スライドを中央寄せ
        slidesPerView: 'auto', // スライドの表示枚数を自動で設定
        breakpoints: {
            // 768px以上の場合の設定
            768: {
                slidesPerView: 3,
                spaceBetween: 26,
            },
            // 768px以下の場合の設定
            767: {
                slidesPerView: 'auto',
                spaceBetween: 10, // お好みで調整してください
            }
        },
        spaceBetween: 26,
        
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        });

    // const voicesSwiper = new Swiper('.js-voices-swiper', {
    //     // Optional parameters
    //     loop: true,

    
    //     // Navigation arrows
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    // });

    // /* --------------------------
    // /* アコーディオン
    // /* ---------------------------- */
    $('.js-tab-trigger').click(function() {
        var id = $(this).attr('id');
        // タブのアクティブ状態を切り替える
        $('.js-tab-trigger').removeClass('is-active');
        $(this).addClass('is-active');

        // 対応するタブコンテンツを表示し、それ以外は非表示にする
        $('.js-tab-target').removeClass('is-active');
        $('#' + id + '-content').addClass('is-active');

        // デフォルトのクリックイベントをキャンセル
        return false;
    });
    // アコーディオンの見出しをクリックしたときの処理
    $('.js-accordion-Q').click(function() {
        // この見出しに対応する回答部分を切り替える
        $(this).toggleClass('is-open').next('.js-accordion-A').slideToggle();
    });


}); //jQueryの閉じタグ（消さない！！）
