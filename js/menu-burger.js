
//MENU BURGER PARA AS PÁGINAS DE CADA PRODUTO:

const menuBurger = document.getElementById('menu-burger-id')
const openMenu = document.getElementById('open-menu-id')
const openMenuDiv = document.querySelectorAll('.open_menu div')
const hrs = document.querySelectorAll('.hr_burger')


menuBurger.addEventListener('click', () =>{
    if(openMenuDiv[0].style.display == 'none' || openMenuDiv[0].style.display == ''){
        
        openMenuDiv.forEach(e => {
            e.style.display = 'block'
        });

        openMenu.style.width = '30%'
        openMenu.style.left = '0'


        //animação do X
        menuBurger.style.justifyContent = 'center'

        hrs[0].style.transform = 'rotate(45deg) translateY(2px) translateX(0px)'
        hrs[1].style.transform = 'rotate(-45deg) translateY(-2px) translateX(0px)'
        hrs[2].style.backgroundColor = 'transparent'
    }else{

        openMenuDiv.forEach(e => {
            e.style.display = 'none'
        });

        openMenu.style.width = '0%'
        openMenu.style.left = '-50px'

        //animação do X
        menuBurger.style.justifyContent = 'space-around'
        
        hrs[0].style.transform = 'rotate(0deg)'
        hrs[1].style.transform = 'rotate(0deg)'
        hrs[2].style.backgroundColor = 'black'
    }
})


