// js/modules/menu.js

export function initializeMenu() { // Adicione 'export function' e renomeie
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const hasSubmenuItems = document.querySelectorAll('.has-submenu');

    if (!menuToggle || !mainNav) return; // Garante que os elementos existem

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        if (!mainNav.classList.contains('active')) {
            hasSubmenuItems.forEach(item => {
                item.classList.remove('submenu-open');
                const submenu = item.querySelector('.submenu');
                if (submenu) {
                    submenu.style.display = 'none'; // Garante que o submenu seja escondido
                }
            });
        }
    });

    hasSubmenuItems.forEach(item => {
        const navLink = item.querySelector('.nav-link');
        // Previne múltiplos listeners se a função for chamada novamente
        navLink.removeEventListener('click', handleSubmenuClick); 
        navLink.addEventListener('click', handleSubmenuClick);

        function handleSubmenuClick(e) {
            // Verifica se está em modo mobile e se é um item com submenu
            if (window.innerWidth <= 767.98 && item.classList.contains('has-submenu') && mainNav.classList.contains('active')) {
                e.preventDefault();
                item.classList.toggle('submenu-open');
                const submenu = item.querySelector('.submenu');
                if (submenu) {
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                }
            }
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 767.98) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            hasSubmenuItems.forEach(item => {
                item.classList.remove('submenu-open');
                const submenu = item.querySelector('.submenu');
                if (submenu) {
                    submenu.style.display = '';
                }
            });
        }
    });
}