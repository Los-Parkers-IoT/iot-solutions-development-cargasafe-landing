// const toggleMobileMenu = () => {
//   const navMenu = document.querySelector('.nav-menu')
//   navMenu.classList.toggle('active')
// }

const handleFixedHeaderOnScroll = () => {
  const headerEl = document.querySelector('#header')
  const heroEl = document.querySelector('#hero')
  if (!headerEl || !heroEl) {
    console.warn('Header element not found')
    return
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        headerEl.classList.add('fixed-header')
      } else {
        headerEl.classList.remove('fixed-header')
      }

      console.log('IntersectionObserver entry:', entry)
    },
    {
      root: null,
      threshold: 0.3,
    }
  )
  observer.observe(heroEl)
}

const init = function () {
  handleFixedHeaderOnScroll()
}

document.addEventListener('DOMContentLoaded', init)
