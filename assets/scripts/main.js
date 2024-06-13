import Splide from '@splidejs/splide';

document.addEventListener( 'DOMContentLoaded', function() {

    const options = {
        drag   : 'free',
        snap   : true,
        perPage: 4,
        rewind : true,
        arrows : false,
        loop: false,
    }

    var splide = new Splide( '.splide', options );
    splide.mount();

    let prevButton = document.querySelector('.prev-slide');
    let nextButton = document.querySelector('.next-slide');


    function updateButtonStates() {
        prevButton.disabled = splide.index === 0;
        nextButton.disabled = splide.index === splide.length - 1;
    }

    // Initial state update
    updateButtonStates();

    // Custom button functionality
    prevButton.addEventListener('click', function () {
        splide.go('<');
    });

    nextButton.addEventListener('click', function () {
        splide.go('>');
    });

    // Listen to move events to update button states
    splide.on('move', function () {
        updateButtonStates();
    });

} );