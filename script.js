document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================================
       1. GESTIONE SCROLL REVEAL (Comparsa Contenuti)
       ========================================================================== */
    const reveals = document.querySelectorAll('.reveal');

    function show() {
        reveals.forEach(r => {
            const top = r.getBoundingClientRect().top;
            if (top < window.innerHeight - 80) {
                r.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', show);
    show();


    /* ==========================================================================
       2. GENERATORE DI STELLE (Velocizzate)
       ========================================================================== */
    const particlesContainer = document.getElementById('particles') || document.body;

    if (particlesContainer) {
        const starCount = 140; 
        const starColors = [
            'rgba(255, 255, 255, 0.9)', 
            'rgba(224, 231, 255, 0.9)', 
            'rgba(243, 232, 255, 0.95)', 
            'rgba(195, 218, 254, 0.8)'
        ];

        for (let i = 0; i < starCount; i++) {
            const s = document.createElement('div');
            s.className = 'star';
            
            s.style.left = Math.random() * 100 + 'vw';
            s.style.top = Math.random() * 100 + 'vh'; 
            
            // AGGIORNATO: Ridotti i tempi per raddoppiare la velocità di movimento e luccichio
            const moveDuration = 5 + Math.random() * 12;    // Ora viaggiano veloci (tra i 5 e i 17 secondi, prima 20-60!)
            const twinkleDuration = 1 + Math.random() * 3;  // Luccichio più reattivo (1-4 secondi)
            
            s.style.animationDuration = `${moveDuration}s, ${twinkleDuration}s`;
            s.style.animationDelay = `-${Math.random() * moveDuration}s, -${Math.random() * twinkleDuration}s`;
            
            const size = Math.random() * 2.2 + 0.8;
            s.style.width = size + 'px';
            s.style.height = size + 'px';
            
            s.style.background = starColors[Math.floor(Math.random() * starColors.length)];
            
            particlesContainer.appendChild(s);
        }
    }


    /* ==========================================================================
       3. CONTROLLO AUDIO BACKGROUND FANTASY
       ========================================================================== */
    const audioToggle = document.getElementById('audioToggle') || document.querySelector('.audio-control');
    const bgMusic = document.getElementById('bg-music');

    if (audioToggle && bgMusic) {
        const audioText = audioToggle.querySelector('.audio-text') || audioToggle;

        audioToggle.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    audioToggle.classList.add('playing');
                    audioText.innerText = 'Silenzia Melodia';
                }).catch(err => {
                    console.log("Riproduzione bloccata dalle restrizioni del browser: ", err);
                });
            } else {
                bgMusic.pause();
                audioToggle.classList.remove('playing');
                audioText.innerText = 'Ascolta Melodia';
            }
        });
    }
});
