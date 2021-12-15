$(function() {
    $('.btn-menu').click(function() {
        if($('.main-nav').hasClass('open-menu')) {
            $('.main-nav').removeClass('open-menu');
            $('.btn-menu').html('<i class="fas fa-bars"></i>');
        } else {
            $('.main-nav').addClass('open-menu');
            $('.btn-menu').html('<i class="fas fa-times"></i>');
        }
    });
});

AOS.init({
    duration: 1000
});

new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
    caption: function(trigger) {
        return trigger.querySelector('img').getAttribute('alt');
    }
});