import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Demo Docs",
  description: "Docs",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [{ text: "EPA Button api", link: "/epa-demo-button-api" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
