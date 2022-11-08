document.addEventListener('DOMContentLoaded', function () {
  const params = new URL(document.location).searchParams
  if (params.has('hl')) {
    const terms = params.get('hl').split(' ')
    terms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'ig')
      const elements = Array.from(document.querySelectorAll('main p, main li'))
      elements.forEach(element => {
        element.innerHTML = element.innerHTML.replace(regex, '<mark>$1</mark>')
      })
    })
  }
})
