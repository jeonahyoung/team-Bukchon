// assets/js/history.js

document.addEventListener('DOMContentLoaded', function() {
    new fullpage('#fullpage', {
        anchors: ['intro', 'section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'footer'],
        navigation: true,
        navigationPosition: 'right',
        fixedElements: '.header',
        scrollingSpeed: 1000,
        responsiveWidth: 768
    });
});