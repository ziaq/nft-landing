gsap.registerPlugin(ScrollTrigger,ScrollSmoother) //вообще нужно для фреймфорков, чтобы все норм работало

//если не на мобиле, то применяем плавный скролл, потмоу что на мобилах может криво работать
if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: '1.5', //скорость плавной прокрутки
    effects: true //позволяет работать в этом проекте с data-speed
  })

  //анимация убирания непрозрачности для face-section
  gsap.fromTo('.face-section', { opacity: 1 }, { //первые фигурные скобки откуда двигается, вторые куда
    opacity: 0,
    scrollTrigger: {
      trigger: '.face-section',
      start: 'center', //когда face-section по центру экрана
      end: '820', //просто подобрал значение, хз че это, можно написать bottom, 
                  //тогда анимация будет когда проскроллится ближе к концу face-section
      scrub: true //face-section появится обратно при скролле обратно наверх
    }
  })

  let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item'); //собрали в массив все item с левой стороны
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