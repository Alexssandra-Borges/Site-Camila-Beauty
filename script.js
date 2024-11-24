let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;

    index += step; // Ajusta o índice com base no botão clicado

    // Se o índice ficar fora dos limites, vai para o começo ou o fim
    if (index < 0) {
        index = totalSlides - 1;
    }
    if (index >= totalSlides) {
        index = 0;
    }

    // Move a exibição das imagens
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${index * 220}px)`; // Ajuste com base no tamanho da imagem e o espaçamento
}

