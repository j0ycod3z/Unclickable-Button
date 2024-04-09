const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesbtn = document.querySelector('.yes-btn');
const nobtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = nobtn.getBoundingClientRect();

yesbtn.addEventListener('click', ()=>{
    question.innerHTML = "Set na! Time and place"
});


nobtn.addEventListener('mouseover', () => {
    moveNoBtn();
 });
 
 nobtn.addEventListener('click', () => {
    moveNoBtn();
 });
 
 function moveNoBtn() {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width + 1));
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height + 1));
 
    nobtn.style.left = i + 'px';
    nobtn.style.top = j + 'px';
 }