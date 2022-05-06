window.addEventListener('scroll', onScroll);
onScroll();

function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();
}

// Função responsável por adicionar ou remover a classe 'scroll' na tag nav

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
    }
}

// Função de scroll responsável por voltar para o topo

function showBackToTopButtonOnScroll() {
    if (scrollY > 500) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

// Função responsável por abrir o menu ao clicar no botão

function openMenu() {
    document.body.classList.add('menu-expanded');
}

// Função responsável por fechar o menu ao clicar no botão

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

// ScrollReveal

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home,
           #home img,
           #home .stats,
           #services,
           #services header,
           #services .card,
           #about,
           #about header,
           #about .content`)