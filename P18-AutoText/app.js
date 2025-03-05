const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");


let words = [
    "Great", "Beautiful", "Diverse", "Vibrant", "Cultural", "Historic",
    "Spiritual", "Innovative", "Resilient", "Majestic", "Traditional",
    "Festive", "Glorious", "Sacred", "Peaceful", "United", "Colorful",
    "Magnificent", "Dynamic", "Incredible", "Enchanting", "Welcoming",
    "Timeless", "Artistic", "Inspirational", "Legendary", "Prosperous",
    "Harmonious", "Hospitable", "Serene", "Brave", "Joyful", "Heritage-Rich",
    "Unity in Diversity"
];

const typingDelay=200;

const erasingDelay=200;

const newLetterDelay=2000;
let index=0;
let charIndex=0;


document.addEventListener('DOMContentLoaded',()=>{
    if(words.length){
        setTimeout(type,newLetterDelay);
    }
});

function type(){
    if(charIndex < words[index].length){
        typedTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay);
    }
    else{
        setTimeout(erase,newLetterDelay);
    }
}


function erase(){

    if(charIndex>0){
        typedTextSpan.textContent=words[index].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else{
        index++;
        if(index>=words.length){
            index=0;
        }
        setTimeout(type,typingDelay + 1100);
    }
}
