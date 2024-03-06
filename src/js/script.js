
jQuery(function ($) { 
    /* --------------------------------------------
    /* ヘッダーの色変更
    /* -------------------------------------------- */

$(window).on('load scroll', function () {
    // ヘッダーの背景色変更
    var $header = $('.header');
    if ($(window).scrollTop() > 800) {
        $header.addClass('headerColorScroll');
    } else {
        $header.removeClass('headerColorScroll');
    }

    // ナビの文字色変更
    var $navLinks = $('.pc-nav__link');
    if ($(window).scrollTop() > 800) {
        $navLinks.addClass('pc-nav__linkColorScroll');
    } else {
        $navLinks.removeClass('pc-nav__linkColorScroll');
    }

    // ロゴの切り替え
    var $logo = $('.header-logo__img');
    if ($(window).scrollTop() > 800) {
        $logo.addClass('headerLogoScroll');
    } else {
        $logo.removeClass('headerLogoScroll');
    }
    });

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
            // 下層ページでドロワーメニューが展開している時のみヘッダーの背景色を白に設定
            if ($("body").hasClass("sub-page")) {
                $(".js-header").css("background-color", "#FFFFFF"); // 白色に設定
            }
        }
    });
    
    function closeDrawerMenu() {
        $(".js-drawer-menu").fadeOut();
        $(".js-hamburger").removeClass("is-open");
        $("body").css("overflow", "auto");
        // 下層ページでドロワーメニューが閉じる時にヘッダーの背景色を元に戻す
        if ($("body").hasClass("sub-page")) {
            $(".js-header").css("background-color", ""); // 元のスタイルに戻す
        }
    }

    // $(".js-hamburger").on("click", function () {
    //     if ($(this).hasClass("is-open")) {
    //         closeDrawerMenu();
    //     } else {
    //         $(".js-drawer-menu").fadeIn();
    //         $(this).addClass("is-open");
    //         $("body").css("overflow", "hidden");
    //         $(".js-header").css("background-color", "transparent");
    //     }
    // });

    // $(".sp-nav__link, .sp-nav__heading").on("click", function () {
    //     closeDrawerMenu();
    //     var targetSection = $(this).attr("href");
    //     $("html, body").animate({
    //         scrollTop: $(targetSection).offset().top,
    //     }, 1000);
    // });

    // function closeDrawerMenu() {
    //     $(".js-drawer-menu").fadeOut();
    //     $(".js-hamburger").removeClass("is-open");
    //     $("body").css("overflow", "auto");
    //     $(".js-header").css("background-color", "");
    // }

    // $(window).resize(function () {
    //     if ($(window).width() > 768) {
    //         closeDrawerMenu();
    //     }
    // });

    // if ($(window).width() > 768) {
    //     closeDrawerMenu();
    // }

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
    // タブのクリックイベントハンドラ
    $('.js-tab-trigger').click(function() {
        var id = $(this).attr('id');
        $('.js-tab-trigger').removeClass('is-active');
        $(this).addClass('is-active');
        $('.js-tab-target').removeClass('is-active');
        $('#' + id + '-content').addClass('is-active');

        // タブが切り替わるたびに、最初と3つ目のアコーディオンを開く
        $('#' + id + '-content .accordion__item').each(function(index) {
            if (index === 0 || index === 2) { // 最初と3つ目のアイテム
                $(this).find('.js-accordion-Q').addClass('is-open');
                $(this).find('.js-accordion-A').slideDown();
            } else {
                $(this).find('.js-accordion-Q').removeClass('is-open');
                $(this).find('.js-accordion-A').slideUp();
            }
        });

        return false;
    });

    // アコーディオンのクリックイベントハンドラ
    $('.js-accordion-Q').click(function() {
        $(this).toggleClass('is-open').next('.js-accordion-A').slideToggle();
    });

    // 初期状態で最初と3つ目のアコーディオンを開く
    $('.js-tab-target.is-active .accordion__item').each(function(index) {
        if (index === 0 || index === 2) { // 最初と3つ目のアイテム
            $(this).find('.js-accordion-Q').addClass('is-open');
            $(this).find('.js-accordion-A').show();
        } else {
            $(this).find('.js-accordion-Q').removeClass('is-open');
            $(this).find('.js-accordion-A').hide();
        }
    });






    // // タブのクリックイベントハンドラ
    // $('.js-tab-trigger').click(function() {
    //     var id = $(this).attr('id');
    //     $('.js-tab-trigger').removeClass('is-active');
    //     $(this).addClass('is-active');
    //     $('.js-tab-target').removeClass('is-active');
    //     $('#' + id + '-content').addClass('is-active');
    //     return false;
    // });

    // // アコーディオンのクリックイベントハンドラ
    // $('.js-accordion-Q').click(function() {
    //     $(this).toggleClass('is-open').next('.js-accordion-A').slideToggle();
    // });

    // // 最初のアコーディオンアイテム以外を閉じる処理
    // // 最初のアイテムには初期状態でis-activeクラスが付与されているとのことなので、
    // // 最初のアイテムの状態を変更せず、残りのアイテムを閉じた状態にします。
    // $('.js-accordion-Q').each(function(index) {
    //     if (index !== 0) { // 最初のアイテム以外
    //         $(this).removeClass('is-open').next('.js-accordion-A').hide();
    //     } else {
    //         // 最初のアイテムが開いていることを保証する
    //         $(this).addClass('is-open').next('.js-accordion-A').show();
    //     }
    // });

    // $('.js-tab-trigger').click(function() {
    //     var id = $(this).attr('id');
    //     $('.js-tab-trigger').removeClass('is-active');
    //     $(this).addClass('is-active');
    //     $('.js-tab-target').removeClass('is-active');
    //     $('#' + id + '-content').addClass('is-active');
    //     return false;
    // });

    // $('.js-accordion-Q').click(function() {
    //     $(this).toggleClass('is-open').next('.js-accordion-A').slideToggle();
    // });

    /* --------------------------------------------
    /* ポップアップ
    /* -------------------------------------------- */

        // ページの高さの半分を計算
        var halfwayPoint = $(document).height() / 2;

        // スクロールイベントを監視
        $(window).scroll(function() {
            // 現在のスクロール位置がページの半分を超えたかどうかをチェック
            if ($(window).scrollTop() > halfwayPoint) {
                // ポップアップを表示
                $('.popup').fadeIn();
            } else {
                // ポップアップを非表示
                $('.popup').fadeOut();
            }
        });
    
        // ポップアップの閉じるボタンをクリックしたときの処理
        $('.js-popup-close').click(function() {
            // ポップアップを非表示にする
            $('.popup').fadeOut();
        });
    // const popup = document.querySelector('.popup');
    // const closeButton = document.querySelector('.js-popup-close');

    // window.addEventListener('scroll', function() {
    //     const halfwayDown = document.body.scrollHeight / 2;
    //     if (window.scrollY > halfwayDown) {
    //         popup.style.position = 'fixed';
    //         popup.style.left = '20px';
    //         popup.style.bottom = '20px';
    //         popup.style.display = 'block';
    //     } else {
    //         // popup.style.display = 'none';//要確認　不要？コンソールにエラーが出たため非表示にした
    //     }
    // });

    // closeButton.addEventListener('click', function() {
    //     popup.style.display = 'none';
    // });


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

    /* --------------------------------------------
    /* ダウンロードフォーム Validation
    /* -------------------------------------------- */

    // 要確認　バリデーション

        // const downloadButton = document.getElementById('downloadButton');
        // const formInputs = document.querySelectorAll('.download-form__item input, .download-form__item select');
        
        // // フォームの入力状態をチェックしてボタンのdisabled状態を更新
        // const checkInputs = () => {
        //   let allFilled = true;
        //   formInputs.forEach((input) => {
        //     if (input.value === '') {
        //       allFilled = false;
        //     }
        //   });
        //   downloadButton.disabled = !allFilled;
        // };
      
        // formInputs.forEach((input) => {
        //   input.addEventListener('change', checkInputs);
        // });
      
        // // ボタンクリック時のページ遷移
        // downloadButton.addEventListener('click', () => {
        //   window.location.href = 'whitepaper-download.html'; // 目的のページURL
        // });
      
        // // 初期状態でのチェック
        // checkInputs();



/* --------------------------------------------
/* お問い合わせフォーム（バリデーション）
/* -------------------------------------------- */
$('#contact-form').on('submit', function(event) {
    var isValid = true; // 全てのフィールドが有効であると仮定

    // .requiredクラスが付与された全ての入力フィールドをチェック
    $('.required').each(function() {
        // 値が空の場合
        if (!$(this).val().trim()) {
            isValid = false; // 無効なフィールドが見つかった
            $(this).addClass('errored'); // エラースタイルを適用
        } else {
            $(this).removeClass('errored'); // エラースタイルを削除
        }
    });

    // チェックボックスとラジオボタンのバリデーション
    // 同じ名前を持つチェックボックスやラジオボタンが少なくとも一つ選択されているか確認
    $('input[type=checkbox].required, input[type=radio].required').each(function() {
        var name = $(this).attr('name');
        if ($('input[name="' + name + '"]:checked').length == 0) {
            isValid = false; // 一つも選択されていない場合、無効
            $('input[name="' + name + '"]').closest('.contact-form__item').addClass('errored');
        } else {
            $('input[name="' + name + '"]').closest('.contact-form__item').removeClass('errored');
        }
    });

    // 個人情報の取り扱いについての同意チェック
    if (!$('#checkbox-01-agree').is(':checked')) {
        isValid = false;
        $('#checkbox-01-agree').closest('.contact-form__item').addClass('errored');
    } else {
        $('#checkbox-01-agree').closest('.contact-form__item').removeClass('errored');
    }

    if (!isValid) {
        event.preventDefault(); // フォームの送信を阻止
        // エラーメッセージを表示する処理をここに追加
        $('.contact-form__error').show();
    } else {
        // フォームが有効な場合、エラーメッセージを隠す
        $('.contact-form__error').hide();
    }
});



}); //jQueryの閉じタグ（消さない！！）
