const nav = document.querySelector(".nav");
window.addEventListener("scroll",()=>{

    if(window.scrollY> nav.offsetHeight +150){
        nav.classList.add("move")
    }else{
        nav.classList.remove("move")
    }
})