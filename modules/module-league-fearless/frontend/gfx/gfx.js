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
  initSlideShow(slides);
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
    initSlideShow(slides);
    obs.disconnect();}
  )

let slideshowStarted = false;
function initSlideShow(slides) {
  if (slideshowStarted) return; // ✅ Don't start twice
  slideshowStarted = true;
  
  const slideCount = slides.length
  if (slideCount === 0){
    return
  }
  if (slideCount === 1){
    slides[0].classList.add('solo');
    return
  }
  let currentIndex = 0;
  const delay = 15000;

  slides[currentIndex].classList.add('active');
  slides[currentIndex+1].classList.add('active');
  setInterval(() => {
    const current = slides[currentIndex];
    const nextIndex = (currentIndex + 1) % slideCount;
    const next = slides[nextIndex];

    // Slide out current
    current.classList.remove("active");
    current.classList.add("exit-up");

    // Reset current after animation
    setTimeout(() => {
      current.classList.remove("exit-up");
      current.style.top = "100%";
    }, 1000);

    // Slide in next
    setTimeout(() => {
      next.classList.add("active");
      next.style.top = "0";
    }, 100);

    currentIndex = nextIndex;
  }, delay);
}
