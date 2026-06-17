document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    const show = () => {
        reveals.forEach(r => {
            const top = r.getBoundingClientRect().top;
            if (top < window.innerHeight - 80) {
                r.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', show);
    show();

    // 2. Generatore Stelle
    const particles = document.getElementById('particles');
    if (particles) {
        const starCount = 150;
        const starColors = ['#ffffff', '#e0e7ff', '#f3e8ff', '#c3dafe'];

        for (let i = 0; i < starCount; i++) {
            const s = document.createElement('div');
            s.className = 'star';
            
            // Posizionamento casuale
            s.style.left = Math.random() * 100 + 'vw';
            s.style.top = Math.random() * 100 + 'vh';
            
            // Proprietà casuali
            const size = Math.random() * 2 + 1;
            const duration = 20 + Math.random() * 30;
            
            s.style.width = size + 'px';
            s.style.height = size + 'px';
            s.style.backgroundColor = starColors[Math.floor(Math.random() * starColors.length)];
            s.style.animationDuration = duration + 's';
            s.style.animationDelay = Math.random() * duration + 's';
            
            particles.appendChild(s);
        }
    }

    // 3. Audio Control
    const audioToggle = document.getElementById('audioToggle');
    const bgMusic = document.getElementById('bg-music');
    const audioText = audioToggle.querySelector('.audio-text');

    audioToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                audioText.innerText = 'Silenzia Melodia';
            }).catch(e => console.log("Audio bloccato dal browser"));
        } else {
            bgMusic.pause();
            audioText.innerText = 'Ascolta Melodia';
        }
    });
});        const twinkleDuration = 2 + Math.random() * 4;  // Da 2s a 6s
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
