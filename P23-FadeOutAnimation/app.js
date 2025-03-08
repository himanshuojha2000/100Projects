let arrow= document.getElementById("arrow");

window.addEventListener('scroll',()=>{

    let position =window.scrollY;

    if (position > 10) {
        arrow.classList.add('fade-out');
        arrow.classList.remove('fade-in');
    } else {
        arrow.classList.add('fade-in');
        arrow.classList.remove('fade-out');
    }
})