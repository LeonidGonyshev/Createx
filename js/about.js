const slide = document.querySelectorAll('.slide');

const slideHover = (item)=>{
    item.addEventListener('mouseover', (event)=>{
        const links = item.querySelector('.slider-links');
        links.style.display = 'flex';
        item.addEventListener('mouseout', (event)=>{
            const links = item.querySelector('.slider-links');
            links.style.display = 'none';
        })
    })
    
}
slide.forEach(slideHover)

let offsetComment = 0;
let pagination = 1;
const btnPag1 = document.querySelectorAll('.pag');
const pag1 = document.querySelector('#pag-1');
const pag2 = document.querySelector('#pag-2');
const pag3 = document.querySelector('#pag-3');
const clPag = (item)=>{
   
    item.addEventListener('click', ()=>{
        btnPag1.forEach((item)=>{
            item.classList.remove('active-pagination');
        })
        item.classList.toggle('active-pagination');

    })
    
}
btnPag1.forEach(clPag);
const slideComment = document.querySelector('.comment-slide');
document.querySelector('#comment-next').addEventListener('click', ()=> {
    offsetComment += 1134;
    pagination += 1;
    if (pagination > 3){
        pagination = 1
    }
    pag1.classList.remove('active-pagination')
    pag2.classList.remove('active-pagination')
    pag3.classList.remove('active-pagination')
    if (pagination === 1){
        pag1.classList.add('active-pagination')
    };
    if (pagination === 2){
        pag2.classList.toggle('active-pagination')
    };
    if (pagination === 3){
        pag3.classList.toggle('active-pagination')
    };
    if (offsetComment > 2268){
        offsetComment = 0;
    }
    slideComment.style.left = -offsetComment + 'px';
})
document.querySelector('#comment-prev').addEventListener('click', ()=> {
    offsetComment -= 1134;
    pagination -= 1;
    if (pagination < 1){
        pagination = 3
    }
    pag1.classList.remove('active-pagination')
    pag2.classList.remove('active-pagination')
    pag3.classList.remove('active-pagination')
    if (pagination === 1){
        pag1.classList.add('active-pagination')
    };
    if (pagination === 2){
        pag2.classList.toggle('active-pagination')
    };
    if (pagination === 3){
        pag3.classList.toggle('active-pagination')
    };
    if (offsetComment < 0){
        offsetComment = 2268;
    }
    slideComment.style.left = -offsetComment + 'px';
})