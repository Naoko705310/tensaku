
jQuery(function ($) { 

    $(window).on('load scroll', function () {
        var $header = $('.header');
        var $navLinks = $('.pc-nav__link');
        var $logo = $('.header-logo__img');
        var scrollTop = $(window).scrollTop();
        var isSubPage = $header.hasClass('sub-header');
    
        // 現在のURLから、トップページにいるかどうかを判断
        var isTopPage = window.location.pathname.endsWith('/tensaku/') || window.location.pathname.endsWith('/tensaku/index.html');
    
        // 画像のパスを設定
        var basePath = isTopPage ? './' : '../';
        var logoGreenPath = basePath + 'assets/images/common/tensaku-logo.png'; // 緑のロゴ
        var logoWhitePath = basePath + 'assets/images/common/header-logo-sp.png'; // 白のロゴ
        var logoWhitePathSet = basePath + 'assets/images/common/header-logo-pc.png 768w, ' + basePath + 'assets/images/common/header-logo-sp.png 320w';
    
        if (isSubPage || scrollTop > 800) {
            $header.addClass('headerColorScroll');
            $navLinks.addClass('pc-nav__linkColorScroll');
            $logo.attr('src', logoGreenPath);
            $logo.attr('srcset', logoGreenPath + ' 768w, ' + logoGreenPath + ' 320w');
        } else {
            $header.removeClass('headerColorScroll');
            $navLinks.removeClass('pc-nav__linkColorScroll');
            $logo.attr('src', logoWhitePath);
            $logo.attr('srcset', logoWhitePathSet);
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


    // ページ読み込み時にPC幅を検出し、768pxを超えたときにメニューを閉じる
    $(window).resize(function () {
    if ($(window).width() > 768) {
        closeDrawerMenu(); // PC幅を超えたらメニューを閉じる
    }
    });

    // ページ読み込み時にもPC幅を超えたらメニューを閉じる
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
            delay: 5000 //等速で、途切れさせずうごかす
        },
        allowTouchMove: false,
        disableOnInteraction: false, // ユーザーの操作後も自動再生を続ける
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
        speed: 2000,
        autoplay: {
            delay: 2000,
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

    /* --------------------------------------------
    /* ポップアップ
    /* -------------------------------------------- */
    // ページの高さの半分を計算
    var halfwayPoint = $(document).height() / 2;
    // ポップアップが閉じられたかどうかを追跡するフラグ
    var isPopupClosed = false;

    // スクロールイベントを監視
    $(window).scroll(function() {
        // ポップアップが閉じられていない、かつ、現在のスクロール位置がページの半分を超えたかどうかをチェック
        if (!isPopupClosed && $(window).scrollTop() > halfwayPoint) {
            // ポップアップを表示
            $('.popup').fadeIn();
        }
    });

    // ポップアップの閉じるボタンをクリックしたときの処理
    $('.js-popup-close').click(function() {
        // ポップアップを非表示にする
        $('.popup').fadeOut();
        // ポップアップが閉じられたことをフラグで記録
        isPopupClosed = true;
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

    /* --------------------------------------------
    /* ダウンロードフォーム Validation
    /* -------------------------------------------- */

    // フォームの入力状態をチェックする関数
    function checkForm() {
        let isValid = true; // 全てのフォームが有効かどうかを追跡
        // 各フォーム項目をループして、空のものがあるかチェック
        $('.download-form__item input, .download-form__item select').each(function() {
            if ($(this).val() === '') {
                isValid = false; // 空の入力が見つかった場合、無効
            }
        });

        // 全てのフォーム項目が有効なら、ダウンロードボタンを有効にする
        if (isValid) {
            $('#js-download').prop('disabled', false).removeClass('disabled');
        } else {
            $('#js-download').prop('disabled', true).addClass('disabled');
        }
    }

    // フォームの入力が変更されたときにチェックを行う
    $('.download-form__item input, .download-form__item select').on('change keyup', function() {
        $('.download-error').text(''); // 入力が変更されたらエラーメッセージをクリア
        checkForm();
    });

    // ダウンロードボタンがクリックされたときの処理
    $('#js-download').click(function(e) {
        e.preventDefault(); // フォームの送信を防ぐ
        checkForm(); // フォームの状態を再チェック

        // フォームが有効なら、次のページに遷移
        if (!$('#js-download').prop('disabled')) {
            window.location.href = 'whitepaper-download.html';
        } else {
            // フォームが無効なら、エラーメッセージを表示
            $('.download-error').text('※全ての項目に入力してください。');
            
        }
    });

/* --------------------------------------------
/* お問い合わせフォーム（バリデーション）
/* -------------------------------------------- */
function validateForm() {
    let hasError = false;
    $('.input-area, .checkbox-input, .radio-input').removeClass('errored');
    $('.error_required, .checkbox-error, .radio-error, .privacy-error').text('');

// 必須テキストフィールドのバリデーション	// 以下のコードは省略（テキストフィールドとチェックボックスのバリデーション）
$('.required').each(function() {	
if ($(this).val().trim() === '') {	
$(this).addClass('errored');	
$(this).next('.error_required').text('※入力必須項目です');	
hasError = true;	
} else {	
     $(this).css('color', 'black'); // 入力がある場合はテキストの色を黒に	
}	
});	
// ご利用意図のチェックボックスバリデーション	
if ($('input[name="checkbox-name"]:checked').length === 0) {	
$('.checkbox-error').text('※少なくとも一つ選択してください');	
hasError = true;	
}	
// 個人情報の取り扱いについてのチェックボックスバリデーション	
if (!$('input[name="checkbox-name-agree"]:checked').length) {	
$('.privacy-error').text('※個人情報保護方針に同意してください。');	
hasError = true;	
}

    // ご検討状況1のラジオボタンバリデーション
    if ($('input[name="radio-name-1"]:checked').length === 0) {
        $('.radio-error').first().text('※ご検討状況を選択してください');
        hasError = true;
    }

    // ご検討状況2のラジオボタンバリデーション
    if ($('input[name="radio-name-2"]:checked').length === 0) {
        $('.radio-error').last().text('※ご検討状況を選択してください');
        hasError = true;
    }

    // エラーがある場合は送信ボタンを非アクティブに
    if (hasError) {
        $('#js-submit').addClass('disabled').prop('disabled', true);
    } else {
        $('#js-submit').removeClass('disabled').prop('disabled', false);
    }

    return !hasError; // ここでエラーの有無に基づいて true または false を返す
}

// 送信ボタンクリック時の処理
$('#js-submit').click(function(e) {
    e.preventDefault();
    if (validateForm()) {
        // バリデーション成功時にページ遷移
        window.location.href = 'contact-thanks.html';
    }
});

// 入力フィールドの変更を監視
$('.required, .checkbox-input, input[type="radio"]').on('change input', function() {
    validateForm();
});


/* --------------------------------------------
/* スムーススクロール
/* -------------------------------------------- */
// URLのハッシュをチェックして対応するセクションへスムーススクロール
if(window.location.hash) {
var hash = window.location.hash;
if($(hash).length) {
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 400); // 400ミリ秒でスクロール
}
}

}); //jQueryの閉じタグ（消さない！！）
