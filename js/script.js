// Window Load screen

$(window).on("load", function () {
  // Loading Page
  $(".spinner")
    .delay(500)
    .fadeOut(400, function () {
      document.documentElement.style.setProperty(
        "--backRightIn",
        "translateX(100%)"
      );
      document.documentElement.style.setProperty(
        "--backLefttIn",
        "translateX(-100%)"
      );
      $(".loader").fadeOut(300);
    });
  $("body").css("overflow-y", "auto");

  // $(".sliderHome img, .main-body-slider").height($(document).height());

  // Animation Page
  AOS.init();
});

$(document).ready(function () {
  // Scroll Fix Header
  $(window).scroll(function () {
    if ($(window).width() > 767) {
    }
    if ($(this).scrollTop() > 30) {
      $("header").addClass("!bg-white !shadow-md");
      $("header ul li a").addClass("!text-black");
    } else {
      $("header").removeClass("!bg-white !shadow-md");
      $("header ul li a").removeClass("!text-black");
    }
  });

  // Click Add class Link
  $(document).on("click", "header ul li", function (e) {
    e.preventDefault();
    $(this).addClass("active").siblings().removeClass("active");
  });

  // Click Scroll Up Page
  $(document).on("click", ".fix-up", function () {
    $(window).scrollTop(0);
  });

  // Show More List
  $(document).on("click", ".show-more-list", function () {
    $(".list-services").toggleClass("!h-auto");
    $(".fa-angles-down").toggleClass("fa-angles-up");
    if ($(".fa-angles-down").hasClass("fa-angles-up")) {
      console.log("up");
    } else {
      const targetElement = $("#Services");
      $("html, body").animate(
        {
          scrollTop: targetElement.offset().top - 70,
        },
        50
      );
    }
  });

  // Scroll For Section
  $(document).on(
    "click",
    "header ul li a, .list-footer ul li a, .info-tab a",
    function (e) {
      $("html, body").animate(
        {
          scrollTop: $("#" + $(this).data("value")).offset().top - 70,
        },
        50
      );
      e.preventDefault();
      if ($(window).width() < 990) {
        $(".handle").toggleClass("closed");
        $(".list-head").toggleClass("translate-x-[100%]");
        $(".overlay").toggleClass("translate-x-[-100%]");
      }
    }
  );

  // Click Open Nav Mobile
  $(document).on("click", ".click-nav", function () {
    $(".handle").toggleClass("closed");
    $(".list-head").toggleClass("translate-x-[100%]");
    $(".overlay").toggleClass("translate-x-[-100%]");
    $("body").toggleClass("overflow-hidden");
  });

  // Slider Home
  $("#sliderHome").owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    animateOut: "fadeOut",
    dragEndSpeed: 7000,
    pagination: false,
    nav: false,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

document.addEventListener(
  "touchstart",
  function (event) {
    if (event.touches.length > 1) {
      event.preventDefault(); // Prevent double-tap zooming
    }
  },
  { passive: false }
);
