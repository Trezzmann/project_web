
    const menuBtn = document.querySelector('.fa-bars')
    const closeBtn = document.querySelector('.fa-times')
    const menu = document.querySelector('.header__menu')
    menuBtn.onclick = () => {
        menu.style.top = "0px"
        menu.style.paddingTop = "50px"
        console.log('click')
    } 

    closeBtn.onclick = () => {
        menu.style.top = "-1000px"
        menu.style.padding = "20px"
    }
