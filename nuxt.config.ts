// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],
  app: {
    head: {
      title: "Oz Duverger",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/Oz_name.ico" }
      ]
    }
  },
  runtimeConfig: {
    public: {
      emailJsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailJsTemplateDevId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_DEV_ID,
      emailJsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY
    }
  }
})
