# EPAButton

EPAButton is a simple UI component that can have different styles using the `variant` prop.

## Usage

The following example demonstrates how to use the component:

```vue
<script setup>
import EPAButton from "@/components/EPAButton.vue";
</script>

<template>
  <EPAButton variant="primary" />
</template>
```

## Props

| Prop      | Type   | Description                             | Default   |
| --------- | ------ | --------------------------------------- | --------- |
| `variant` | String | Defines the component style (`primary`) | `default` |

## Output

- If `variant="primary"` is set, the text will appear **blue**.
- If `variant` is not provided, the **default style** is applied.

## Styling

The component uses SCSS and applies styles via the `primary` class:

```scss
.container {
  font-family: sans-serif;
}
.primary {
  color: blue;
}
```
