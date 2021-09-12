const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
  slide.addEventListener('mouseenter', () => {
    //Вместо 'click', сделал 'mouseenter'
    clearActiveClasses()

    slide.classList.add('active')
  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}
