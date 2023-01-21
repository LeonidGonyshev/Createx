const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slide = document.querySelectorAll('.blog-slide');
let position = 0;

right.addEventListener('click', ()=>{
    position += 1230;
        if (position > 1230){
            position = 0;
        }
    slide.forEach((item)=>{
        item.style.left = -position + 'px'
    })
})
left.addEventListener('click', ()=>{
    position -= 1230;
        if (position < 0){
            position = 1230;
        }
    slide.forEach((item)=>{
        item.style.left = -position + 'px'
    })
})