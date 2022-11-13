---
layout: main.njk
title: FicusJS documentation - Components - Props
---
# Props

You pass props as HTML attributes on the component and then get access to them inside your component's JavaScript with `this.props`. 

Props must be defined using camel-case but set as kebab-case in HTML. Values are converted between Javascript types and HTML attributes.

Props are observed by default which means they react to changes and trigger re-renders.

```html
<example-component class-name="a-class" required="true"></example-component>
```

You'll need to define your prop types in the component definition, like so:

```js
props: {
  className: {
    type: String,
    default: 'btn',
    required: true, // is this required?
    observed: false // turn off observing changes to this prop
  },
  required: {
    type: Boolean,
    default: false
  }
}
```

The following properties are used to define props:

| Property   | Required | Value                                                                          |
| ---------- | -------- | ------------------------------------------------------------------------------ |
| `type`     | yes      | This must be one of `String`, `Number`, `Boolean` or `Object`                  |
| `default`  |          | Set a default value if one is not set                                          |
| `required` |          | Is this prop required when the component is used? If so, set to `true`         |
| `observed` |          | Set to `false` to turn off observing changes to this prop                     |

## Instance properties

Prop values can be set on instances of components. Each prop you define for a component becomes an instance property and can be set using Javascript.

```js
const exampleComponentInstance = document.querySelector('example-component')
exampleComponentInstance.className = 'another-value'
```

## Built-in props

FicusJS provides built-in props that are available on all components.

| Prop name | Type   | Description                                 |
|-----------| ------ |---------------------------------------------|
| `key`     | String | A value often used to re-render a component |

## Prop types

There are a number of prop types available for use in components. These are defined in the `type` property of the prop definition.

### String

```js
props: {
  className: {
    type: String
  }
}
```

### Number

```js
props: {
  count: {
    type: Number
  }
}
```

### Boolean

```js
props: {
  required: {
    type: Boolean
  }
}
```

### Object

```js
props: {
  options: {
    type: Object
  }
}
```

### Array

```js
props: {
  items: {
    type: Array
  }
}
```

### Function

Functions can be passed as props. These cannot be passed using HTML attributes as they cannot be converted from strings. Functions can only be passed using instance properties.

```js
props: {
  onClick: {
    type: Function
  }
}
```
