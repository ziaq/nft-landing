gsap.registerPlugin(ScrollTrigger,ScrollSmoother) // Necessary for frameworks

// Check if there is mobile do not use smooth scroll
if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: '1.5', // Speed of smooth scroll
    effects: true // Allow to work in this project with data-speed
  })

  // Animation of removing opacity from face-section
  gsap.fromTo('.face-section', { opacity: 1 }, { // First curly brackets are from where it moving, second where going
    opacity: 0,
    scrollTrigger: {
      trigger: '.face-section',
      start: 'center', // When face-section on the center
      end: '820',  // If use value 'bottom' animation start near bottom of face-section
      scrub: true // Face-section will appear again when scroll up
    }
  })

  let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item'); // Make array using all left items
  itemsLeft.forEach(item => {
    gsap.fromTo(item, { x: -50, opacity: 0 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-150',
        scrub: true
      }
    })
  })

  let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item');
  itemsRight.forEach(item => {
    gsap.fromTo(item, { x: 50, opacity: 0 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-150',
        scrub: true
      }
    })
  })
}