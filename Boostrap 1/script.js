$(document).ready(function () {
  $(this).scrollTop(0);
  $("#uraa").click(function (e) {
    alert("Sended");
    e.preventDefault();
  });
  $("#profil").click(function () {
    profil.classList.toggle("profile");
  });

  $(".page-scroll").click(function (e) {
    $(".page-scroll").removeClass("active");
    $(this).addClass("active");
  });

  

   $(window).scroll(function () {
    // console.log($(window).scrollTop());
    // console.log($('.gallery').offset().top);
    if($(window).scrollTop() > $('#about-text').offset().top - 500) {
      setTimeout(function(){
        $('#trigger').hide();
        $('#about-text').addClass('fade');
        $('.pkiri').addClass('swipe');
        $('.pkanan').addClass('swipe');
      }, 500);
    }
    if($(window).scrollTop() > $('.gallery').offset().top - 500) {
      $('.gallery').each(function(i){
        setTimeout(function(){
          $(this).i;
          $('.gallery').eq(i).addClass('swipeup');
        }, 500 * (i+1));
      })
    }

    if ($(window).scrollTop() < $("#gallery-scroll").offset().top - 300) {
      $(".page-scroll").removeClass("active");
      $(".page-scroll").eq(0).addClass("active");
    } else if ($(window).scrollTop() < $("#contact-scroll").offset().top - 200) {
      $(".page-scroll").removeClass("active");
      $(".page-scroll").eq(1).addClass("active");
    } else if ($(window).scrollTop() < $("#social-scroll").offset().top - 500) {
      $(".page-scroll").removeClass("active");
      $(".page-scroll").eq(2).addClass("active");
    } else{
      $(".page-scroll").removeClass("active");
      $(".page-scroll").eq(3).addClass("active");
    }
   });

  $("#brand").click(function () {
    $("#brand").toggleClass("zero");
  });

  const gallery = document.querySelectorAll(".gallery");
  for (let i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener("click", function (e) {
      if (gallery[i] == gallery[0]) {
        gallery[0].classList.toggle("one");
      }
      if (gallery[i] == gallery[1]) {
        gallery[1].classList.toggle("two");
      }
      if (gallery[i] == gallery[2]) {
        gallery[2].classList.toggle("three");
      }
      if (gallery[i] == gallery[3]) {
        gallery[3].classList.toggle("four");
      }
      if (gallery[i] == gallery[4]) {
        gallery[4].classList.toggle("five");
      }
      if (gallery[i] == gallery[5]) {
        gallery[5].classList.toggle("six");
      }
    });
  }

setInterval(function(){
  $('#blinkspan').toggleClass('text-muted', 'text-light')}, 2000);

  instagram = false;
  facebook = false;
  discord = false;
  github = false;
  $(".logo").click(function () {
    $(this).removeClass("text-light");
    $(this).addClass("text-warning");
    $(this).parent().next().removeClass("text-primary");
    $(this).parent().next().addClass("text-danger");
  });

  $(".name").click(function () {
    $(this).removeClass("text-primary");
    $(this).addClass("text-danger");
    $(this).prev().children().removeClass("text-light");
    $(this).prev().children().addClass("text-warning");
  });

  $(".instagram").click(function () {
    instagram = true;
  });
  $(".facebook").click(function () {
    facebook = true;
  });
  $(".discord").click(function () {
    discord = true;
  });
  $(".github").click(function () {
    github = true;
  });
  const iconGroup = document.getElementById("icon-group");
  $("#icon-group").click(function () {
    if (
      instagram == true &&
      facebook == true &&
      discord == true &&
      github == true
    ) {
      $("#footerhr").addClass("text-danger").css("height", "3px");
      $("#aboutme")
        .text("Thanks For Visiting All My Social Media")
        .removeClass("text-light")
        .addClass("text-warning");
    }
  });
});
