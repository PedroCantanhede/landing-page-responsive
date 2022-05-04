// Função responsável por adicionar ou remover a classe 'scroll' na tag nav

function onScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
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