$(document).ready(function() {
  //Array of images which you want to show.
  var images = new Array(
    "img/head-anenomeRight.jpeg",
    "img/head-clownAnenome.jpeg",
    "img/head-discus.jpg"
  );
  var nextimage = 0;
  doSlideshow();
  //Hero-image slideshow
  function doSlideshow() {
    if (nextimage >= images.length) {
      nextimage = 0;
    }
    $("#home")
      .css(
        "background-image",
        'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("' +
          images[nextimage++] +
          '")'
      )
      .fadeIn(500, function() {
        setTimeout(doSlideshow, 6000);
      });
  }
});
//Bootstrap Slideshows
$(".carousel").carousel({
  interval: 5000,
  keyboard: true,
  pause: "hover",
  wrap: true
});

// get current year for copyright
$("#year").text(new Date().getFullYear());

//init scrollspy
$("body").scrollspy({ target: "#main-nav" });

//smooth scrolling
$("#main-nav a, #learn-more").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});
