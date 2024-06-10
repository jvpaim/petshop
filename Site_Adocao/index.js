document.addEventListener('DOMContentLoaded', function() {
    const menuHamburger = document.getElementById('menu-hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    menuHamburger.addEventListener('click', function() {
        if (mobileNav.style.display === 'flex') {
            mobileNav.style.display = 'none';
        } else {
            mobileNav.style.display = 'flex';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const setaEsquerda = document.getElementById('seta_esquerda');
    const setaDireita = document.getElementById('seta_direita');
    const cardContainer = document.querySelector('.card__container');
    let scrollAmount = 0;
    const cardWidth = document.querySelector('.card__cachorros').offsetWidth;
    const visibleCards = 3;
    const maxScroll = (cardContainer.childElementCount - visibleCards) * cardWidth;

    setaDireita.addEventListener('click', function() {
        if (scrollAmount < maxScroll) {
            scrollAmount += cardWidth;
            cardContainer.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    setaEsquerda.addEventListener('click', function() {
        if (scrollAmount > 0) {
            scrollAmount -= cardWidth;
            cardContainer.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });
});
