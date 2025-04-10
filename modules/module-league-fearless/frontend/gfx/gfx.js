const container = document.querySelector('.container')

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

function setState(e) {
  const state = e.state

  if (state.length <= 0) {
    return
  }

  const chunks = chunk(state, 10)

  chunks.forEach((chunk, i) => {
    const slide = document.createElement('div')
    slide.classList.add("slide")
    slide.id = `slide_${i}`


    const images = document.createElement('div')
    images.classList.add('images')

    chunk.forEach((element) => {
      const img = document.createElement('img')
      img.src = element.tileURL
      images.append(img)
    })

    slide.append(images)

    const head = document.createElement('h1')
    head.innerText = `GAME ${i + 1}`
    slide.append(head)

    container.append(slide)
  })

  const slides = document.querySelectorAll(".slide");
  if (slides.length > 0){
    if (slides.length === 1){
      slides[0].add('active')
    } else {
      initSlideShow(slides);
    }
  };
}

LPTE.onready(async () => {
  const res = await LPTE.request({
    meta: {
      namespace: 'module-league-fearless',
      type: 'request',
      version: 1
    }
  })

  console.log(res)

  setState(res)
})

const observer = new MutationObserver((mutations, obs) => {
  const slides = document.querySelectorAll(".slide");
  if (slides.length > 0){
    initSlideShow(slides);
    obs.disconnect();
  }
})

let slideshowStarted = false;
function initSlideShow(slides) {
  if (slideshowStarted) return; // ✅ Don't start twice
  slideshowStarted = true;

  let currentIndex = 0;
  const delay = 15000;

  slides[0].classList.add('active');
  function showNextSlide() {
    const currentSlide = slides[currentIndex];
    currentSlide.classList.remove('active');
    currentSlide.classList.add('exit-up');

    // Préparer le slide suivant
    currentIndex = (currentIndex + 1) % slides.length;
    const nextSlide = slides[currentIndex];

    // Réinitialiser la position de l’ancien après transition
    setTimeout(() => {
      currentSlide.classList.remove('exit-up');
      currentSlide.style.top = '100%';
    }, 1500);

    // Afficher le nouveau slide
    setTimeout(() => {
      nextSlide.classList.add('active');
      nextSlide.style.top = '0';
    }, 10);
  }

// Initialisation
  setInterval(showNextSlide, delay);
}
