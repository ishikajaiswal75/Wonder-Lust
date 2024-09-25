// Initial filter to show all images
filterSelection('all');

function filterSelection(category) {
    var images = document.getElementsByClassName("image");

    if (category === "all") category = "";  // Show all images if 'all' is selected

    // Loop through images and hide or show them based on category
    for (var i = 0; i < images.length; i++) {
        removeClass(images[i], "showImg");
        if (images[i].className.indexOf(category) > -1) {
            addClass(images[i], "showImg");
        }
    }
}

// Add 'show' class to element
function addClass(element, name) {
    var arr = element.className.split(" ");
    if (arr.indexOf(name) === -1) {
        element.className += " " + name;
    }
}

// Remove 'show' class from element
function removeClass(element, name) {
    var arr = element.className.split(" ");
    while (arr.indexOf(name) > -1) {
        arr.splice(arr.indexOf(name), 1);
    }
    element.className = arr.join(" ");
}
