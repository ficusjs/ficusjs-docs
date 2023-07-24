---
layout: main.njk
title: FicusJS documentation - Extending components - withI18nReactive function
---
# withI18nReactive function

The `withI18nReactive` function extends a component and makes working with [internationalization (i18n)](/i18n/) easier in components.

The function works with the [event bus](/event-bus/) to listen for locale changes.
If the event bus is available on the component instance, the topic `i18n:locale:changed` is automatically subscribed to and will trigger the component re-render.
This is useful when the component is used in a multi-locale application and you want to re-render the component when the locale changes.

```js
// import it with all other features
import { createCustomElement, withI18nReactive, withEventBus } from 'https://cdn.skypack.dev/ficusjs@6'

// alternatively, import the functions directly
// import { withI18nReactive } from 'https://cdn.skypack.dev/ficusjs@6/with-i18n-reactive'
// import { withEventBus } from 'https://cdn.skypack.dev/ficusjs@6/with-event-bus'

// import the renderer and html tagged template literal from the uhtml renderer
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@5/uhtml'

// import an I18n instance from a local file
import { i18n } from './i18n.js'

// import an event bus instance
import { eventBus } from './event-bus.js'

createCustomElement(
  'my-component',
  withEventBus(eventBus,
    withI18nReactive(i18n, {
      renderer,
      buttonClicked () {
        // handle event
      },
      render () {
        return html`<button type="button" onclick=${this.buttonClicked}>${this.i18n.t('buttons.increment')}</button>`
      }
    })
  )
)
```

The `withI18nReactive` function provides a `this.i18n` property within the component.
The following methods are available within the component on `this..i18n`.

### t(key, templateData, options)

The `t()` method retrieves the translation message for the current locale.
The following arguments can be passed to the `t()` method.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | Yes | The key for the specific message. This can be a nested key like `buttons.increment` |
| `templateData` | `object` | | The optional data for message interpolation. The keys must match the message value. For example; the message `Greeting {{ name }}` requires a `templateData` object containing `{ name: 'FicuJS' }` |
| `options` | `object` | | An optional set of options for the message translation |

### getLocale()

The `getLocale()` method gets the current locale of the i18n instance.

### setLocale(locale)

The `setLocale()` method sets the current locale of the i18n instance.

The following arguments can be passed to the `setLocale()` method.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `locale` | `string` | Yes | The locale string. The default is `en` |

## detectLocale(callback)

The `detectLocale(callback)` method triggers the automated locale detection procedure and updates the current locale accordingly.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `callback` | `function` | | A function that is called after locale detection has completed. It is invoked with two arguments: `oldLocale` and `newLocale` |

## setI18n method

The `setI18n()` method can be called when an instance needs to be set after the component has initialised.
The method accepts an `i18n` argument which is a single `I18n` instance.

```js
{
  someMethod () {
    const i18n = getI18n()
    this.setI18n(i18n)
  }
}
```
