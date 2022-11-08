document.addEventListener('DOMContentLoaded', function () {
  const params = new URL(document.location).searchParams
  if (params.has('hl')) {
    const terms = params.get('hl').split(' ')
    terms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'ig')
      const main = document.querySelector('main')
      main.innerHTML = main.innerHTML.replace(regex, '<mark>$1</mark>')
    })
  }
})
