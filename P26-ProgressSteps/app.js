//progress
const progress= document.getElementById("progress");
//prev
const prevBtn= document.getElementById("prev");
//nnextbtn
const nextBtn=document.getElementById("next");
//circlbtn
const circles=document.querySelectorAll(".circle");


let activeIndex=1;

nextBtn.addEventListener('click',()=>{
    activeIndex++;
    if(activeIndex>circles.length){
        activeIndex=circles.length;
    }
    updateUI();
});


prevBtn.addEventListener('click',()=>{
    activeIndex--;
    if(activeIndex<1){
        activeIndex=1;
    }
    updateUI();
});

function updateUI(){
circles.forEach((circles,index)=>{
   if(index<activeIndex)
    circles.classList.add("active"); 
   else circles.classList.remove("active");
});

const actives=document.querySelectorAll(".active");

progress.style.width=((actives.length-1)/ (circles.length -1))*100 + '%';

if(activeIndex === 1){
    prevBtn.disabled =true;
}

else if(activeIndex === circles.length){
    nextBtn.disabled=true;
}
else{
    nextBtn.disabled =false;
    prevBtn.disabled =false;
    
}
}