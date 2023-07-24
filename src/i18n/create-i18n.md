---
layout: main.njk
title: FicusJS documentation - I18n - createI18n function
---
# createI18n function

Creating a new i18n instance using `createI18n` will create an instance of the `I18n` class.
This class provides methods for working with multiple languages and localisations.

**The i18n instance will be created as a singleton - this ensures only one instance exists.**

```js
import { createI18n } from 'https://cdn.skypack.dev/ficusjs@6'

// create the i18n instance and add the messages
const i18n = createI18n()
```

Upon instantiation, the current locale is automatically detected according to the following rules:

1. User-defined detection function (defaults to a function that reads the value of the `lang` query-string parameter, e.g. `?lang=es`)
2. HTML `lang` attribute `<html lang="es">`
3. `navigator.language` property

## Methods

The following methods are available on the i18n instance.

### add(items, locale, prefix)

```js
i18n.add({ greeting: 'Hello FicusJS' }, 'en')
```

The `add()` method adds messages to the i18n instance.

Message interpolation uses double handlebars <code>{\{ value }}</code>.

The following arguments can be passed to the `add()` method.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `object` | Yes | The object containing messages. The value of each message can be a simple string or, in the case of pluralized messages, an array of strings. |
| `locale` | `string` | | An optional locale for the messages. For example `es`. The default is `en` |
| `prefix` | `string` | | An optional prefix for the messages. It will be automatically prepended to each item's key. |

Pluralization is set by adding an array of messages to the `items` object.

```js
i18n.add({
  greeting: 'Hello FicusJS'
  itemsCaption: [
    '1 item',
    '0 or more items'
  ]
})
```

Interpolation is also supported in pluralization messages.

### t(key, templateData, options)

The `t()` method retrieves the translation message for the current locale.

Translation messages are stored under the specified key according to the current locale.
If `templateData` is present, messages are interpolated with `templateData`.

A specific locale translation can be specified via `options.locale`.

#### Pluralization

Pluralization is calculated by examining the `count` property passed in the `templateData` object.

```js
i18n.t('itemsCaption', { count: 0 }) // outputs  "0 or more items"
i18n.t('itemsCaption', { count: 1 }) // outputs  "1 item"
i18n.t('itemsCaption', { count: 2 }) // outputs  "0 or more items"
```

The `count` property can be changed in the `options` object by specifying `pluralizeTo`.

```js
i18n.t('itemsCaption', { num: 0 }, { pluralizeTo: 'num' }) // outputs  "0 items"
i18n.t('itemsCaption', { num: 1 }, { pluralizeTo: 'num' }) // outputs  "1 item"
i18n.t('itemsCaption', { num: 2 }, { pluralizeTo: 'num' }) // outputs  "2 items"
```

#### Arguments

The following arguments can be passed to the `t()` method.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | Yes | The key for the specific message. This can be a nested key like `navbar.buttons.home` |
| `templateData` | `object` | | The optional data for message interpolation. The keys must match the message value. For example; the message <code>Greeting {\{ name }}</code> requires a `templateData` object containing `{ name: 'FicusJS' }` |
| `options` | `object` | | An optional set of options for the message translation |

The following options can be passed to the `options` object.

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `locale` | `string` | | An optional locale for the messages. For example `es`. The default is `en` |
| `pluralizeTo` | `string` | | An optional property name to use for pluralization. The default is `count` |

```js
i18n.t('greeting', { name: 'FicusJS' }, { locale: 'es' })
```

### setLocale(locale)

The `setLocale()` method sets the current locale of the i18n instance without triggering automatic locale detection.

The following arguments can be passed to the `setLocale()` method.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `locale` | `string` | Yes | The locale string. The default is `en` |

```js
i18n.setLocale('es')
```

### getLocale()

The `getLocale()` method gets the current locale of the i18n instance.

```js
const locale = i18n.getLocale()

// locale is 'es'
```

## detectLocale(callback)

The `detectLocale()` method triggers the automated locale detection procedure and updates the current locale accordingly. If no detection methods provide a value, the current locale stays unchanged.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `callback` | `function` | | A function that is called after locale detection has completed. It is invoked with two arguments: `newLocale` and `oldLocale` |

```js
import { getEventBus } from 'https://cdn.skypack.dev/ficusjs@6'

// Notify reactive components when the current locale is updated
i18n.detectLocale((newLocale, oldLocale) => {
  if (newLocale !== oldLocale) {
    getEventBus().publish('i18n:locale:changed', newLocale)
  }
})
````

### interpolateWith(userRE)

The `interpolateWith()` method sets the regular expression for template strings interpolation.
By default, string interpolation uses double handlebars <code>{\{ value }}</code>.

This can be overridden using the `interpolateWith()` with the following arguments.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `userRE` | `RegExp` | Yes | The regex for template string interpolation |

```js
i18n.add({ welcomeMessage: 'Hello $userName' })

i18n.interpolateWith(/\$(\w+)/g)

const value = i18n.t('welcomeMessage', { userName: 'George' })

// value is 'Hello George'
```

### setLocaleDetectionRule(rule)

the `setLocaleDetectionRule()` method updates the user-defined locale detection rule.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `rule` | any | | Either a static value, a promise that resolves to a static value, or a function that returns either a static value or a promise that resolves to a static value |

- If `rule` is a function, it is re-evaluated every time that the locale detection procedure is triggered, and its result is treated according to the following two rules;
- If `rule` or the result of a `rule` function is a string or a promise that resolves to a string, the current locale is set to that value;
- If `rule` or the result of a `rule` function is a non-string value or a promise that resolves to a non-string value, the locale detection procedure skips the user-defined detection rule.

```js
// Disable user-defined locale detection and instead rely on the fallback detection methods
I18n.setLocaleDetectionRule(null)

// Force user-defined locale detection to 'fr'
I18n.setLocaleDetectionRule('fr')

// Get locale from subdomain, if present in the URL, relying on the fallback detection methods if undefined
I18n.setLocaleDetectionRule(() =>
    new URL(window.location).host.split('.').reverse()[2]
)

// Asynchronously query a back-end API, relying on the fallback detection methods in case of HTTP error or undefined result
I18n.setLocaleDetectionRule(() =>
    fetch('https/example.com/user/123?setting=locale')
        .then(resp => { if (resp.ok) return resp.text() })
)
```

### setPluralizationRule(locale, rule, options)

The `setPluralizationRule()` method sets a locale-specific pluralization rule function to determine plural form variation index.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `locale` | `string` | Yes | The locale that the `rule` function is defined for |
| `rule` | `function` | Yes | A locale-specific function that receives a count as parameter and returns an index into the array of pluralized translated messages |
| `options` | `object` | | An optional set of locale-specific options for the pluralization rule |

```js
i18n.setPluralizationRule('en', function (count) {
    return (1 === count) ? 0 : 1
}, { pluralizeTo: 'count' })
```

### whenUndefined(key, locale)

The `whenUndefined()` method defines a custom handler for when the requested item is not available.

```js
i18n.whenUndefined = function (key, locale) {
    return `${key}:undefined:${locale}`
}

const value = i18n.t('errors.dateInput')

// value is 'errors.dateInput:undefined:es'
```

### clear()

The `clear()` method empties the instance of messages.

```js
i18n.clear()
```
