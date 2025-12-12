document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Año automático en el Footer
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Smooth Scroll (Deslizamiento suave al dar clic en enlaces)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. LOGICA SCROLL REVEAL (Animación al bajar)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Distancia desde abajo para activar

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Escuchar el evento de scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Ejecutar una vez al inicio por si ya se ve algo
    revealOnScroll();

    console.log("XGaming Digital - Web cargada correctamente 🚀");
});
