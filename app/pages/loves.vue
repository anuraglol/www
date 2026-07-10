<script setup lang="ts">
import { FAVORITES } from "~/utils";

useSeoMeta({
  title: "Anurag | Media",
  description: "Books, anime, manga, shows and movies I love.",
});
</script>

<template>
  <main class="min-h-screen w-full bg-background py-8 sm:py-16 md:py-24 lowercase">
    <div
      class="w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto flex flex-col px-4 sm:px-6 md:px-0"
    >
      <Routes />
      <p>my <span class="highlight">reading</span> list and favorite media.</p>

      <p class="mt-3 leading-6">
        i consume media the way some people collect stamps. aggressively, with no plan, and entirely
        based on vibe. here's what i'm into right now —
        <span class="highlight">books</span>, <span class="highlight">anime</span>,
        <span class="highlight">manga</span>, <span class="highlight">shows</span>, and
        <span class="highlight">movies</span>. this is what i'm currently reading / watching, not a
        all time favorites list.
      </p>

      <Divider />

      <section class="flex flex-col gap-5">
        <div v-for="(group, index) in FAVORITES" :key="index" class="flex flex-col gap-2">
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

      <p class="text-center italic mt-8 mb-8">we all have our escapes :3</p>
    </div>
  </main>
</template>
