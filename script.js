const videoPlayer = document.getElementById('videoPlayer');
const videos = ['01.mp4', '02.mp4', '03.mp4'];
let currentVideoIndex = 0;

function loadVideo() {
    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.play();
}

videoPlayer.addEventListener('ended', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    loadVideo();
});

loadVideo();

// Service Worker registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
}
