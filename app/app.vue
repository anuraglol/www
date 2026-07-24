<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const router = useRouter();
  requestIdleCallback(() => {
    ["/photos", "/loves", "/uses"].forEach((route) => {
      preloadRouteComponents(route, router).catch(() => {});
    });
  });
});

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [
    { rel: "icon", href: "/favicon.ico" },
    {
      rel: "preload",
      as: "font",
      type: "font/woff2",
      href: "/fonts/Satoshi-Variable.woff2",
      crossorigin: true,
    },
    { rel: "preconnect", href: "https://res.cloudinary.com" },
    { rel: "dns-prefetch", href: "https://res.cloudinary.com" },
    {
      rel: "canonical",
      href: "https://anurag.tech",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  title: "Anurag | Web Engineer",
  description:
    "Anurag Kumar, undergraduate at NIT Durgapur studying Biotechnology, with 4+ years of experience in web engineering. Specializing in frontend development and building scalable Web3 applications.",
  keywords:
    "Anurag Kumar, Web Engineer, Frontend Developer, Web3, NIT Durgapur, Biotechnology, Portfolio, JavaScript, React, Next.js, CandyPay",
  author: "Anurag",

  ogTitle: "Anurag | Web Engineer",
  ogDescription:
    "Undergraduate at NIT Durgapur with 4+ years of web engineering experience. Focused on frontend development and Web3 projects.",
  ogUrl: "https://anurag.tech",
  ogSiteName: "Anurag Kumar Portfolio",
  ogType: "website",
  ogLocale: "en_US",
  ogImage: "https://anurag.tech/bg.webp",
  ogImageWidth: "1536",
  ogImageHeight: "1024",
  ogImageAlt: "Anurag's Portfolio",

  twitterCard: "summary_large_image",
  twitterTitle: "Anurag | Web Engineer",
  twitterDescription:
    "Frontend-focused web engineer & Web3 enthusiast. Undergraduate at NIT Durgapur.",
  twitterImage: "https://anurag.tech/bg.webp",
  twitterCreator: "@imanuraglol",
});
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
