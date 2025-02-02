# Getting Started

Welcome to the **EPA Demo UI Library**! This guide will help you set up and start using the components efficiently.

## Installation

To install the library, run the following command:

```sh
npm install epa-demo-ui-library
```

or using Yarn:

```sh
yarn add epa-demo-ui-library
```

## Usage

After installation, import the library in your main entry file:

```ts
import { createApp } from "vue";
import App from "./App.vue";
import EPADemoUILibrary from "epa-demo-ui-library";

const app = createApp(App);
app.use(EPADemoUILibrary);
app.mount("#app");
```

## Importing Individual Components

Instead of registering the entire library, you can import specific components as needed:

```vue
<script setup>
import { EPAButton } from "epa-demo-ui-library";
</script>

<template>
  <EPAButton variant="primary">Click Me</EPAButton>
</template>
```

## Configuration

To customize the library, provide global options during installation:

```ts
app.use(EPADemoUILibrary);
```

## Next Steps

- Explore available components: [Components Overview](/components)
