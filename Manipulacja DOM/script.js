const gallery = document.getElementById('obrazy');
const allImages = document.querySelectorAll('.media-card img');
const mainTitle = document.querySelector('.header-overlay h1');
const lightbox = document.getElementById('img1');
const lightboxImg = lightbox.querySelector('img');

mainTitle.textContent = "Galeria Interaktywna";

allImages.forEach((img, index) => {
    img.setAttribute('data-index', index);
    img.setAttribute('data-info', img.alt || "Zdjęcie " + index);
    
    img.addEventListener('mouseenter', function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "0.3s";
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = "scale(1)";
    });
});

let currentIndex = 0;

const caption = document.createElement('p');
caption.id = "lightbox-caption";
caption.style.color = "white";
caption.style.marginTop = "20px";
lightbox.appendChild(caption);

const nextBtn = document.createElement('button');
nextBtn.innerHTML = "&#10095;";
nextBtn.style.cssText = "position:fixed; right:20px; font-size:40px; color:white; background:none; border:none; cursor:pointer;";
lightbox.appendChild(nextBtn);

const prevBtn = document.createElement('button');
prevBtn.innerHTML = "&#10094;";
prevBtn.style.cssText = "position:fixed; left:20px; font-size:40px; color:white; background:none; border:none; cursor:pointer;";
lightbox.appendChild(prevBtn);

function showImage(index) {
    if (index >= allImages.length) index = 0;
    if (index < 0) index = allImages.length - 1;
    
    currentIndex = index;
    const src = allImages[currentIndex].src;
    const text = allImages[currentIndex].getAttribute('data-info');
    
    lightboxImg.src = src;
    caption.textContent = text;
}

gallery.addEventListener('click', function(e) {
    const card = e.target.closest('.media-card');
    if (card) {
        const img = card.querySelector('img');
        const index = parseInt(img.getAttribute('data-index'));
        showImage(index);
        lightbox.style.display = "flex";
    }
});

lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.style.display = "none";
    }
});

nextBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    showImage(currentIndex + 1);
});

prevBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    showImage(currentIndex - 1);
});

document.addEventListener('keydown', function(e) {
    if (lightbox.style.display === "flex") {
        if (e.key === "Escape") lightbox.style.display = "none";
        if (e.key === "ArrowRight") showImage(currentIndex + 1);
        if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    }
});

/*
1. Wybieranie: getElementById (kontener), querySelectorAll (obrazy), querySelector (tytuł), closest (karta).
2. Modyfikacja: textContent (tytuł/opisy), style inline (transformacje), set/getAttribute (data-index).
3. Lightbox: Otwieranie przez click, zamykanie (X, tło, Esc), nawigacja (przyciski, strzałki klawiatury).
4. Dane: Użyto atrybutów data-* do indeksowania obrazów i przechowywania opisów.
*/