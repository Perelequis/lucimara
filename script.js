document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');

    // Play or pause the video when the button is clicked
    playPauseBtn.addEventListener('click', function() {
        if (videoPlayer.paused) {
            videoPlayer.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            videoPlayer.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    // Ensure the video continues playing when the user leaves the page or turns off the device
    document.addEventListener("visibilitychange", function() {
        if (!document.hidden && videoPlayer.paused) {
            videoPlayer.play();
            playPauseBtn.textContent = 'Pause';
        }
    });

    // Automatically pause the video if the window is being closed
    window.addEventListener("beforeunload", function() {
        videoPlayer.pause();
    });

    // Ensure video playback continues even if the user exits the browser or locks the screen
    const playInBackground = () => {
        const video = videoPlayer;
        if ('pictureInPictureEnabled' in document && !video.paused) {
            video.requestPictureInPicture().catch(error => {
                console.log('Picture-in-Picture failed', error);
            });
        }
    };

    document.addEventListener('visibilitychange', playInBackground);
    document.addEventListener('resume', playInBackground);
});
