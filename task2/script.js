const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');


galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    
    const computedStyle = window.getComputedStyle(item);
    const backgroundUrl = computedStyle.backgroundImage;
    
    
    const cleanUrl = backgroundUrl.slice(4, -1).replace(/"/g, "");
    
    lightboxImg.src = cleanUrl;
    lightbox.classList.add('show');
  });
});


closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('show');
});


lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove('show');
  }
});
