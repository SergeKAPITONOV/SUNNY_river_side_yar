const galleryCarousel = document.getElementById('galleryCarousel');
const carouselClose = document.getElementById('carouselClose');
const carouselSlide = document.getElementById('carouselSlide');
const rowPhotoItem = document.querySelectorAll('.photo__item');

for(const photo of rowPhotoItem ){
  photo.addEventListener('click', ()=>{
    galleryCarousel.style.opacity = '1';
    galleryCarousel.style.visibility = 'visible';
    carouselSlide.style.transform = 'translateY(0)';  
  });
};

carouselClose.addEventListener('click', ()=>{
  galleryCarousel.style.opacity = '0';
  galleryCarousel.style.visibility ='hidden';
  carouselSlide.style.transform = 'translateX(-50%)';
  carouselSlide.style.transition = '.8s';
});



