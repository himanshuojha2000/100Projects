//progress
const progress= document.getElementById("progress");
//prev
const prevBtn= document.getElementById("prev");
//nnextbtn
const nextbtn=document.getElementById("next");
//circlbtn
const circles=document.querySelector(".circle");


let activeIndex=1;

nextbtn.addEventListener('click',()=>{
    activeIndex++;
    if(activeIndex>circles.length){
        activeIndex=circles.length;
    }
    updateUI;
});


prevbtn.addEventListener('click',()=>{
    activeIndex--;
    if(activeIndex<1){
        activeIndex=1;
    }
    updateUI;
});

function updateUI(){
circles.forEach((circles,index)=>{
   if(index<activeIndex)
    circles.classList.add("active"); 
   else circles.classList.remove("active");
});

const actives=document.querySelector(".active");

progress.style.width=((actives.length-1)/ (circles.length -1))*100 + '%';

if(activeIndex === 1){
    prevBtn.disabled =true;
}

else if(activeIndex === circles.length){
    nextbtn.disabled=true;
}
else{
    prevBtn.disabled =false;
    prevBtn.disabled =false;
    
}
}