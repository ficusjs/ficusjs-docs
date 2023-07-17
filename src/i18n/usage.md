---
layout: main.njk
title: FicusJS documentation - I18n - Usage in components
---
# Usage in components

Once you have created the i18n instance, the `withI18n` function extends a component and makes working with i18n easier in component methods.

See [extending components](/composition) for more on the `withI18n` function.

```js
import { createCustomElement, createI18n, withI18n } from 'https://cdn.skypack.dev/ficusjs@6'
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@5/uhtml'

// create the i18n instance
const i18n = createI18n()

// change interpolation delimiters
i18n.interpolateWith(/\$(\w+)/g)

// populate the messages
i18n.add({
    projectTitle: 'Project title',
    button: {
        text: 'Click me $userName!',
        caption: 'Please click me!'
    },
    itemsCaption: [
        '$count item',
        '$count items'
    ],
    deep: {
        nested: {
            label: 'Deep nested label'
        }
    }
})

// Use the i18n instance in a new component
createCustomElement(
  'i18n-messages',
  withI18n(i18n, {
    renderer,
    render () {
      return html`
        <h1>i18n messages</h1>
        <dl>
          <dt>Title</dt>
          <dd>${this.i18n.t('projectTitle')}</dd>
          <dt>Button text</dt>
          <dd>${this.i18n.t('button.text', { userName: 'George' })}</dd>
          <dt>Button caption</dt>
          <dd>${this.i18n.t('button.caption')}</dd>
          <dt>Items caption</dt>
          <dd>${this.i18n.t('itemsCaption', { count: 0 })}</dd>
          <dd>${this.i18n.t('itemsCaption', { count: 1 })}</dd>
          <dd>${this.i18n.t('itemsCaption', { count: 2 })}</dd>
          <dt>Deep nested label</dt>
          <dd>${this.i18n.t('deep.nested.label')}</dd>
        </dl>
      `
    }
  })
)
```

Alternatively, fork this Codepen to see it in action - [https://codepen.io/ducksoupdev/pen/gOQeERm](https://codepen.io/ducksoupdev/pen/gOQeERm)
