//Выделение активной вкладки и удаление класса активной дефолтной вкладки
const tabLink = document.querySelectorAll('.tab-link');
const tabsDefault = document.querySelector('.default-tabs');
const activeLink = (item)=> {
    item.addEventListener('click', ()=>{
        tabLink.forEach((item)=>{
            item.classList.remove('active-tab');
        })
        tabsDefault.classList.remove('default-tabs');
        item.classList.toggle('active-tab');
    })
}
tabLink.forEach(activeLink);

//Управление слайдером отзывов
const slider = document.querySelector('.comment-slide');
const nextBtn = document.querySelector('#comment-next');
const prevBtn = document.querySelector('#comment-prev');
let position = 0;
nextBtn.addEventListener('click', ()=>{
    position +=1134;
    if (position > 2268){
        position = 0
    }
    slider.style.left = -position + 'px';   
})
prevBtn.addEventListener('click', ()=>{
    position -=1134;
    if (position < 0){
        position = 2268;
    }
    slider.style.left = -position + 'px';
})