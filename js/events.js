const list = document.querySelector('#list-icon');
const grid = document.querySelector('#grid-icon');
const structure = document.querySelector('.event-list');
const item = document.querySelectorAll('.event-item');
const buttons = document.querySelectorAll('.hero-btn');
const title = document.querySelectorAll('.event-name');

grid.addEventListener('click', ()=>{
    structure.style.flexDirection = 'row'
    structure.style.flexWrap = 'wrap'
    item.forEach((item)=>{
        item.classList.add('grid-item')
    })
    buttons.forEach((item)=>{
        item.classList.add('grid-btn');
    })
    title.forEach((item)=>{
        item.classList.add('grid-name');
    })
})

list.addEventListener('click', ()=>{
    structure.style.flexDirection = 'column'
    item.forEach((item)=>{
        item.classList.remove('grid-item')
    })
    buttons.forEach((item)=>{
        item.classList.remove('grid-btn');
    })
    title.forEach((item)=>{
        item.classList.remove('grid-name');
    })
})