const closee = document.getElementById("close");
const opeen = document.getElementById("open");
const modal = document.getElementById("modal");

opeen.addEventListener("click",()=> modal.classList.add("show-modal"));
closee.addEventListener("click", ()=> modal.classList.remove("show-modal"));

window.addEventListener("click" , e=>{
    e.target === modal ? modal.classList.remove('show-modal') : false;
})