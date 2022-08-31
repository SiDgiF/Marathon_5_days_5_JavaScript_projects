const slides = document.querySelectorAll('.slide');


for (const slide of slides) {
   slide.addEventListener('click', () => {
      clearActiveClasses()
      slide.classList.add('active');
   }) // 'click' - классический слушатель; classList.add - изменение класса
}

function clearActiveClasses() {
   slides.forEach((slide) => {
      slide.classList.remove('active')

   })
}