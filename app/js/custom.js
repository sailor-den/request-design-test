document.addEventListener('DOMContentLoaded', function (){

    document.querySelector('.icon-menu').addEventListener('click', function(){
        document.querySelector('.menu__body').classList.toggle('menu__body_active')
    });
    
    document.querySelector('.icon-menu').addEventListener('click', function (){
        this.classList.toggle('icon-menu_active')
    })
    
})