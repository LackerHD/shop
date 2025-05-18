
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

let currentIndex = 0;

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function updateSlider() {
   slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
   currentIndex--;
   if (currentIndex < 0) {
       currentIndex = slideCount -1; // зацикливание назад
   }
   updateSlider();
});

nextBtn.addEventListener('click', () => {
   currentIndex++;
   if (currentIndex >= slideCount) {
       currentIndex = 0; // зацикливание вперед
   }
   updateSlider();

});
