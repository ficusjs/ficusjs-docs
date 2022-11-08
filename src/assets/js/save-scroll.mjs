document.addEventListener('DOMContentLoaded', function () {
  const scrollpos = window.localStorage.getItem('scrollpos')
  const lastUpdated = window.localStorage.getItem('scrollpos.lastUpdated')
  if (scrollpos && lastUpdated && Date.now() - lastUpdated < 1000 * 60 * 60 * 24) {
    const sidebar = document.querySelector('.fd-sidebar')
    if (scrollpos && sidebar) {
      sidebar.scrollTo(0, scrollpos)
    }
  }
})

window.onbeforeunload = function () {
  const sidebar = document.querySelector('.fd-sidebar')
  window.localStorage.setItem('scrollpos', sidebar.scrollTop)
  window.localStorage.setItem('scrollpos.lastUpdated', Date.now())
}
