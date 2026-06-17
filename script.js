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
    show(); // Esecuzione immediata al caricamento


    /* ==========================================================================
       2. GENERATORE DI STELLE (Cielo Stellato Dinamico)
       ========================================================================== */
    // Cerca il div #particles; se non esiste, le appende direttamente al body
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
            
            // FIX CRUCIALI: Distribuzione casuale totale (Sia asse X che asse Y)
            s.style.left = Math.random() * 100 + 'vw';
            s.style.top = Math.random() * 100 + 'vh'; 
            
            // Calcolo durate differenziate (Vengono associate alle due animazioni CSS nell'ordine corretto)
            const moveDuration = 20 + Math.random() * 40;   // Durata floatUp (20s - 60s)
            const twinkleDuration = 2 + Math.random() * 4;  // Durata twinkle (2s - 6s)
            s.style.animationDuration = `${moveDuration}s, ${twinkleDuration}s`;
            
            // Delay negativi per distribuire le stelle subito nel flusso temporale
            s.style.animationDelay = `-${Math.random() * moveDuration}s, -${Math.random() * twinkleDuration}s`;
            
            // Dimensioni assortite
            const size = Math.random() * 2.2 + 0.8;
            s.style.width = size + 'px';
            s.style.height = size + 'px';
            
            // Colore casuale
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
        // Cerca l'elemento di testo interno; se non esiste usa il pulsante stesso
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
                bgMusic.paused();
                audioToggle.classList.remove('playing');
                audioText.innerText = 'Ascolta Melodia';
            }
        });
    }
});
