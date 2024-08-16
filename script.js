document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    // Função para alternar entre play e pause
    const togglePlayPause = () => {
        if (audioPlayer.paused) {
            audioPlayer.play().catch(error => {
                console.error('Erro ao tentar reproduzir o áudio:', error);
            });
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'inline';
        } else {
            audioPlayer.pause();
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
        }
    };

    playPauseBtn.addEventListener('click', togglePlayPause);

    // Retomar reprodução ao mudar de aba ou desligar a tela
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden' && !audioPlayer.paused) {
            audioPlayer.play().catch(error => {
                console.error('Erro ao tentar retomar a reprodução:', error);
            });
        }
    });

    // Controle de foco no botão para acessibilidade
    playPauseBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            togglePlayPause();
        }
    });
});
