$(document).ready(function () {
  window.onscroll = function() {
    if (navbar) {
      stickyNavbar()
    }
  };
  let navbar = document.getElementById("menu-bar");
  let sticky = navbar ? navbar.offsetTop : 0;


  function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  $('.btn-menu').on('click', function () {
    $('.menu-sidebar').toggleClass('show');
  })

  $(document).click(function() {
    $('.menu-sidebar').removeClass('show');
  });

  $(".menu-sidebar, .btn-menu").click(function(event) {
    event.stopPropagation();
  });
})