const elements = document.querySelectorAll('[data-anima]')
console.log(window.innerHeight)

function handleScroll(){
    const windowTop = window.pageYOffset + window.innerHeight
    elements.forEach((item) => {
        if(windowTop > item.offsetTop){
            item.classList.add('animate')
            console.log(windowTop)
        }
    })
}

window.addEventListener('scroll', function(){
    handleScroll();
})