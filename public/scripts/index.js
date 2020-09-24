$(function () {

  $(".home").click(function() {
    $("body, html").animate(
      {
        scrollTop: $(".splash-container").offset().top
      },
      800
    );
  });

  $(".about").click(function() {
    $("body, html").animate(
      {
        scrollTop: $(".about-container").offset().top - 70
      },
      800
    );
  });

  $(".services").click(function() {
    $("body, html").animate(
      {
        scrollTop: $(".services-container").offset().top - 120
      },
      800
    );
  });

  $(".gallery").click(function() {
    $("body, html").animate(
      {
        scrollTop: $(".gallery-container").offset().top - 70
      },
      800
    );
  });

  $(".contact").click(function() {
    $("body, html").animate(
      {
        scrollTop: $(".contact-container").offset().top - 70
      },
      800
    );
  });

});
