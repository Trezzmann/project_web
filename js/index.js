window.onload = ()=>{

    

    const homeText = document.querySelector('.home__text')
    const whatWeHave = document.querySelector('.whatWeHave')
    const ParentwhatWeDo = document.querySelector(".parent-whatWeDo")
    const whatWeDo = document.querySelector(".whatWeDo")

    setTimeout(()=>{
        // Animation for home text

        homeText.style.opacity = "1";
        homeText.style.transform = "scale(1)"; 

        // Animation for what we have bloc

        whatWeHave.style.opacity = "1";
        whatWeHave.style.transform = "translateX(0)"
        

    },400)

    window.onscroll = () => {

        // animation for what we do block
        let blocHeigth = ParentwhatWeDo.getBoundingClientRect().top
        let winHeight = window.innerHeight/4
        if (blocHeigth < winHeight) {
            
            whatWeDo.style.opacity = "1";
            whatWeDo.style.transform = "translateX(0)"
        }
    }     

}
