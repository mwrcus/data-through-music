//spotify authentication
const clientId = '10443275a608424aa16dabe7558559db';
const redirectUri = 'https://mwrcus.github.io/data-through-music/callback.html';
const authorizeUrl = 'https://accounts.spotify.com/authorize';
const scope = 'user-read-private user-read-email';

function authorizeUser() {
    const authorizationUrl = `${authorizeUrl}?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;

    console.log('Authorization URL:', authorizationUrl);

    window.location.href = authorizationUrl;
}


document.getElementById('authorizeButton').addEventListener('click', authorizeUser);



//title glitch
const titleElement = document.querySelector('.title h1');

function getRandomCharacter() {
    const characters = '!@#$%^&*?';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
}

function generateRandomText(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += getRandomCharacter();
    }
    return result;
}

function glitchText() {
    const originalText = titleElement.textContent;
    const duration = 400; 
    const interval = 4000;

    let startTime;

    function animate() {
        const currentTime = Date.now() - startTime;
        const progress = currentTime / duration;

        if (progress < 1) {
            const randomText = generateRandomText(originalText.length);
            titleElement.textContent = randomText;
            requestAnimationFrame(animate);
        } else {
            titleElement.textContent = originalText;
        }
    }

    function startAnimation() {
        startTime = Date.now();
        animate();
    }

    setInterval(startAnimation, duration + interval);
}

glitchText();



//animation library

AOS.init({

  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 500, // values from 0 to 3000, with step 50ms
  duration: 3000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
