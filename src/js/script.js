
jQuery(function ($) { 


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
