document.addEventListener("visibilitychange", function() {
    var videoPlayer = document.getElementById("videoPlayer").contentWindow;
    if (document.hidden) {
        videoPlayer.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
});

window.addEventListener("beforeunload", function() {
    var videoPlayer = document.getElementById("videoPlayer").contentWindow;
    videoPlayer.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
});
