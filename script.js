// Gestione dell'animazione a comparsa (Scroll Reveal)
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

// Generatore di Stelle in Movimento Permanente (Cielo Stellato)
const particles = document.getElementById('particles');

if (particles) {
    const starCount = 140; // Numero di stelle contemporanee a schermo
    const starColors = [
        'rgba(255, 255, 255, 0.9)', 
        'rgba(224, 231, 255, 0.9)', 
        'rgba(243, 232, 255, 0.95)', 
        'rgba(195, 218, 254, 0.8)'
    ];

    for (let i = 0; i < starCount; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        
        // Distribuzione casuale sull'asse X
        s.style.left = Math.random() * 100 + 'vw';
        
        // Durate differenziate per creare profondità (stelle vicine e lontane)
        const moveDuration = 20 + Math.random() * 40; // Da 20s a 60s
        const twinkleDuration = 2 + Math.random() * 4;  // Da 2s a 6s
        s.style.animationDuration = `${moveDuration}s, ${twinkleDuration}s`;
        
        // Il trucco magico: delay negativi randomizzati distribuiscono le stelle 
        // ovunque lungo la linea del tempo (evitando che partano tutte insieme dal fondo)
        s.style.animationDelay = `-${Math.random() * moveDuration}s, -${Math.random() * twinkleDuration}s`;
        
        // Dimensioni assortite
        const size = Math.random() * 2.2 + 0.8;
        s.style.width = size + 'px';
        s.style.height = size + 'px';
        
        // Colore casuale dalla palette stellare/cosmica
        s.style.background = starColors[Math.floor(Math.random() * starColors.length)];
        
        particles.appendChild(s);
    }
}
// Gestione del riproduttore audio fantasy
const audioToggle = document.getElementById('audioToggle');
const bgMusic = document.getElementById('bg-music');
const audioText = audioToggle.querySelector('.audio-text');

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
