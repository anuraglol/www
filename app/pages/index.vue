<script setup lang="ts">
import { EXPERIENCES, LINKS, PROJECTS, SKILLS, ACHIEVEMENTS } from "~/utils";

const isSafeHtml = (value: string): boolean => value.includes('data-safe="highlight"');
</script>

<template>
  <main class="min-h-screen w-full bg-background py-8 sm:py-16 md:py-24 lowercase">
    <div
      class="w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto flex flex-col px-4 sm:px-6 md:px-0"
    >
      <Routes />
      <p class="mb-6">welcome to my <span class="highlight">corner</span> of the internet!</p>

      <p class="leading-6">
        ohayo! i'm <Hover /> [he/him], a design engineer
        <a
          href="https://beanstalk.fi"
          target="_blank"
          rel="noopener noreferrer"
          class="highlight underline decoration-dashed underline-offset-4"
        >
          @beanstalk
        </a>
      </p>

      <p class="mt-3 leading-6">
        i'm an undergraduate at
        <a
          href="https://en.wikipedia.org/wiki/National_Institute_of_Technology,_Durgapur"
          target="_blank"
          rel="noopener noreferrer"
          class="highlight underline decoration-dashed underline-offset-4"
        >
          nit durgapur </a
        >, studying <span class="highlight">biotechnology</span>. i've been building software for 4+
        years, primarily across the web ecosystem. i've worked on trading interfaces, payment
        infrastructure and developer tooling used by thousands.
      </p>

      <p class="mt-3 leading-6">
        my work has mostly lived at the intersection of product and engineering, with a particular
        focus on frontend architecture, developer experience, and building scalable web applications
        and infrastructure.
      </p>

      <p class="mt-3 leading-6">
        outside of work, i've been gradually wandering deeper into the stack. lately i've been
        learning systems by building things from scratch, a chip-8 emulator in zig, a redis clone
        and a web-based sync engine. i've also spent a questionable amount of time tinkering with my
        <span class="highlight">*nix</span> setup.
      </p>

      <p class="mt-3 leading-6">
        when i'm not building things, i like reading, consuming various forms of media, and doing
        maths when i'm bored.
      </p>

      <p class="mt-3 leading-6">thanks for stopping by!</p>

      <div class="flex flex-wrap gap-4 items-center text-orange-600 mt-6">
        <a
          v-for="link in LINKS"
          :key="link.name"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
          class="underline decoration-dashed underline-offset-4"
        >
          {{ link.name }}
        </a>
      </div>

      <Divider />

      <section class="flex flex-col gap-5">
        <p class="text-lg sm:text-xl font-medium">experiences</p>
        <div v-for="(exp, index) in EXPERIENCES" :key="index" class="flex flex-col gap-2">
          <a
            target="_blank"
            rel="norefferer"
            :href="exp.link"
            class="font-medium hover:underline flex items-center gap-1"
          >
            {{ exp.title }}
            <IconArrow />
          </a>
          <p v-if="exp.description" class="leading-6" v-html="exp.description" />
        </div>
      </section>

      <Divider />

      <section class="flex flex-col gap-2">
        <p class="text-lg sm:text-xl font-medium">achievements</p>
        <div class="flex flex-col gap-2">
          <div v-for="(achievement, index) in ACHIEVEMENTS" :key="index">
            <div class="flex gap-3 items-baseline text-base sm:text-[16px]">
              <span class="text-orange-600">-</span>
              <p v-if="isSafeHtml(achievement)" v-html="achievement" />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section class="flex flex-col gap-5">
        <p class="text-lg sm:text-xl font-medium">projects / gigs</p>
        <div v-for="(proj, index) in PROJECTS" :key="index" class="flex flex-col gap-2">
          <a
            target="_blank"
            rel="norefferer"
            :href="proj.url"
            class="font-medium hover:underline flex items-center gap-1"
          >
            {{ proj.title }}
            <IconArrow />
          </a>
          <p class="leading-6">{{ proj.description }}</p>
        </div>
      </section>

      <Divider />

      <section class="flex flex-col gap-2">
        <p class="text-lg sm:text-xl font-medium">technical skills</p>
        <div class="flex flex-col">
          <div
            v-for="(skill, index) in SKILLS"
            :key="index"
            class="flex gap-2 text-base sm:text-[16px] items-baseline"
          >
            <span class="text-orange-600">-</span>
            <p v-if="isSafeHtml(skill)" v-html="skill" />
          </div>
        </div>
      </section>

      <p class="text-center italic mt-6 mb-8">and may the odds be ever in your favor :3</p>
    </div>
  </main>
</template>
