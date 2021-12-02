function initSlider() {
    var slider = document.querySelector("#mgi_slide-text");
    var previousButton = document.querySelector(".mgi_prev");
    var nextButton = document.querySelector(".mgi_next");
    var slides = slider.querySelectorAll(".mgi_slide_item");
    var animationDuration = 700;
    var currentIndex = slider.dataset.showing * 1;
    var dot1 = document.querySelector(".mgi_slide_dot1");
    var dot2 = document.querySelector(".mgi_slide_dot2");
    var dot3 = document.querySelector(".mgi_slide_dot3");
    [].forEach.call(document.querySelectorAll(".mgi_slide_item"), function(elem, i){
        i = i+1;
        if(i === currentIndex) return;
        elem.style.transform = i < currentIndex ? "translateX(-100%)" : "translateX(100%)";
    });
    function onAnimationEnd() {
        clearTimeout(slider.isMoving);
        slider.isMoving = undefined;
    }
    function moveSlide(animationName, result = ""){
        var direction = 0;
        if(animationName === "left") direction = -1;
        if(animationName === "right") direction = 1;
        if (result === '') return function (){
            resultMoveSlide(direction,animationName);
        };
        resultMoveSlide(direction,animationName);
    }
    function resultMoveSlide(direction,animationName) {
        if(!isNaN(slider.isMoving)) return;
        slider.isMoving = setTimeout(onAnimationEnd, animationDuration + 50);
        var current = slider.dataset.showing * 1;
        var next = current + direction;
        if(next < 1) next = 3;
        if(next > slides.length) next = 1;
        var currentSlide = slider.querySelector(".mgi_slide_item-" + current);
        var nextSlide = slider.querySelector(".mgi_slide_item-" + next);
        currentSlide.style.animationName = "slide-out-" + animationName;
        nextSlide.style.animationName = "slide-in-from-" + animationName;
        slider.dataset.showing = next;
        [].forEach.call(document.querySelectorAll(".mgi_slide_button a"), function(elem, i){
            elem.classList.remove('mgi_slide_dot');
        });
        document.querySelector('.mgi_slide_dot'+next).classList.add("mgi_slide_dot");
    }
    previousButton.addEventListener("click", moveSlide("left"), false);
    nextButton.addEventListener("click", moveSlide("right"), false);
    slider.addEventListener("animationend", onAnimationEnd, true);
    function chooseSlide(){
        var number = this.getAttribute('aria-label');
        var id = 1;
        [].forEach.call(document.querySelectorAll(".mgi_slide_button a"), function(elem, i){
            if(elem.classList.contains('mgi_slide_dot')){
                id = elem.getAttribute('aria-label');
            }
            elem.classList.remove('mgi_slide_dot');
        });
        document.querySelector('.mgi_slide_dot'+number).classList.add("mgi_slide_dot");
        if(id > number){
            moveSlide("left","auto");
        } else {
            moveSlide("right","auto");
        }
    }
    dot1.addEventListener("click", chooseSlide, false);
    dot2.addEventListener("click", chooseSlide, false);
    dot3.addEventListener("click", chooseSlide, false);

    function loopMoveSlide(){
        setTimeout(function(){
            moveSlide("right","auto");
            loopMoveSlide();
        },5000);
    }
    loopMoveSlide();

    //Display contact slide bar
    function contact(){
        if(document.body.classList.contains('mgi_show-contact')){
            document.body.classList.remove('mgi_show-contact');
        } else {
            document.body.classList.add('mgi_show-contact');
        }
    }
    document.querySelector(".mgi_btn-show-contact").addEventListener("click", contact, false);
    document.querySelector(".mgi_btn-show-contact-mb").addEventListener("click", contact, false);
    document.querySelector(".mgi_btn-close-contact").addEventListener("click", contact, false);

    //Display setting
    function setting(){
        if(document.body.classList.contains('mgi_show-setting')){
            document.body.classList.remove('mgi_show-setting');
        } else {
            document.body.classList.add('mgi_show-setting');
        }
    }
    document.querySelector(".mgi_setting-btn").addEventListener("click", setting, false);

    //Display menu
    function displayMenu(){
        if(document.querySelector('.mgi_header-mb-menu').classList.contains('mgi_header-mb-menu-choose')){
            document.querySelector('.mgi_header-mb-menu').classList.remove('mgi_header-mb-menu-choose');
        } else {
            document.querySelector('.mgi_header-mb-menu').classList.add('mgi_header-mb-menu-choose');
        }
    }
    document.querySelector(".displayMenu").addEventListener("click", displayMenu, false);

    //Search keyword
    function searchKeyword(){
        if(document.querySelector('.mgi_search').classList.contains('mgi_search-block')){
            document.querySelector('.mgi_search').classList.remove('mgi_search-block');
        } else {
            document.querySelector('.mgi_search').classList.add('mgi_search-block');
        }

        [].forEach.call(document.querySelectorAll(".mgi_search-check"), function(elem, i){
            if(elem.classList.contains('mgi_search-check-hidden')){
                elem.classList.remove('mgi_search-check-hidden');
            } else {
                elem.classList.add('mgi_search-check-hidden');
            }
        });
    }
    document.querySelector(".searchKeyword").addEventListener("click", searchKeyword, false);
    document.querySelector(".searchKeywordBtn").addEventListener("click", searchKeyword, false);

    function scroll(e) {
        e.preventDefault();
        document.documentElement.scrollTop = 0;
    }
    document.querySelector("#mgi_top").addEventListener("click", scroll, false);

    function scrollWin(){
        var scroll = document.documentElement.scrollTop;
        if (scroll < 100) {
            document.querySelector('#mgi_top').classList.remove('mgi_top-show');
            document.querySelector(".mgi_header").classList.remove("mgi_bg-white");
            document.querySelector(".mgi_header > div").classList.remove("mgi_header-height-scroll");
            [].forEach.call(document.querySelectorAll(".mgi_header ul"), function(elem, i){
                elem.classList.remove("mgi_text-black");
            });
            [].forEach.call(document.querySelectorAll(".mgi_header-mobile div"), function(elem, i) {
                if (elem.classList.contains('mgi_text-black')) {
                    elem.classList.remove("mgi_text-black");
                    elem.classList.add("mgi_text-white");
                }
            });
            document.querySelector(".mgi_header-logo-img-scroll").style.display = "none";
            document.querySelector(".mgi_header-logo-img").style.display = "block";
            document.querySelector(".mgi_header-mb-icon").classList.remove("mgi_text-black");
            document.querySelector(".mgi_header-mb-icon").classList.add("mgi_text-white");
            document.querySelector(".mgi_header-mobile").classList.remove("mgi_bg-white");
            document.querySelector(".mgi_header-mb-logo-img-scroll").style.display = "none";
            document.querySelector(".mgi_header-mb-logo-img").style.display = "block";
            if(document.querySelector('.mgi_header-mb-menu').classList.contains('mgi_header-mb-menu-choose')){
                document.querySelector(".mgi_header-mb-menu-choose").classList.add("mgi_bg-black-cus");
                document.querySelector(".mgi_header-mb-menu-choose").classList.remove("mgi_bg-white-cus");
            }
        } else {
            document.querySelector('#mgi_top').classList.add('mgi_top-show');
            document.querySelector(".mgi_header").classList.add("mgi_bg-white");
            document.querySelector(".mgi_header > div").classList.add("mgi_header-height-scroll");
            [].forEach.call(document.querySelectorAll(".mgi_header ul"), function(elem, i){
                elem.classList.add("mgi_text-black");
            });
            [].forEach.call(document.querySelectorAll(".mgi_header-mobile div"), function(elem, i){
                if(elem.classList.contains('mgi_text-white')){
                    elem.classList.remove("mgi_text-white");
                    elem.classList.add("mgi_text-black");
                }
            });
            document.querySelector(".mgi_header-logo-img-scroll").style.display = "block";
            document.querySelector(".mgi_header-logo-img").style.display = "none";
            document.querySelector(".mgi_header-mb-icon").classList.remove("mgi_text-white");
            document.querySelector(".mgi_header-mb-icon").classList.add("mgi_text-black");
            document.querySelector(".mgi_header-mobile").classList.add("mgi_bg-white");
            document.querySelector(".mgi_header-mb-logo-img-scroll").style.display = "block";
            document.querySelector(".mgi_header-mb-logo-img").style.display = "none";
            if(document.querySelector('.mgi_header-mb-menu').classList.contains('mgi_header-mb-menu-choose')){
                document.querySelector(".mgi_header-mb-menu-choose").classList.add("mgi_bg-white-cus");
                document.querySelector(".mgi_header-mb-menu-choose").classList.remove("mgi_bg-black-cus");
            }
        }
    }

    scrollWin();
    window.addEventListener("scroll",function(){
        scrollWin();
    });

    function changeColor() {
        var color = this.getAttribute('aria-label');
        [].forEach.call(document.querySelectorAll(".mgi_bg-blue"), function(elem, i){
            elem.style.background = "#"+color;
        });
        [].forEach.call(document.querySelectorAll(".mgi_border-blue"), function(elem, i){
            elem.style.borderColor = "#"+color;
        });
        document.querySelector(".cart-count").style.background = "#"+color;
    }
    document.querySelector(".mgi_bg-color1").addEventListener("click", changeColor, false);
    document.querySelector(".mgi_bg-color2").addEventListener("click", changeColor, false);
    document.querySelector(".mgi_bg-color3").addEventListener("click", changeColor, false);
    document.querySelector(".mgi_bg-color4").addEventListener("click", changeColor, false);
    document.querySelector(".mgi_bg-color5").addEventListener("click", changeColor, false);
    document.querySelector(".mgi_bg-color6").addEventListener("click", changeColor, false);
    document.querySelector(".mgi_bg-color7").addEventListener("click", changeColor, false);
    document.querySelector(".mgi_bg-color8").addEventListener("click", changeColor, false);
    document.querySelector(".mgi_bg-color9").addEventListener("click", changeColor, false);
    document.querySelector(".mgi_bg-color10").addEventListener("click", changeColor, false);
    document.querySelector(".mgi_bg-color11").addEventListener("click", changeColor, false);
    document.querySelector(".mgi_bg-color12").addEventListener("click", changeColor, false);
}

window.onload = function() {
    initSlider();
};





