// Inicializar Swiper (carrusel)
document.addEventListener('DOMContentLoaded', function() {
    // Configuración del carrusel
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Configuración de ScrollReveal
    ScrollReveal().reveal('.poema-section', {
        delay: 300,
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
    });

    ScrollReveal().reveal('.spotify-section', {
        delay: 500,
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
    });

    ScrollReveal().reveal('.heart-animation', {
        delay: 700,
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
    });

    ScrollReveal().reveal('.declaration', {
        delay: 900,
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
    });

    // Manejar el botón de cargar Spotify
    document.getElementById('load-spotify').addEventListener('click', function() {
        const spotifyCode = document.getElementById('spotify-code').value.trim();
        const spotifyEmbed = document.getElementById('spotify-embed');
        
        if (spotifyCode) {
            // Limpiar contenido anterior
            spotifyEmbed.innerHTML = '';
            
            // Crear iframe de Spotify
            const iframe = document.createElement('iframe');
            iframe.style.borderRadius = '12px';
            iframe.width = '100%';
            iframe.height = '152';
            iframe.frameBorder = '0';
            iframe.allowFullscreen = '';
            iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
            iframe.loading = 'lazy';
            iframe.src = `https://open.spotify.com/embed/track/${spotifyCode}?utm_source=generator`;
            
            spotifyEmbed.appendChild(iframe);
        } else {
            alert('Por favor, ingresa un código de Spotify válido');
        }
    });

    // Manejar el botón SÍ
    document.getElementById('yes-btn').addEventListener('click', function() {
        const responseImage = document.getElementById('response-image');
        responseImage.classList.remove('hidden');
        
        // Crear imagen animada
        responseImage.innerHTML = '';
        const img = document.createElement('div');
        img.style.backgroundImage = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\' viewBox=\'0 0 200 200\'><path fill=\'%23e11d48\' d=\'M100,184 C140,164 172,132 184,100 C196,68 188,44 172,28 C156,12 132,4 100,4 C68,4 44,12 28,28 C12,44 4,68 16,100 C28,132 60,164 100,184 Z\'/></svg>")';
        img.style.width = '200px';
        img.style.height = '200px';
        img.style.margin = '0 auto';
        img.style.backgroundRepeat = 'no-repeat';
        img.style.backgroundPosition = 'center';
        img.style.backgroundSize = 'contain';
        img.style.animation = 'pulse 2s infinite';
        
        responseImage.appendChild(img);
        
        // Mostrar mensaje de felicitación
        setTimeout(() => {
            alert('¡Felicidades! Ahora somos novios ❤️');
        }, 1000);
    });
});