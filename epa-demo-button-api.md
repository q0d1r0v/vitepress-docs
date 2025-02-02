# EPAButton

EPAButton - bu oddiy UI komponent bo‘lib, `variant` xususiyati orqali turli uslublarga ega bo‘lishi mumkin.

## Foydalanish

Quyidagi misol komponentni qanday ishlatishni ko‘rsatadi:

```vue
<script setup>
import EPAButton from "@/components/EPAButton.vue";
</script>

<template>
  <EPAButton variant="primary" />
</template>
```

## Props

| Prop      | Tip    | Tavsif                                    | Default   |
| --------- | ------ | ----------------------------------------- | --------- |
| `variant` | String | Komponent uslubini belgilaydi (`primary`) | `default` |

## Natija

- Agar `variant="primary"` bo‘lsa, matn **ko‘k rangda** ko‘rinadi.
- Agar `variant` berilmasa, **standart uslub** ishlatiladi.

## Stil

Komponent SCSS dan foydalanadi va `primary` sinfi orqali rang beriladi:

```scss
.container {
  font-family: sans-serif;
}
.primary {
  color: blue;
}
```
