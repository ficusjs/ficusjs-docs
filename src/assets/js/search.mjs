import { createCustomElement, withLocalState, use } from './lib/ficus.mjs'
import lunr from './lib/lunr.mjs'
import { html, renderer } from './lib/uhtml.mjs'
import { module as formModule } from './lib/form.mjs'
import { module as inputModule } from './lib/form-input.mjs'
use(formModule, { renderer, html })
use(inputModule, { renderer, html })

createCustomElement(
  'docs-search',
  withLocalState({
    renderer,
    state () {
      return {
        search: {
          loaded: false,
          error: null,
          query: null,
          results: []
        }
      }
    },
    mounted () {
      window._ficusDocsSearchResults = window._ficusDocsSearchResults || {
        docs: null,
        idx: null
      }
      Promise.all([
        window.fetch('/assets/search-docs.json').then(res => res.json()),
        window.fetch('/assets/search-index.json').then(res => res.json())
      ])
        .then(data => {
          window._ficusDocsSearchResults.docs = data[0]
          window._ficusDocsSearchResults.idx = lunr.Index.load(data[1])
          this.state.search = { loaded: true, query: null, error: null, results: [] }
          setTimeout(() => {
            const query = this.querySelector('input[type="search"]')
            if (query) query.focus()
          }, 300)
        })
        .catch(e => {
          this.state.search = { loaded: true, query: null, error: e, results: [] }
        })
    },
    onSubmit (e) {
      e.preventDefault()
      const query = this.querySelector('input[type="search"]')
      if (query.value.length < 1) {
        this.state.search = { ...this.state.search, query: query.value, error: null, results: [] }
      } else {
        const queryText = query.value
        const sr = window._ficusDocsSearchResults.idx.query(function (q) {
          q.term(queryText, { usePipeline: true, boost: 100 })
          q.term(queryText + '*', { usePipeline: false, boost: 10 })
          q.term(queryText, { usePipeline: false, editDistance: 1 })
        })
        const results = []
        sr.forEach((result) => {
          results.push(window._ficusDocsSearchResults.docs[result.ref])
        })
        this.state.search = { ...this.state.search, query: queryText, error: null, results }
      }
    },
    render () {
      if (!this.state.search.loaded) {
        return html`<div class="loading">Loading...</div>`
      }

      if (this.state.search.error) {
        return html`<div class="error">An error occurred</div>`
      }

      return html`
        <fc-form onsubmit="${this.onSubmit}">
          <fc-form-input type="search" name="query" placeholder="Search..."></fc-form-input>
        </fc-form>
        <section>
          ${this.state.search.results.map(r => html`
            <article class="[ fu-spacing-mt-07 ]">
              <a href="${r.url}"><h3>${r.title}</h3></a>
              <p>${r.excerpt}</p>
            </article>
          `)}
        </section>
      `
    }
  })
)
