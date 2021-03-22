const todo = document.querySelector('.menutodo')
const menu = document.querySelector('.menu-navegacion')


todo.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != todo){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})