$(document).ready(function () {

    hideOnClickOutside($(".dropdown-custom").children());

    var client = algoliasearch('E63DIHARJ5', '8711dec9ef7500381bc6fc86aa1fe4ce');
    var index = client.initIndex('virtool-docs');

    $("#manualSearch").keyup((e) => {
        search(e.target.value);
    });

    function search(searchTerm) {
        if (!searchTerm.length) {
            clearResults();
            return;
        }

        return index.search({query: searchTerm, facetFilters: ["type:manual"]}, function (err, content) {
            renderResults(content.hits, searchTerm);
        });
    }

    // Removes previous search and dropdown 
    function clearResults () {
        $("#search-results").removeClass("dropdown-custom-content");
        $("#search-results").children().remove();
    }

    // Creates dropdown with search results
    function renderResults (searchResults, searchTerm) {
        clearResults();

        if (!searchResults.length) {
            return;
        }

        //attach new search
        $("#search-results").addClass("dropdown-custom-content");
        
        searchResults.forEach((hit) => {
            var searchResult = `
                <a href="/${hit.uri}" class="dropdown-item-custom">
                    <span class="hit-title">
                        <strong>${hit.title}</strong>
                    </span>
                </a>
            `;

            $("#search-results").append(searchResult);
        });
    }

    function hideOnClickOutside (selector) {
        addClickListener();

        function outClickListener (e) {
            if ($(e.target).find(selector).length) {
                $(selector).hide();
            } else {
                $(selector).show();
            }
        }

        function removeClickListener () {
            document.removeEventListener("click", outClickListener);
        }

        function addClickListener () {
            document.addEventListener("click", outClickListener);
        }
    }
    
});
