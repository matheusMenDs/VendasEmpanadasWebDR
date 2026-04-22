// Script para navegação suave e menu mobile
console.log('Script loaded');
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded');
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    console.log('Hamburger:', hamburger);
    console.log('Menu:', menu);

    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            console.log('Hamburger clicked');
            menu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    } else {
        console.log('Hamburger or menu not found');
    }

    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Animação de fade-in para seções
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Formulário de contato - agora envia via Formspree
    // Removido o handler personalizado, pois o form agora submete diretamente