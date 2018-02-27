function handleInputChange (e) {
    console.log(e);
}

document.addEventListener('DOMContentLoaded', function () {

    var client = algoliasearch('E63DIHARJ5', '8711dec9ef7500381bc6fc86aa1fe4ce');
    var index = client.initIndex('virtool-docs');

    var searchInput = document.getElementById("manualSearch");

    console.log("LOADED");

    searchInput.addEventListener("change", handleInputChange);
  
});