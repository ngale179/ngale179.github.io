$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
        $(".mgi_header").removeClass("mgi_bg-white");
        $(".mgi_header ul").removeClass("mgi_text-black");
        $(".mgi_header-logo-img-scroll").attr('style','display: none;');
        $(".mgi_header-logo-img").attr('style','display: block;');
        $(".mgi_header-mb-icon").removeClass("mgi_text-black");
        $(".mgi_header-mb-icon").addClass("mgi_text-white");
        $(".mgi_header-mobile").removeClass("mgi_bg-white");
        $(".mgi_header-mb-logo-img-scroll").attr('style','display: none;');
        $(".mgi_header-mb-logo-img").attr('style','display: block;');
        $(".mgi_header-mb-menu-choose").addClass("mgi_bg-black-cus");
        $(".mgi_header-mb-menu-choose").removeClass("mgi_bg-white-cus");
    } else {
        $(".mgi_header").addClass("mgi_bg-white");
        $(".mgi_header ul").addClass("mgi_text-black");
        $(".mgi_header-logo-img-scroll").attr('style','display: block;');
        $(".mgi_header-logo-img").attr('style','display: none;');
        $(".mgi_header-mb-icon").removeClass("mgi_text-white");
        $(".mgi_header-mb-icon").addClass("mgi_text-black");
        $(".mgi_header-mobile").addClass("mgi_bg-white");
        $(".mgi_header-mb-menu-choose").addClass("mgi_bg-white-cus");
        $(".mgi_header-mb-menu-choose").removeClass("mgi_bg-black-cus");
        $(".mgi_header-mb-logo-img-scroll").attr('style','display: block;');
        $(".mgi_header-mb-logo-img").attr('style','display: none;');
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

