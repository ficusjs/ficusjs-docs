document.addEventListener('DOMContentLoaded', function () {
  const scrollpos = window.localStorage.getItem('scrollpos')
  const sidebar = document.querySelector('.fd-sidebar')
  if (scrollpos && sidebar) {
    sidebar.scrollTo(0, scrollpos)
  }
})

window.onbeforeunload = function () {
  const sidebar = document.querySelector('.fd-sidebar')
  window.localStorage.setItem('scrollpos', sidebar.scrollTop)
}
