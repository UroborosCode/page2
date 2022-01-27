$(function () {
    let coll = document.getElementsByClassName('vacancy__btn-box');
    for(let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click',function(){
            this.classList.toggle('vacancy__btn-box-active');
            let content = this.nextElementSibling;
            if(content.style.display){
                content.style.display = null;
            } else {
                content.style.display = content.style.display + "block";
            }
        })
    }
    

    $('.header__media-menu-btn-close').on('click', function (){
        $('.header__media-menu').addClass('header__media-menu-close')
    })
    $('.header__nav-media-btn').on('click', function (){
        $('.header__media-menu').removeClass('header__media-menu-close')
    })
})