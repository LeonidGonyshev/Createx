const tabsLink = document.querySelectorAll('.talk-links');
const openTabs = document.querySelectorAll('.tab-contai');
const activeTab = (item)=>{
    item.addEventListener('click', (event)=>{
        tabsLink.forEach((item)=>{
            item.style.backgroundImage = 'url(../img/Plus.svg)' 
        })
        item.style.backgroundImage = 'url(../img/minus.svg)'
    })
}
const openTab = (item)=>{
    const text = item.querySelector('.tab-info');
    item.addEventListener('click', (event)=>{
        openTabs.forEach((item)=>{
            const blocText = item.querySelector('.tab-info');
            blocText.style.display = 'none';
        })
        text.style.display = 'block';
    })
}
tabsLink.forEach(activeTab)
openTabs.forEach(openTab)

const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');
const container = document.querySelectorAll('.slide-item')
let position = 0;
rightBtn.addEventListener('click', ()=>{
    position += 1230;
    if (position > 1230){
        position = 0;
    }
    container.forEach((item)=>{
        item.style.left = -position + 'px';
    })
})
leftBtn.addEventListener('click', ()=>{
    position -= 1230;
    if (position < 0){
        position = 1230;
    }
    container.forEach((item)=>{
        item.style.left = -position + 'px';
    })
})
