<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="font-mono text-blue-400 mb-6 flex gap-3 text-base *:hover:text-blue-500">
    <NuxtLink to="/" :class="route.name === 'index' ? 'text-blue-700' : ''">/index</NuxtLink>
    <NuxtLink to="/photos" :class="route.name === 'photos' ? 'text-blue-700' : ''"
      >/photos</NuxtLink
    >
  </div>
</template>
