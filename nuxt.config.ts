// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/image"],

  devtools: {
    enabled: false,
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2026-07-15",

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/photos", "/loves", "/uses"],
    },
  },

  image: {
    provider: "cloudinary",
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dzheectoe/image/upload",
    },
  },
});
