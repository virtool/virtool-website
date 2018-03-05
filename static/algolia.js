
/*
function handleInputChange (e, index) {
    var searchTerm = e.target.value;

    index.search(searchTerm, function(err, content) {
        console.log(content.hits);

        var searchResultList = "<div class='dropdown is-active'>" +
            "<div class='dropdown-content' id='search-results'></div>" +
            "</div>";

        $("#manualSearch").parent().append(searchResultList);

        content.hits.forEach((hit) => {
            var searchResult = '<a href="#" class="dropdown-item">' + hit.title + '</a>';
            $("#search-results").append(searchResult);
        });
    });

}

function clearResults () {
    $("#search-results").remove();
}

document.addEventListener('DOMContentLoaded', function () {

    var client = algoliasearch('E63DIHARJ5', '8711dec9ef7500381bc6fc86aa1fe4ce');
    var index = client.initIndex('virtool-docs');

    var searchInput = document.getElementById("manualSearch");

//    searchInput.addEventListener("change", (e) => {handleInputChange(e, index)});

    $("#manualSearch").keyup((e) => {
        clearResults();
        handleInputChange(e, index);
    });

});
*/

$(document).ready(function () {

    var client = algoliasearch('E63DIHARJ5', '8711dec9ef7500381bc6fc86aa1fe4ce');
    var index = client.initIndex('virtool-docs');

    $("#manualSearch").keyup((e) => {
        search(e.target.value);
    });

    function search(searchTerm) {
        return index.search(searchTerm, function (err, content) {
            renderResults(content.hits, searchTerm);
        });
    }

    function renderResults (searchResults, searchTerm) {
        console.log(searchResults);
    }
    
});
