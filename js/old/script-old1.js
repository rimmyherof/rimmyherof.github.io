const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu');
})

AOS.init({
    duration: 1000
});

new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
    caption: function(trigger) {
        return trigger.querySelector('img').getAttribute('alt');
    }
});