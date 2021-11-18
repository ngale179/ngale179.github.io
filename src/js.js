$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
        $(".mgi_header").removeClass("mgi_header-scroll");
        $(".mgi_header-logo-img-scroll").attr('style','display: none;');
        $(".mgi_header-logo-img").attr('style','display: block;');

        $(".mgi_header-mobile").removeClass("mgi_header");
        $(".mgi_header-mb-logo-img-scroll").attr('style','display: none;');
        $(".mgi_header-mb-logo-img").attr('style','display: block;');
        $(".mgi_header-mb-icon, .mgi_header-mobile").attr('style','background: #000;');
    } else {
        $(".mgi_header").addClass("mgi_header-scroll");
        $(".mgi_header-logo-img-scroll").attr('style','display: block;');
        $(".mgi_header-logo-img").attr('style','display: none;');

        $(".mgi_header-mobile").addClass("mgi_header");
        $(".mgi_header-mb-logo-img").attr('style','display: none;');
        $(".mgi_header-mb-logo-img-scroll").attr('style','display: block;');
        $(".mgi_header-mb-icon, .mgi_header-mobile").attr('style','background: #fff;');
    }
});

function chooseSlide(unit,number){
    $('.mgi_slide_button a').removeClass('mgi_slide_dot');
    unit.addClass('mgi_slide_dot');
    $('.mgi_slide .mgi_slide_item').attr('style','display: none;');
    $('#mgi_slide_item_'+number).attr('style','display: block; animation: 3s linear 0s infinite alternate slideTop; animation-iteration-count: 1');
}
function displayMenu(){
    if($('.mgi_header-mb-menu').hasClass('mgi_header-mb-menu-choose')){
        $('.mgi_header-mb-menu').removeClass('mgi_header-mb-menu-choose');
    } else {
        $('.mgi_header-mb-menu').addClass('mgi_header-mb-menu-choose');
    }
}

