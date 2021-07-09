const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const track = document.getElementById('track');
const slickList = document.getElementById('slick-list');
const slick = document.querySelectorAll('.slick');

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);
if (window.innerWidth <= 720) {
    function Move(value) {
        const trackWidth = track.offsetWidth - 380;
        const listWidth = slickList.offsetWidth;
    
        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
    
        if (leftPosition < (trackWidth - listWidth) && value == 2) {
            track.style.left = `${-1 * (leftPosition + slickWidth)
        }px`;
        }else if(leftPosition > 0 && value == 1){
            track.style.left =`${-1 * (leftPosition - slickWidth)}px`;
        }
    }
}else{
    function Move(value) {
        const trackWidth = track.offsetWidth;
        const listWidth = slickList.offsetWidth;
    
        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
    
        if (leftPosition < (trackWidth - listWidth) && value == 2) {
            track.style.left = `${-1 * (leftPosition + slickWidth)
        }px`;
        }else if(leftPosition > 0 && value == 1){
            track.style.left =`${-1 * (leftPosition - slickWidth)}px`;
        }
    }
}

// Menu

window.addEventListener('DOMContentLoaded', () => {
    const buttonMenu = document.querySelector('.btn-menu');
    const menuList = document.querySelector('.header__nav--list');
    buttonMenu.addEventListener('click', () => {
        menuList.classList.toggle('show');
    })
    menuList.addEventListener('click', () => {
        menuList.classList.toggle('show');
    })
});
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header__nav');
    header.classList.add('header__scroll');
    if (window.scrollY == 0) {
        header.classList.remove('header__scroll')
    }
})