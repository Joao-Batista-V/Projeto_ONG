// js/main.js

// Importar módulos
import { templates } from './templates.js';
import { initializeMenu } from './modules/menu.js'; // Nosso antigo script.js
import { setupFormValidation } from './modules/formValidation.js'; // Módulo de validação

const appContent = document.getElementById('app-content');
const mainNavLinks = document.querySelectorAll('.main-nav .nav-link');

// Define as rotas disponíveis
const routes = {
    '#home': templates.home,
    '#projetos': templates.projetos,
    '#cadastro': templates.cadastro,
    'default': templates.home // Rota padrão se nada for especificado
};

// Função para carregar o conteúdo da página
const loadContent = async (hash) => {
    // Remover a classe 'active' de todos os links de navegação
    mainNavLinks.forEach(link => link.classList.remove('active'));

    // Adicionar a classe 'active' ao link correspondente
    const activeLink = document.querySelector(`.main-nav .nav-link[href="${hash}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    const content = routes[hash] || routes['default'];
    
    // Simula um carregamento assíncrono (útil para futuras expansões)
    appContent.innerHTML = await Promise.resolve(content);

    // Após carregar o conteúdo, inicializar funcionalidades específicas da página
    if (hash === '#cadastro') {
        setupFormValidation();
    }
};

// Listener para mudanças na hash (navegação)
window.addEventListener('hashchange', () => {
    loadContent(window.location.hash);
});

// Listener para cliques em links de navegação (para mudar a hash)
document.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (target && target.hash.startsWith('#')) {
        // Se o clique for em um link de navegação interna (hash)
        if (target.closest('.main-nav')) { // Apenas para links dentro do main-nav
            e.preventDefault(); // Previne o comportamento padrão (recarregar)
            window.location.hash = target.hash; // Muda a hash, que disparará o hashchange
        } else if (target.hash === '#home' || target.hash === '#projetos' || target.hash === '#cadastro') {
            // Permite outros links internos no conteúdo também atualizarem a hash
            e.preventDefault();
            window.location.hash = target.hash;
        }
    }
});


// Inicializa a aplicação ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    initializeMenu(); // Inicializa o menu hambúrguer do módulo menu.js

    // Carrega o conteúdo inicial baseado na hash ou na rota padrão
    if (window.location.hash) {
        loadContent(window.location.hash);
    } else {
        window.location.hash = '#home'; // Define a home como padrão ao iniciar
    }
});