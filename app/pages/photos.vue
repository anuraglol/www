<script setup lang="ts">
useSeoMeta({
  title: "Anurag | Photos",
  description: "Photos taken by Anurag.",
});
</script>

<template>
  <main
    class="min-h-screen w-full bg-background py-8 sm:py-16 md:py-24 lowercase"
  >
    <div
      class="w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto flex flex-col px-4 sm:px-6 md:px-0"
    >
      <Routes />
      <p>sometimes i take pictures too!</p>
      <Masonary />
    </div>
  </main>
</template>
