// window.addEventListener('scroll', onScroll)

// onScroll()
// function onScroll() {
//   showNavOnScroll()
//   showBackToTopButtonOnScroll()

//   activateMenuAtCurrentSection(home)
//   activateMenuAtCurrentSection(services)
//   activateMenuAtCurrentSection(about)
//   activateMenuAtCurrentSection(contact)

// }

// function activateMenuAtCurrentSection(section) {
//   const targetLine = scrollY + innerHeight / 2

//   // verificar se a seção passou da linha
//   // quais dados vou precisar?

//   // o topo da section
//   const sectionTop = section.offsetTop


//   // a altura da section
//   const sectionHeight = section.offsetHeight

//   // o topo da section chegou ou ultrapassou a linha alto
//   const sectionTopReachOrTargetLine = targetLine >= sectionTop

//   console.log('o topo da section chegou ou passou da linha?', sectionTopReachOrTargetLine)

//   // verificar se a base está abaixo da linha alvo
//   // quais dados vou precisar?


//   // a section termina onde?
//   const sectionEndsAt = sectionTop + sectionHeight


//   // o final da section passou da linha alvo
//   const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

//   // limites da section 
//   const sectionBoundaries = sectionTopReachOrTargetLine && !sectionEndPassedTargetLine

//   const sectionId = section.getAttribute('id')
//   const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


//   menuElement.classList.remove('active')
//   if(sectionBoundaries){
//     menuElement.classList.add('active')

//   }


// }

// function showNavOnScroll() {
//   if (scrollY > 0) {
//     navigation.classList.add('scroll')
//   } else {
//     navigation.classList.remove('scroll')
//   }
// }

// function showBackToTopButtonOnScroll() {
//   if (scrollY > 550) {
//     backToTopButton.classList.add('show')
//   } else {
//     backToTopButton.classList.remove('show')
//   }
// }

// function openMenu() {
//   document.body.classList.add('menu-expanded')
// }

// function closeMenu() {
//   document.body.classList.remove('menu-expanded')
// }

// ScrollReveal({
//   origin: 'top',
//   distance: '30px',
//   duration: 700
// }).reveal(`
// #home, 
// #home img, 
// #home .stats, 
// #services, 
// #services header,
// #services .cards
// #about,
// #about header,

// about .content`)
