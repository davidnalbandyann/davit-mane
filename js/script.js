// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        var target = $el.dataset.target;
        $el.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).on("load", function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});


function removePreloader() {
  const preloader = document.querySelector('.preloader-wrapper');
  if (preloader) preloader.remove();

  document.body.classList.remove('preloader-site');
}

document.addEventListener("DOMContentLoaded", function() {
  var guestSearchInput = document.getElementById("guest-search");
  var searchStatus = document.getElementById("search-status");
  var guestItems = Array.prototype.slice.call(document.querySelectorAll(".guest-item"), 0);

  if (!guestSearchInput || !searchStatus || guestItems.length === 0) {
    return;
  }

  function updateGuestHighlights() {
    var query = guestSearchInput.value.trim().toLowerCase();
    var matches = 0;

    guestItems.forEach(function(item) {
      var name = item.textContent.toLowerCase();
      var isMatch = query.length > 0 && name.indexOf(query) !== -1;

      item.classList.toggle("guest-match", isMatch);
      if (isMatch) {
        matches += 1;
      }
    });

    if (!query) {
      searchStatus.textContent = "Մուտքագրեք անունը, և կհայտնվեն համընկնումները։";
      return;
    }

    searchStatus.textContent = matches > 0
      ? "Գտնվել է " + matches + " համընկնում"
      : "Համընկնում չի գտնվել";
  }

  guestSearchInput.addEventListener("input", updateGuestHighlights);
});