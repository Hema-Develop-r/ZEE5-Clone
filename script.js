let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

document.querySelector('.carousel-next').addEventListener('click', nextSlide);
document.querySelector('.carousel-prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);
showSlide(currentSlide);

function handleSearch(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value;
    alert(`Searching for: ${searchTerm}`);
}

function buyPlan() {
    alert('Redirecting to Buy Plan page.');
}
