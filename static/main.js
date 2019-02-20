var algoliaClient = algoliasearch(
  "E63DIHARJ5",
  "8711dec9ef7500381bc6fc86aa1fe4ce"
);

var algoliaIndex = algoliaClient.initIndex("virtool-docs");

var lastScrollPos = 0;

// Removes previous search and dropdown
function clearResults() {
  var $el = document.getElementById("search-results");

  if ($el) {
    $el.classList.remove("is-active");
    $el.innerHtml = "";
  }
}

// Creates dropdown with search results
function renderResults(searchResults, searchTerm) {
  console.log(searchResults);

  clearResults();

  if (!searchResults.length) {
    return;
  }

  var $el = document.getElementById("search-results");

  if ($el) {
    $el.classList.add("dropdown-custom-content");

    searchResults.forEach(hit => {
      var $result = document.createElement("a");
      $result.href = hit.permalink;
      $result.classList.add("dropdown-item-custom");
      $result.innerHTML = `
        <span class="hit-title">
            <strong>${hit.title}</strong>
        </span>
      `;
      $el.append($result);
    });
  }
}

function hideOnClickOutside(selector) {
  document.addEventListener("click", function(e) {
    if ($(e.target).find(selector).length) {
      $(selector).hide();
    } else {
      $(selector).show();
    }
  });
}

function navShadow() {
  var $nav = document.getElementById("nav");

  window.addEventListener("scroll", function(e) {
    var pos = window.scrollY;

    if (lastScrollPos < 5 && pos >= 5) {
      window.requestAnimationFrame(function() {
        $nav.classList.add("nav-shadow");
      });
    } else if (lastScrollPos >= 5 && pos < 5) {
      window.requestAnimationFrame(function() {
        $nav.classList.remove("nav-shadow");
      });
    }

    lastScrollPos = pos;
  });
}

function search(searchTerm) {
  if (!searchTerm.length) {
    clearResults();
    return;
  }

  return algoliaIndex.search(
    { query: searchTerm, facetFilters: ["type:manual"] },
    function(err, content) {
      renderResults(content.hits, searchTerm);
    }
  );
}

function sideMenu() {
  var menuLists = document.querySelectorAll(".side-sub");

  menuLists.forEach(function($el) {
    $el.firstElementChild.addEventListener("click", function(e) {
      e.preventDefault();

      menuLists.forEach(function($li) {
        $li.classList.remove("is-active");
      });

      $el.classList.add("is-active");
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  navShadow();
  sideMenu();

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  var $search = document.getElementById("search");

  if ($search) {
    $search.addEventListener("keyup", function(e) {
      search(e.target.value);
    });
  }

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
});
