// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@peterbud/nuxt-query", "@nuxt/image"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-01-15",

  nuxtQuery: {
    autoImports: ["useQuery", "useMutation", "useQueryClient"],
    devtools: true,
  },

  image: {
    provider: "cloudinary",
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dzheectoe/image/upload",
    },
  },
});
