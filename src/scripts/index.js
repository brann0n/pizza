var r = 47,
    g = 0,
    b = 0;

var bgPage;
function documentOnLoad() {
    bgPage = document.getElementsByClassName('page')[0];
    // start the rgb bottom bar
    bg();
}

function bg() {
    if (r <= 255 && g == 0 && b == 0) {
        r++;
    }
    if (r == 255 && b == 0 && g <= 255) {
        g++;
    }
    if (r == 255 && g == 255 && b <= 255) {
        b++;
    }
    if (b == 255 && g == 255 && r > 0) {
        r--;
    }
    if (r == 0 && b == 255 && g > 0) {
        g--;
    }
    if (r == 0 && g == 0 && b > 0) {
        b--;
    }
    setTimeout(function () {
        bg();
    }, 1);

    bgPage.style.background = `linear-gradient(180deg, rgba(${255 - r}, ${255 - g}, ${255 - b}, 0.4) 0%, rgba(54, 53, 53, 0.03) 80%, rgb(${r}, ${g}, ${b}, 0.6) 100%)`;
}