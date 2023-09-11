function navigateTo(url) {
    var blocks = document.getElementsByClassName('block');
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].classList.add('fade');
    }
    setTimeout(function() {
        window.location.href = url;
    }, 300);
}

window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
};