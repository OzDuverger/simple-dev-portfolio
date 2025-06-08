// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],
  app: {
    head: {
      title: "Oz Duverger",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/Oz_name.ico" }
      ]
    }
  }
})
