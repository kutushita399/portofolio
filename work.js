document.addEventListener('DOMContentLoaded', () => {
    
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    const videos = document.querySelectorAll('.carousel-container video');

    
    if (!carouselContainer || !prevButton || !nextButton || videos.length === 0) {
        return; 
    }

    let currentIndex = 0; 
    const totalVideos = videos.length;

    function showVideo(index) {
        
        
        if (index < 0) {
            currentIndex = totalVideos - 1; 
        } 
        else if (index >= totalVideos) {
            currentIndex = 0; 
        } 
        else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100; 
        
        carouselContainer.style.transform = `translateX(${offset}%)`;

        
        videos.forEach((video, i) => {
            if (i === currentIndex) {
                video.play(); 
            } else {
                video.pause(); 
                video.currentTime = 0; 
            }
        });
    }

    nextButton.addEventListener('click', () => {
        showVideo(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        showVideo(currentIndex - 1);
    });

    showVideo(0); 
});