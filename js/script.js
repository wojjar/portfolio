
window.onload = function () {
    $(".loader .inside").fadeOut(1000, function () {
        $(".loader").fadeOut(500);
    });

    var slider = document.getElementById("slideShow");
    var imagesSrc = ["slide1.jpeg", "slide2.jpeg", "slide3.jpeg"];
    for (var i = 0; i < imagesSrc.length; i++) {
        var image = new Image();
        image.src = "images/" + imagesSrc[i];
        slider.appendChild(image);
    }

    slider.childNodes[0].setAttribute("class", "current");
    var j = 0;
    setInterval(function () {
        slider.childNodes[j % imagesSrc.length].setAttribute("class", "");
        slider.childNodes[(j + 1) % imagesSrc.length].setAttribute("class", "current");
        j++;
    }, 3000);
};













