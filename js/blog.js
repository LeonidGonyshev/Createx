const tabLink = document.querySelectorAll('.blog-tab-link');
const deault = document.querySelector('.def-tab');
const activeTab = (item)=>{
    item.addEventListener('click', ()=>{
        deault.classList.remove('def-tab');
        tabLink.forEach((elem)=>{
            elem.classList.remove('tab-active');
        })
        item.classList.add('tab-active');
    })
}
tabLink.forEach(activeTab);