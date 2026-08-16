// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/image"],

  devtools: {
    enabled: false,
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2026-07-15",

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
  },

  routeRules: {
    "/_nuxt/**": {
      headers: {
        "cache-control": "public, max-age=31536000, immutable",
      },
    },
    "/fonts/**": {
      headers: {
        "cache-control": "public, max-age=31536000, immutable",
      },
    },
    "/favicon.ico": {
      headers: {
        "cache-control": "public, max-age=604800",
      },
    },

    "/candypay-archive": {
      redirect: { to: "https://turkeys-report-a2m.craft.me/8LpQJQ0tNPkLau", statusCode: 301 },
    },
  },

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
