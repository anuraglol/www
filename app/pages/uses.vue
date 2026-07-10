<script setup lang="ts">
useSeoMeta({
  title: "Anurag | Uses",
  description: "The software, tools and setup Anurag uses day to day.",
});
</script>

<template>
  <main class="min-h-screen w-full bg-background py-8 sm:py-16 md:py-24 lowercase">
    <div
      class="w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto flex flex-col px-4 sm:px-6 md:px-0"
    >
      <Routes />
      <p>
        the <span class="highlight">software</span> and setup i use to get things done.
        <a
          href="https://github.com/anuraglol/nixos-config"
          target="_blank"
          rel="noopener noreferrer"
          class="text-orange-600 hover:underline underline-offset-4"
        >
          [github]
        </a>
      </p>

      <Divider />

      <section class="flex flex-col gap-5">
        <div v-for="(group, index) in USES" :key="index" class="flex flex-col gap-2">
          <p class="text-lg sm:text-xl font-medium">{{ group.label }}</p>
          <div class="flex flex-col gap-1">
            <div
              v-for="(item, idx) in group.items"
              :key="idx"
              class="flex gap-3 items-baseline sm:text-[16px]"
            >
              <span class="text-orange-600">-</span>
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </section>

      <p class="text-center italic mt-8 mb-8">
        and yes, i use nixos btw :3
      </p>
    </div>
  </main>
</template>
