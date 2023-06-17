function loadVideoByDevice() {
    var device = "mobile"
    if (window.innerWidth > 768) {
        device = "desktop";
    }

    var video = document.querySelectorAll('.' + device + ' .video')[0];
    var source = video.querySelectorAll('source')[0];
    var dataSrc = source.getAttribute('data-src');
    if (source.getAttribute('src') == null) {
        source.setAttribute('src', dataSrc);
        video.load();
    }

}
loadVideoByDevice();
window.onresize = function () {
    loadVideoByDevice();
}