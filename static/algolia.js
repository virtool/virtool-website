function handleInputChange (e, index) {
    var searchTerm = e.target.value;

    index.search(searchTerm, function(err, content) {
        console.log(content.hits);

        var searchResultList = "<div class='list-group' id='search-results'></div>";

        $("#manualSearch").parent().append(searchResultList);

        content.hits.forEach((hit) => {
            var searchResult = '<button type="button" class="list-group-item">' + hit.title + '</button>';
            $("#search-results").append(searchResult);
            console.log(hit.title);
        });
    });

}

document.addEventListener('DOMContentLoaded', function () {

    var client = algoliasearch('E63DIHARJ5', '8711dec9ef7500381bc6fc86aa1fe4ce');
    var index = client.initIndex('virtool-docs');

    var searchInput = document.getElementById("manualSearch");

    searchInput.addEventListener("change", (e) => {handleInputChange(e, index)});

    window.onload = function() {
        if (window.jQuery) {
            console.log("yes jQuery");
            var $test = $(".manualSearch");
            console.log($test);
        } else {
            console.log("no jQuery");
        }
    }

});