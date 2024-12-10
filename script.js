const menu = document.querySelector('.sidebar_menu')
const open_menu = document.querySelector('#open_menu')
const close_menu = document.querySelector('#close_menu')

open_menu.addEventListener('click', function(){
    menu.classList.add('active')
})

close_menu.addEventListener('click', function(){
    menu.classList.remove('active')
})