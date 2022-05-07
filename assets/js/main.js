window.addEventListener('scroll', onScroll);
onScroll();

function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();

    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

// Função responsável por ativar o menu quando estiver na seção

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + (innerHeight / 2);

    // verficar se a seção passou da linha alvo
    const sectionTop = section.offsetTop; // o topo da seção
    const sectionHeight = section.offsetHeight; // a altura da seção
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop; // o topo da seção chegou ou ultrapassou a linha alvo

    // verificar se a base está abaixo da linha alvo
    const sectionEndsAt = sectionTop + sectionHeight; // onde a seção termina
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine; // final da seção passou da linha alvo

    // limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;
    
    const sectionId = section.getAttribute('id');
    const menuElement = document
    .querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active');
    if (sectionBoundaries) {
        menuElement.classList.add('active');
    } 
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