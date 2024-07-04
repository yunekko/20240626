jQuery(function ($) {
  // ページトップボタン
  var topBtn = $(".js-pagetop");
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });

  // アーチ状文字
  $(".js-arch1").arctext({ radius: 180 });
  $(".js-arch2").arctext({ radius: 300 });
});

// ハンバーガーメニュー
jQuery(function ($) {
  $(".p-header__hamburger").click(function () {
    $(this).toggleClass("is-active");
    // bodyに「.active」class付け外し
    $("body").toggleClass("active");
    $(".js-drawer").fadeToggle();
  });
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(".p-header__logo, .p-header__nav-item a, .p-float a").click(function () {
      $(".p-header__hamburger").removeClass("is-active");
      $("body").removeClass("active");
      $(".js-drawer").fadeOut();
    });
  }
});

// フローティングメニュー
var float = $(".p-float");
var informationOffset = $(".p-information").offset().top;
float.hide();
if (window.matchMedia("(max-width: 768px)").matches) {
  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition > 50 && scrollPosition < informationOffset) {
      float.fadeIn();
    } else {
      float.fadeOut();
    }
  });
}

// フェードイン
$(document).ready(function () {
  $(".fade-in-ready").addClass("scroll-in");
});

jQuery(function ($) {
  var fadeIn = $(".fade-in");
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
});

// アンダーライン
jQuery(function ($) {
  var underline = $(".js-underline");
  $(window).scroll(function () {
    $(underline).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("is-active");
      }
    });
  });
});

// 治療の流れ(p-plan-bottom過ぎたら)
$(window).on("scroll", function () {
  var planBottomOffset = $(".p-plan-bottom").offset().top;
  var scrollPosition = $(this).scrollTop();
  if (scrollPosition > planBottomOffset) {
    $(".p-flow__item").addClass("is-show");
  }
});

// アコーディオンメニュー
$(function () {
  $(".p-faq__answer:not(.p-faq__answer:first)").hide();
  // タイトルをクリックすると
  $(".js-accordion-title").on("click", function () {
    // クリックしたタイトル以外のopenクラスを外す(－から＋にする)
    $(".js-accordion-title").not(this).removeClass("open");
    // クリックしたタイトル以外のコンテンツを閉じる
    $(".js-accordion-title").not(this).next().slideUp(300);
    // クリックしたタイトルにopenクラスを付け外しして＋と－を切り替える
    $(this).toggleClass("open");
    // クリックしたタイトルの次の要素(コンテンツ)を開閉
    $(this).next().slideToggle(300);
  });
});
