
//MENU BURGER DA PÁGINA HOME
const menuBurgerHome = document.getElementById('menu-burger-home')
const hrsHome = document.querySelectorAll('.menu_burger_home hr')
const nav = document.querySelector('.nav_mobile')
const homeContainer = document.getElementById('home-id')

menuBurgerHome.addEventListener('click', () =>{

    if(menuBurgerHome.style.justifyContent == 'space-around' || menuBurgerHome.style.justifyContent == ''){

        nav.style.right = '0'
        nav.style.width = '50%'

        // animação do X
        menuBurgerHome.style.justifyContent = 'center'
    
        hrsHome[0].style.transform = 'rotate(45deg) translateY(2px) translateX(0px)'
        hrsHome[1].style.transform = 'rotate(-45deg) translateY(-2px) translateX(0px)'
        hrsHome[2].style.backgroundColor = 'transparent'
    }else{

        nav.style.right = '-50px'
        nav.style.width = '0%'

        //animação do X
        menuBurgerHome.style.justifyContent = 'space-around'
        
        hrsHome[0].style.transform = 'rotate(0deg)'
        hrsHome[1].style.transform = 'rotate(0deg)'
        hrsHome[2].style.backgroundColor = 'black'
    }
})


homeContainer.addEventListener("click", ()=>{
    if(nav.style.width == '-50%'){
        // debugger
        nav.style.right = '-50px'
        nav.style.width = '0%'

        //animação do X
        menuBurgerHome.style.justifyContent = 'space-around'
        
        hrsHome[0].style.transform = 'rotate(0deg)'
        hrsHome[1].style.transform = 'rotate(0deg)'
        hrsHome[2].style.backgroundColor = 'black'
    }
})

