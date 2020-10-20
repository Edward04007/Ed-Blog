function menu( item, item1, item2,){

    document.querySelector('.icon1').addEventListener('click', () =>{    
        item.classList.toggle('mostrar')
        item1.classList.remove('mostrar')
        item2.classList.remove('mostrar')
    })

    document.querySelector('.icon2').addEventListener('click', () =>{    
        item1.classList.toggle('mostrar')
        item.classList.remove('mostrar')
        item2.classList.remove('mostrar')
    })

    document.querySelector('.icon3').addEventListener('click', () =>{    
        item2.classList.toggle('mostrar')
        item1.classList.remove('mostrar')
        item.classList.remove('mostrar')
    })


}   

const item = document.querySelector('.vida')
const item1 = document.querySelector('.site')
const item2 = document.querySelector('.escola')
menu(item, item1, item2)