function sideMenu() {
  var menuLists = document.querySelectorAll(".side-sub");

  menuLists.forEach(function($el) {
    $el.firstElementChild.addEventListener("click", function(e) {
      e.preventDefault();

      menuLists.forEach(function($li) {
        $li.classList.remove("is-active");
      });

      $el.classList.add("is-active");

      console.log("DONE");
    });
  });
}

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
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  sideMenu();
});
