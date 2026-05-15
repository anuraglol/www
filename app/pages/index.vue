<script setup lang="ts">
import { EXPERIENCES, LINKS, PROJECTS, SKILLS, ACHIEVEMENTS } from "~/utils";

const isSafeHtml = (value: string): boolean =>
  value.includes('data-safe="highlight"');

useGallery();
</script>

<template>
  <main
    class="min-h-screen w-full bg-background text-foreground/80 font-medium py-8 sm:py-16 md:py-24 lowercase"
  >
    <div
      class="w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto flex flex-col px-4 sm:px-6 md:px-0"
    >
      <Routes />
      <p>
        welcome to my <span class="highlight">corner</span> of the internet!
      </p>

      <div
        class="w-full h-32 sm:h-80 md:h-96 rounded-sm border border-neutral-400/40 border-dashed relative my-6 p-1"
      >
        <div class="w-full h-full rounded-sm overflow-hidden relative">
          <img
            src="/bg.webp"
            alt="background"
            fill
            class="rounded-sm opacity-40 object-cover"
            priority
          />
        </div>
      </div>

      <p class="leading-6">
        ohayo! im <Hover /> [he/him] - previously a design engineer
        <a
          href="https://cleopetra.fun"
          target="_blank"
          rel="noopener norefferer"
          class="highlight"
        >
          @cleopetra
        </a>
      </p>

      <p class="mt-3 leading-6">
        i'm a fullstack engineer and an undergraduate at <span class="highlight">nit durgapur</span>,
        studying <span class="highlight">biotechnology</span>. over the past 4+ years, i've been building
        across the web3 ecosystem: trading interfaces, payment infrastructure, and developer tooling
        used by thousands. i specialize in frontend development, with a focus on clean architecture
        and scalable web applications.
      </p>
      <p class="mt-3 leading-6">
        thanks for stopping by! outside of work, i'm an avid reader, mostly fiction. i enjoy
        tinkering with linux distros and doing maths for fun when i'm bored.
      </p>

      <div class="flex flex-wrap gap-4 items-center text-orange-600 mt-6">
        <a
          v-for="link in LINKS"
          :key="link.name"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
          class="hover:underline underline-offset-4"
        >
          {{ link.name }}
        </a>
      </div>

      <Divider />

      <section class="flex flex-col gap-3">
        <p class="text-lg sm:text-xl font-semibold text-foreground">
          experiences
        </p>
        <div
          v-for="(exp, index) in EXPERIENCES"
          :key="index"
          class="flex flex-col gap-1"
        >
          <a
            target="_blank"
            rel="norefferer"
            :href="exp.link"
            class="font-semibold text-foreground hover:underline flex items-center gap-1"
          >
            {{ exp.title }}
            <UIcon name="i-lucide-arrow-up-right" class="size-5" />
          </a>
          <div class="flex flex-col gap-1">
            <div
              v-for="(item, idx) in exp.items"
              :key="idx"
              class="flex gap-3 items-baseline text-base sm:text-[16px]"
            >
              <span class="text-orange-600 font-semibold">-</span>
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section class="flex flex-col gap-2">
        <p class="text-lg sm:text-xl font-semibold text-foreground">
          achievements
        </p>
        <div class="flex flex-col gap-2">
          <div v-for="(achievement, index) in ACHIEVEMENTS" :key="index">
            <div class="flex gap-3 items-baseline text-base sm:text-[16px]">
              <span class="text-orange-600 font-semibold">-</span>
              <p v-if="isSafeHtml(achievement)" v-html="achievement" />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section class="flex flex-col gap-3">
        <p class="text-lg sm:text-xl font-semibold text-foreground">
          projects / gigs
        </p>
        <div
          v-for="(proj, index) in PROJECTS"
          :key="index"
          class="flex flex-col gap-1"
        >
          <a
            target="_blank"
            rel="norefferer"
            :href="proj.url"
            class="font-semibold text-foreground hover:underline flex items-center gap-1"
          >
            {{ proj.title }}
            <UIcon name="i-lucide-arrow-up-right" class="size-5" />
          </a>
          <div
            class="flex gap-3 items-baseline text-base sm:text-[16px] leading-snug"
          >
            <span class="text-orange-600 font-semibold">-</span>
            <p>{{ proj.description }}</p>
          </div>
        </div>
      </section>

      <Divider />

      <section class="flex flex-col gap-2">
        <p class="text-lg sm:text-xl font-semibold text-foreground">
          technical skills
        </p>
        <div class="flex flex-col">
          <div
            v-for="(skill, index) in SKILLS"
            :key="index"
            class="flex gap-2 text-base sm:text-[16px] items-baseline "
          >
            <span class="text-black font-semibold">-</span>
            <p v-if="isSafeHtml(skill)" v-html="skill" />
          </div>
        </div>
      </section>

      <p class="text-center italic text-foreground/70 mt-6 mb-8">
        and may the odds be ever in your favor :3
      </p>
    </div>
  </main>
</template
