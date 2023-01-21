const regFade = document.querySelector('.registration-fade');
const registration = document.querySelector('.registration');
const signUp = document.querySelector('.sign-up');
const reg = document.querySelector('.reg');
const log = document.querySelector('.log');
const closeReg = document.querySelector('.close-reg');
const closeLog = document.querySelector('.close-log');
const signLink = document.querySelector('.sign-link');
const regLink = document.querySelector('.regist-link');

reg.addEventListener('click', ()=>{
    regFade.style.display = 'block';
    registration.style.display = 'flex';
})
closeReg.addEventListener('click', ()=>{
    regFade.style.display = 'none';
    registration.style.display = 'none';
})

log.addEventListener('click', ()=>{
    regFade.style.display = 'block';
    signUp.style.display = 'flex';
})
closeLog.addEventListener('click', ()=>{
    regFade.style.display = 'none';
    signUp.style.display = 'none';
})
signLink.addEventListener('click', ()=>{
    registration.style.display = 'none';
    signUp.style.display = 'flex';
})
regLink.addEventListener('click', ()=>{
    signUp.style.display = 'none';
    registration.style.display = 'flex';
})