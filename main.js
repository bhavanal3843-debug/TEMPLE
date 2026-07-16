function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12 },
  )
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
}

function initNav() {
  const nav = document.getElementById('nav')
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60)
  window.addEventListener('scroll', onScroll)
  onScroll()
}

initNav()
initReveal()
